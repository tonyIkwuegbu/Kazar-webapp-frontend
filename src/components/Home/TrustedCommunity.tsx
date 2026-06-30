"use client";

import publicTestimonialService, {
	PublicTestimonial,
} from "@/app/core/services/testimonial.service";
import React, { useState, useEffect } from "react";
import TestimonialCarousel from "../TestimonailCarousel";

interface TrustedCommunityProps {
	className?: string;
}

function TestimonialSkeleton() {
	return (
		<div className="max-w-3xl mx-auto animate-pulse">
			<div className="rounded-3xl border border-bodydark1/30 dark:border-white/10 bg-white dark:bg-graydark px-6 pt-10 pb-8 sm:px-10 md:px-14 md:pt-14">
				<div className="flex gap-1">
					{Array.from({ length: 5 }).map((_, i) => (
						<div
							key={i}
							className="w-4 h-4 rounded-sm bg-bodydark1/30 dark:bg-white/10"
						/>
					))}
				</div>
				<div className="mt-5 space-y-3">
					<div className="h-4 w-full rounded-full bg-bodydark1/30 dark:bg-white/10" />
					<div className="h-4 w-5/6 rounded-full bg-bodydark1/30 dark:bg-white/10" />
					<div className="h-4 w-2/3 rounded-full bg-bodydark1/30 dark:bg-white/10" />
				</div>
				<div className="mt-8 flex items-center gap-4">
					<div className="w-14 h-14 rounded-full bg-bodydark1/30 dark:bg-white/10 shrink-0" />
					<div className="flex-1 space-y-2">
						<div className="h-3.5 w-32 rounded-full bg-bodydark1/30 dark:bg-white/10" />
						<div className="h-3 w-48 rounded-full bg-bodydark1/20 dark:bg-white/5" />
						<div className="h-2.5 w-40 rounded-full bg-bodydark1/20 dark:bg-white/5" />
					</div>
				</div>
			</div>
		</div>
	);
}

const TrustedCommunity: React.FC<TrustedCommunityProps> = ({
	className = "",
}) => {
	const [testimonials, setTestimonials] = useState<PublicTestimonial[] | null>(
		null,
	);

	useEffect(() => {
		let cancelled = false;
		publicTestimonialService
			.fetchPublic({ limit: 5, minRating: 5 })
			.then((data) => {
				if (!cancelled) setTestimonials(data);
			});
		return () => {
			cancelled = true;
		};
	}, []);

	const isLoading = testimonials === null;

	if (!isLoading && testimonials.length === 0) return null;

	return (
		<section className={`py-16 md:py-20 lg:py-24 ${className}`}>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8">
				<div className="text-center mb-14 lg:mb-16">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full border border-meta-5/20 dark:border-meta-5/30 bg-meta-5/5 dark:bg-meta-5/10">
						<span className="text-xs font-semibold tracking-widest uppercase text-meta-5">
							Real stories
						</span>
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-graydark dark:text-white mb-4">
						What our <span className="text-meta-5">buyers & sellers</span> are
						saying
					</h2>
					<p className="text-lg md:text-xl text-bodydark2 dark:text-bodydark max-w-2xl mx-auto">
						Real feedback from people who&apos;ve completed deals on Kazar.
					</p>
				</div>

				{isLoading ? (
					<TestimonialSkeleton />
				) : (
					<TestimonialCarousel testimonials={testimonials} />
				)}
			</div>
		</section>
	);
};

export default TrustedCommunity;
