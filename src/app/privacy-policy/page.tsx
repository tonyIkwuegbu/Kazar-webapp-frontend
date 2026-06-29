import React from "react";
import { PRIVACY_POLICY, LegalContent } from "@/components/Home/LegalContent";

export const metadata = {
	title: "Privacy Policy — Kazar",
	description: "Kazar's privacy policy and data protection information.",
};

export default function PrivacyPolicyPage() {
	return (
		<div className="min-h-screen bg-white dark:bg-graydark">
			<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
				<div className="mb-12">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-meta-5/20 dark:border-meta-5/30 bg-meta-5/5 dark:bg-meta-5/10">
						<span className="text-xs font-semibold tracking-widest uppercase text-meta-5">
							Legal
						</span>
					</div>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight text-graydark dark:text-white mb-3">
						Privacy Policy
					</h1>
					<p className="text-sm text-bodydark2 dark:text-bodydark">
						Last updated: January 2025
					</p>
				</div>
				<div className="h-px bg-bodydark1/30 dark:bg-white/10 mb-12" />
				<LegalContent text={PRIVACY_POLICY} />
			</div>
		</div>
	);
}
