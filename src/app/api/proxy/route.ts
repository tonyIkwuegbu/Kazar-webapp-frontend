import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { generateRequestId } from "@/utils/requestId";

const API_BASE_URL = process.env.API_BASE_URL!;
const API_KEY = process.env.API_KEY!;
const COOKIE_NAME = "_auth_session";
const IS_PROD = process.env.NODE_ENV === "production";

function generateSignature(email: string, requestId: string): string {
	const hmac = createHmac("sha512", API_KEY);
	return hmac.update(`${email}:${requestId}`).digest("hex");
}

export async function POST(req: NextRequest) {
	const { searchParams } = new URL(req.url);

	if (searchParams.get("action") === "set-session") {
		const { token, tokenExpiry } = await req.json();
		if (!token || !tokenExpiry) {
			return NextResponse.json(
				{ error: "Missing token or expiry" },
				{ status: 400 },
			);
		}
		const maxAge = tokenExpiry - Math.floor(Date.now() / 1000);
		const res = NextResponse.json({ ok: true });
		res.cookies.set(COOKIE_NAME, token, {
			httpOnly: true,
			secure: IS_PROD,
			sameSite: "strict",
			maxAge,
			path: "/",
		});
		return res;
	}

	return proxyRequest(req, "POST");
}

export async function DELETE(req: NextRequest) {
	const { searchParams } = new URL(req.url);

	if (searchParams.get("action") === "clear-session") {
		const res = NextResponse.json({ ok: true });
		res.cookies.delete(COOKIE_NAME);
		return res;
	}

	return proxyRequest(req, "DELETE");
}

export async function GET(req: NextRequest) {
	return proxyRequest(req, "GET");
}

export async function PUT(req: NextRequest) {
	return proxyRequest(req, "PUT");
}

export async function PATCH(req: NextRequest) {
	return proxyRequest(req, "PATCH");
}

async function proxyRequest(req: NextRequest, method: string) {
	try {
		const { searchParams } = new URL(req.url);
		const endpoint = searchParams.get("endpoint");

		if (!endpoint) {
			return NextResponse.json({ error: "Missing endpoint" }, { status: 400 });
		}

		if (!endpoint.startsWith("/")) {
			return NextResponse.json(
				{ error: "Invalid endpoint format" },
				{ status: 400 },
			);
		}

		const email =
			req.headers.get("x-user-email") ||
			req.headers.get("x-request-email") ||
			"guest@kazarapp.com";

		const requestId = generateRequestId();
		const signature = generateSignature(email, requestId);
		const authCookie = req.cookies.get(COOKIE_NAME)?.value;

		const headers: Record<string, string> = {
			"Content-Type": "application/json",
			Accept: "application/json",
			channel: "WEB",
			email,
			requestId,
			signature,
		};

		if (authCookie) {
			headers["Authorization"] = `Bearer ${authCookie}`;
		}

		const body =
			method !== "GET" && method !== "DELETE" ? await req.text() : undefined;

		const backendRes = await fetch(`${API_BASE_URL}${endpoint}`, {
			method,
			headers,
			body,
		});

		const data = await backendRes.json().catch(() => ({}));

		return NextResponse.json(data, { status: backendRes.status });
	} catch (error: any) {
		console.error("Proxy error:", error.message);
		return NextResponse.json(
			{ message: "Proxy request failed" },
			{ status: 502 },
		);
	}
}
