"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { PublicTestimonial } from "@/app/core/services/testimonial.service";
import { getFirstNameInitial } from "@/utils/helpers/imageInitials";

interface Props {
	testimonials: PublicTestimonial[];
}

const AUTO_ROTATE_MS = 6000;

const BADGE_LABEL: Record<string, string> = {
	NEW: "New member",
	VERIFIED: "Verified",
	ESTABLISHED: "Established",
	TRUSTED: "Trusted",
	TOP_RATED: "Top Rated",
};

const AVATAR_PALETTE = [
	"bg-meta-5",
	"bg-emerald-500",
	"bg-purple-500",
	"bg-amber-500",
	"bg-rose-500",
];

function getAvatarColor(name: string): string {
	let hash = 0;
	for (let i = 0; i < name.length; i++) {
		hash = name.charCodeAt(i) + ((hash << 5) - hash);
	}
	return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length];
}

function Stars({ rating }: { rating: number }) {
	return (
		// ✅ role="img" so the aria-label is announced — div alone isn't sufficient
		<div
			role="img"
			aria-label={`${rating} out of 5 stars`}
			className="flex gap-0.5"
		>
			{Array.from({ length: 5 }, (_, i) => (
				<svg
					key={i}
					viewBox="0 0 20 20"
					fill={i < rating ? "currentColor" : "none"}
					stroke="currentColor"
					strokeWidth={i < rating ? 0 : 1.5}
					aria-hidden="true"
					className={`w-4 h-4 ${
						i < rating ? "text-warning" : "text-bodydark1 dark:text-white/20"
					}`}
				>
					<path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
				</svg>
			))}
		</div>
	);
}

function Avatar({
	name,
	pictureUrl,
}: {
	name: string;
	pictureUrl?: string | null;
}) {
	const [imgFailed, setImgFailed] = useState(false);
	const initial = getFirstNameInitial(name);
	const color = getAvatarColor(name);

	if (pictureUrl && !imgFailed) {
		return (
			<div className="relative w-14 h-14 shrink-0">
				<Image
					src={pictureUrl}
					alt={name}
					fill
					sizes="56px"
					className="rounded-full object-cover border-2 border-meta-5/30"
					onError={() => setImgFailed(true)}
				/>
			</div>
		);
	}

	return (
		<div
			aria-hidden="true"
			className={`w-14 h-14 shrink-0 rounded-full ${color} flex items-center justify-center text-white font-bold text-lg border-2 border-meta-5/30`}
		>
			{initial}
		</div>
	);
}

