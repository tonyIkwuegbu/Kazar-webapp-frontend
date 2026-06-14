import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroImage } from "@/assets";

const TRUST_STATS = [
	{ value: "₦0", label: "Lost to fraud" },
	{ value: "100%", label: "Secure transactions" },
	{ value: "2 mins", label: "Average deal creation" },
];

const HeroArea: React.FC = () => {
	return (
		<section className="relative flex items-center min-h-[calc(100vh-4rem)] pt-24 sm:pt-16 overflow-hidden bg-white dark:bg-graydark">
			{/* Subtle radial glow — pure CSS, no image assets */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse 70% 50% at 50% -5%, rgba(37,154,230,0.08) 0%, transparent 70%)",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* ── Left: copy ── */}
					<div className="text-center lg:text-left">
						{/* Eyebrow */}
						<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-7 sm:mb-8 rounded-full border border-meta-5/20 dark:border-meta-5/30 bg-meta-5/5 dark:bg-meta-5/10">
							<span className="h-1.5 w-1.5 rounded-full bg-meta-5 animate-pulse" />
							<span className="text-xs font-semibold tracking-widest uppercase text-meta-5">
								Now in early access
							</span>
						</div>

						{/* Headline */}
						<h1 className="text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.08] tracking-tight text-graydark dark:text-white">
							Trade without{" "}
							<span className="relative inline-block text-meta-5">
								fear
								<span
									aria-hidden="true"
									className="absolute -bottom-1.5 left-0 h-[4px] w-full rounded-full bg-meta-5/25"
								/>
							</span>{" "}
							of fraud.
						</h1>

						<p className="mt-6 text-lg sm:text-xl leading-relaxed text-bodydark2 dark:text-bodydark max-w-md mx-auto lg:mx-0">
							Kazar holds your money in escrow until both buyer and seller
							confirm the deal is done — no risk, no fake buyers, no lost cash.
						</p>

						{/* CTAs */}
						<div className="mt-9 sm:mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
							<Link
								href="#waitlist"
								className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-meta-5 hover:bg-meta-5/90 transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-meta-5/40"
							>
								Join the waitlist
								<svg
									viewBox="0 0 16 16"
									fill="none"
									className="w-4 h-4"
									aria-hidden="true"
								>
									<path
										d="M3 8h10M9 4l4 4-4 4"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</Link>
							<Link
								href="#how-it-works"
								className="inline-flex items-center px-7 py-3.5 rounded-xl text-base font-medium text-bodydark2 dark:text-bodydark border border-bodydark1/50 dark:border-white/15 hover:border-meta-5 hover:text-meta-5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-meta-5/40"
							>
								See how it works
							</Link>
						</div>

						{/* Trust stats */}
						<div className="mt-12 flex items-center gap-6 sm:gap-8 flex-wrap justify-center lg:justify-start">
							{TRUST_STATS.map((stat, i) => (
								<React.Fragment key={stat.label}>
									{i > 0 && (
										<div className="h-9 w-px bg-bodydark1/50 dark:bg-white/10" />
									)}
									<div className="flex flex-col gap-1">
										<span className="text-xl sm:text-2xl font-bold tracking-tight text-graydark dark:text-white">
											{stat.value}
										</span>
										<span className="text-xs sm:text-sm text-bodydark2 dark:text-bodydark">
											{stat.label}
										</span>
									</div>
								</React.Fragment>
							))}
						</div>
					</div>

					{/* ── Right: 3D hero image ── */}
					<div className="flex justify-center lg:justify-end">
						<div
							className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[320px]"
							style={{ perspective: "1600px" }}
						>
							<div
								className="group relative rounded-[1.25rem] overflow-hidden border border-bodydark1/30 dark:border-white/10 transition-transform duration-700 ease-out will-change-transform hover:[transform:rotateY(-6deg)_rotateX(2deg)_scale(1.015)]"
								style={{
									transform: "rotateY(-30deg) rotateX(30deg)",
									transformStyle: "preserve-3d",
									boxShadow:
										"24px 32px 60px -20px rgba(37,154,230,0.4), 0 10px 30px -10px rgba(0,0,0,0.15)",
								}}
							>
								<Image
									src={HeroImage}
									alt="Kazar mobile app showing an active escrow deal"
									width={400}
									height={820}
									className="w-full h-auto object-cover block"
									priority
								/>
								{/* Glass sheen overlay for depth */}
								<div
									aria-hidden="true"
									className="pointer-events-none absolute inset-0"
									style={{
										background:
											"linear-gradient(115deg, rgba(255,255,255,0.22) 0%, transparent 35%, transparent 70%, rgba(0,0,0,0.1) 100%)",
									}}
								/>
							</div>

							{/* Ambient glow behind the image */}
							<div
								aria-hidden="true"
								className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] opacity-60 dark:opacity-40 blur-3xl"
								style={{
									background:
										"radial-gradient(circle at 65% 45%, rgba(37,154,230,0.35), transparent 70%)",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroArea;
