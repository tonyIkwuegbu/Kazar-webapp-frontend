import { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
	title: "FAQ — Kazar",
	description:
		"Frequently asked questions about Kazar, escrow, BVN verification, disputes, withdrawals, and how peer-to-peer trading with Kazar works.",
};

export default function FaqPage() {
	return <FaqClient />;
}