export default function TestimonialCarousel({ testimonials }: Props) {
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);
	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const count = testimonials.length;
	const multi = count > 1;

	const goTo = useCallback(
		(index: number) => setActive(((index % count) + count) % count),
		[count],
	);
	const next = useCallback(() => goTo(active + 1), [active, goTo]);
	const prev = useCallback(() => goTo(active - 1), [active, goTo]);

	useEffect(() => {
		if (!multi || paused) return;
		timerRef.current = setInterval(next, AUTO_ROTATE_MS);
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [multi, paused, next]);

	// ✅ Keyboard navigation
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [prev, next]);

	const t = testimonials[active];

	return (
		<div
			className="relative max-w-3xl mx-auto"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			{/* Ambient glow */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-meta-5/5 dark:bg-meta-5/8 blur-3xl"
			/>

			{/* ✅ Carousel region with proper ARIA */}
			<div
				role="region"
				aria-label="Customer testimonials"
				aria-roledescription="carousel"
				className="relative rounded-3xl border border-bodydark1/30 dark:border-white/10 bg-white dark:bg-graydark shadow-6 dark:shadow-none overflow-hidden"
			>
				{/* Decorative quote mark */}
				<svg
					viewBox="0 0 64 64"
					aria-hidden="true"
					className="absolute -top-3 -left-3 w-24 h-24 text-meta-5/[0.05] dark:text-meta-5/[0.08]"
					fill="currentColor"
				>
					<path d="M14 28c0-7.7 4.5-13.5 12-16l2 4.5c-5 2-7.5 5.5-7.5 10.5h7v15H14V28zm26 0c0-7.7 4.5-13.5 12-16l2 4.5c-5 2-7.5 5.5-7.5 10.5h7v15H40V28z" />
				</svg>

				{/* ✅ Slide with proper ARIA */}
				<div
					key={t.testimonialId}
					role="group"
					aria-roledescription="slide"
					aria-label={`${active + 1} of ${count}`}
					className="relative z-10 px-6 pt-10 pb-6 sm:px-10 sm:pt-12 md:px-14 md:pt-14"
				>
					<Stars rating={t.rating} />

					<p className="mt-5 text-lg sm:text-xl leading-relaxed text-graydark dark:text-white font-medium">
						&ldquo;{t.testimonialText}&rdquo;
					</p>

					<div className="mt-8 flex items-center gap-4">
						<Avatar name={t.firstName} pictureUrl={t.profilePicture} />

						<div className="flex-1 min-w-0">
							<p className="text-base font-bold text-graydark dark:text-white truncate">
								{t.firstName}
							</p>

							<div className="mt-1 flex flex-wrap items-center gap-2">
								<span className="inline-flex items-center gap-1 text-xs font-semibold text-meta-5">
									<svg
										viewBox="0 0 16 16"
										fill="currentColor"
										className="w-3.5 h-3.5"
										aria-hidden="true"
									>
										<path d="M8 1l1.9 3.8 4.2.6-3 2.9.7 4.2L8 10.4l-3.8 2 .7-4.2-3-2.9 4.2-.6L8 1z" />
									</svg>
									{BADGE_LABEL[t.badgeLevel] ?? t.badgeLevel}
								</span>
							</div>

							{/* ✅ Contrast fix — removed /70 and /60 opacity */}
							<p className="mt-0.5 text-[11px] text-bodydark2 dark:text-bodydark">
								Verified Kazar user · Since {t.memberSinceYear}
							</p>
						</div>
					</div>
				</div>

				{/* Controls */}
				{multi && (
					<div className="relative z-10 flex items-center justify-between px-6 sm:px-10 md:px-14 pb-8 pt-4 border-t border-bodydark1/10 dark:border-white/5">
						{/* ✅ Dot buttons — 44×44 touch target, aria-selected replaces aria-current */}
						<div
							className="flex items-center gap-1"
							role="tablist"
							aria-label="Testimonials"
						>
							{testimonials.map((item, i) => (
								<button
									key={item.testimonialId}
									role="tab"
									onClick={() => goTo(i)}
									aria-label={`Go to testimonial ${i + 1} of ${count}`}
									aria-selected={i === active}
									className="flex items-center justify-center w-11 h-11"
								>
									<span
										className={`block rounded-full transition-all duration-300 ${
											i === active
												? "w-7 h-1.5 bg-meta-5"
												: "w-2 h-2 bg-bodydark1/40 dark:bg-white/15 hover:bg-meta-5/50"
										}`}
									/>
								</button>
							))}
						</div>

						{/* ✅ Prev/Next — 44×44 (w-11 h-11) */}
						<div className="flex gap-2">
							{(
								[
									{
										label: "Previous testimonial",
										onClick: prev,
										path: "M10 3L5 8l5 5",
									},
									{
										label: "Next testimonial",
										onClick: next,
										path: "M6 3l5 5-5 5",
									},
								] as const
							).map(({ label, onClick, path }) => (
								<button
									key={label}
									onClick={onClick}
									aria-label={label}
									className="w-11 h-11 rounded-full flex items-center justify-center border border-bodydark1/40 dark:border-white/15 text-bodydark2 dark:text-bodydark hover:border-meta-5 hover:text-meta-5 transition-colors duration-200"
								>
									<svg
										viewBox="0 0 16 16"
										fill="none"
										className="w-3.5 h-3.5"
										aria-hidden="true"
									>
										<path
											d={path}
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							))}
						</div>
					</div>
				)}
			</div>

			{/* Progress bar */}
			{multi && !paused && (
				<div
					aria-hidden="true"
					className="mt-3 h-0.5 rounded-full bg-bodydark1/20 dark:bg-white/10 overflow-hidden"
				>
					<div
						key={`${active}-progress`}
						className="h-full bg-meta-5 rounded-full"
						style={{
							animation: `kazar-progress ${AUTO_ROTATE_MS}ms linear forwards`,
						}}
					/>
				</div>
			)}

			<style>{`
        @keyframes kazar-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
		</div>
	);
}
