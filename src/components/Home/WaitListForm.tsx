"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ContactImage } from "@/assets";
import Button from "../elements/Button";
import TextInput from "../elements/TextInput";
import waitlistService from "@/app/core/services/waitlist.service";

interface WaitlistFormProps {
	className?: string;
}

const SOURCE = "WEB" as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WaitlistForm: React.FC<WaitlistFormProps> = ({ className = "" }) => {
	const [email, setEmail] = useState("");
	const [fullName, setFullName] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		const trimmedEmail = email.trim();
		if (!trimmedEmail) {
			setError("Please enter your email");
			return;
		}
		if (!EMAIL_REGEX.test(trimmedEmail)) {
			setError("Please enter a valid email");
			return;
		}

		setLoading(true);

		const payload = {
			email: trimmedEmail,
			fullName: fullName.trim() || undefined,
			source: SOURCE,
		};

		console.log("[Waitlist] Submitting payload:", payload);

		try {
			const response = await waitlistService.addToWaitlist(payload);

			console.log("[Waitlist] Success response:", response);

			setSubmitted(true);
			setEmail("");
			setFullName("");
		} catch (err: any) {
			console.error("[Waitlist] Request failed:", {
				message: err?.message,
				statusCode: err?.statusCode,
				raw: err,
			});

			setError(err?.message || "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			id="waitlist"
			className={`relative py-16 md:py-20 lg:py-24 overflow-hidden ${className}`}
		>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8 relative z-10">
				<div className="max-w-8xl mx-auto">
					<div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
						<div className="absolute inset-0 z-0">
							<Image
								src={ContactImage}
								alt="Contact background"
								fill
								className="object-cover"
								priority
							/>
						</div>

						<div className="relative z-10 px-6 py-12 lg:px-12 lg:py-16 xl:px-16 xl:py-20">
							<div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
								{/* Copy */}
								<div className="flex-1 text-white lg:pr-8 mt-10 lg:mt-0">
									<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
										Be first to trade
										<br />
										without fear.
									</h2>
									<p className="text-lg md:text-xl opacity-90 max-w-2xl">
										Join the waitlist and get early access to Kazar — secure
										escrow for every deal, before it&apos;s open to everyone.
									</p>
								</div>

								{/* Form card */}
								<div className="flex-shrink-0 w-full max-w-md lg:max-w-lg">
									<div className="bg-white dark:bg-graydark rounded-2xl p-6 lg:p-8 border border-bodydark1/10 dark:border-white/10 shadow-4 hover:shadow-6 dark:shadow-none transition-all duration-300">
										{submitted ? (
											<div className="text-center py-6">
												<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
													<svg
														viewBox="0 0 24 24"
														fill="none"
														className="w-7 h-7"
														aria-hidden="true"
													>
														<path
															d="M5 13l4 4L19 7"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<h3 className="text-lg font-bold text-graydark dark:text-white mb-2">
													You&apos;re on the list
												</h3>
												<p className="text-sm text-bodydark2 dark:text-bodydark mb-6">
													We&apos;ll email you as soon as early access opens up.
												</p>
												<button
													onClick={() => setSubmitted(false)}
													className="text-sm font-medium text-meta-5 hover:underline"
												>
													Add another email
												</button>
											</div>
										) : (
											<>
												<h3 className="text-lg lg:text-xl font-bold text-graydark dark:text-white mb-1">
													Join the waitlist
												</h3>
												<p className="text-sm text-bodydark2 dark:text-bodydark mb-6">
													Takes less than a minute. No spam, ever.
												</p>

												<form onSubmit={handleSubmit} noValidate>
													<TextInput
														id="waitlist-email"
														type="email"
														mode="email"
														placeholder="you@example.com"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
														className="bg-gray-50 dark:bg-white/5 dark:text-white border-bodydark1/30 dark:border-white/15"
													/>

													<TextInput
														id="waitlist-fullname"
														type="text"
														placeholder="Full name (optional)"
														value={fullName}
														onChange={(e) => setFullName(e.target.value)}
														className="bg-gray-50 dark:bg-white/5 dark:text-white border-bodydark1/30 dark:border-white/15"
													/>

													{error && (
														<p className="text-sm text-danger mb-4">{error}</p>
													)}

													<Button
														label={loading ? "Joining..." : "Join the waitlist"}
														theme="primary"
														size="md"
														full
														disabled={loading}
														className="w-full"
													/>

													<p className="text-xs text-bodydark2 dark:text-bodydark text-center mt-4">
														By joining, you agree to be contacted about Kazar
														early access.
													</p>
												</form>
											</>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WaitlistForm;
