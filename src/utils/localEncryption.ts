// Uses Web Crypto API — no external library, built into every modern browser.
// Key is derived from the user's own email so it's unique per user
// and never stored anywhere — it's re-derived on every read.

const encoder = new TextEncoder();
const decoder = new TextDecoder();

async function deriveKey(secret: string): Promise<CryptoKey> {
	const keyMaterial = await crypto.subtle.importKey(
		"raw",
		encoder.encode(secret),
		"PBKDF2",
		false,
		["deriveKey"],
	);
	return crypto.subtle.deriveKey(
		{
			name: "PBKDF2",
			salt: encoder.encode("kazar-salt"),
			iterations: 100000,
			hash: "SHA-256",
		},
		keyMaterial,
		{ name: "AES-GCM", length: 256 },
		false,
		["encrypt", "decrypt"],
	);
}

export async function encryptData(data: any, secret: string): Promise<string> {
	const key = await deriveKey(secret);
	const iv = crypto.getRandomValues(new Uint8Array(12));
	const encoded = encoder.encode(JSON.stringify(data));
	const encrypted = await crypto.subtle.encrypt(
		{ name: "AES-GCM", iv },
		key,
		encoded,
	);
	// Store iv + encrypted together as base64
	const combined = new Uint8Array(iv.byteLength + encrypted.byteLength);
	combined.set(iv, 0);
	combined.set(new Uint8Array(encrypted), iv.byteLength);
	return btoa(String.fromCharCode(...combined));
}

export async function decryptData(
	ciphertext: string,
	secret: string,
): Promise<any> {
	try {
		const combined = Uint8Array.from(atob(ciphertext), (c) => c.charCodeAt(0));
		const iv = combined.slice(0, 12);
		const encrypted = combined.slice(12);
		const key = await deriveKey(secret);
		const decrypted = await crypto.subtle.decrypt(
			{ name: "AES-GCM", iv },
			key,
			encrypted,
		);
		return JSON.parse(decoder.decode(decrypted));
	} catch {
		return null;
	}
}
