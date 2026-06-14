export type WaitlistSource = "WEB" | "MOBILE" | "REFERRAL" | "SOCIAL" | "OTHER";

export interface WaitlistPayload {
	email: string;
	fullName?: string;
	source?: WaitlistSource;
}
