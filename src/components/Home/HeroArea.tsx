import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroImage } from "@/assets";
import Button from "../elements/Button";

const TRUST_STATS = [
	{ value: "₦0", label: "No fraud loss" },
	{ value: "100%", label: "Secure" },
	{ value: "2 mins", label: "Deal creation" },
];

const HeroArea: React.FC = () => {
	return (
		<section className="relative min-h-[calc(100dvh-80px)] pt-20 md:pt-10 lg:pt-0 flex items-center pb-12 overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-white dark:from-graydark dark:via-[#1a2535] dark:to-graydark">
			{/* Grid lines */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
				style={{
					backgroundImage: `
						linear-gradient(rgba(37,154,230,0.07) 1px, transparent 1px),
						linear-gradient(90deg, rgba(37,154,230,0.07) 1px, transparent 1px)
					`,
					backgroundSize: "72px 72px",
					maskImage:
						"radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)",
					WebkitMaskImage:
						"radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)",
				}}
			/>

			{/* Radial glow over grid */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,154,230,0.08) 0%, transparent 70%)",
				}}
			/>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Content */}
					<div className="flex flex-col justify-center text-center lg:text-left">
						{/* Eyebrow */}
						<div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-meta-5/30 bg-meta-5/5 dark:bg-meta-5/10 self-center lg:self-start">
							<span className="h-1.5 w-1.5 rounded-full bg-meta-5 animate-pulse" />
							<span className="text-xs font-semibold tracking-[2px] uppercase text-meta-5">
								Now in early access
							</span>
						</div>

						{/* Headline */}
						<h1 className="tracking-tight text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] leading-[1.05] font-bold text-graydark dark:text-white">
							Trade without <span className="text-meta-5">fear</span> of fraud.
						</h1>

						{/* Subtext */}
						<p className="mt-5 text-base sm:text-lg md:text-xl text-bodydark2 dark:text-bodydark max-w-lg mx-auto lg:mx-0">
							Kazar holds your money in escrow until both parties confirm the
							deal — no risk, no fake buyers, no lost cash.
						</p>

						{/* CTAs */}
						<div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto sm:max-w-none lg:mx-0">
							<Link href="#waitlist" className="w-full sm:w-1/2">
								<Button
									theme="primary"
									size="md"
									className="w-full text-sm sm:text-base font-semibold whitespace-nowrap"
								>
									Join Waitlist
								</Button>
							</Link>
							<Link href="#how-it-works" className="w-full sm:w-1/2">
								<Button
									theme="secondary"
									size="md"
									className="w-full text-sm sm:text-base font-medium whitespace-nowrap"
								>
									How It Works
								</Button>
							</Link>
						</div>

						{/* Trust Stats */}
						<div className="mt-10 w-full flex items-start justify-between sm:justify-center lg:justify-start sm:gap-10 px-2 sm:px-0">
							{TRUST_STATS.map((stat, i) => (
								<React.Fragment key={i}>
									{i > 0 && (
										<div className="h-10 w-px bg-bodydark1/40 dark:bg-bodydark/20 flex-shrink-0 self-center" />
									)}
									<div className="flex flex-col items-center lg:items-start flex-1 sm:flex-none">
										<div className="text-xl sm:text-2xl lg:text-3xl font-bold text-graydark dark:text-white leading-tight">
											{stat.value}
										</div>
										<div className="text-[11px] sm:text-sm text-bodydark2 dark:text-bodydark mt-1 leading-tight text-center lg:text-left">
											{stat.label}
										</div>
									</div>
								</React.Fragment>
							))}
						</div>
					</div>

					{/* Right Side - Phone */}
					<div className="flex justify-center lg:justify-end animate-wobble">
						<div className="relative">
							<div
								className="relative w-[200px] sm:w-[280px] md:w-[320px] lg:w-[380px] transition-all duration-700 hover:scale-105"
								style={{
									transform:
										"perspective(1200px) rotateY(-30deg) rotateX(30deg)",
									transformStyle: "preserve-3d",
								}}
							>
								<div className="rounded-[2.75rem] overflow-hidden shadow-2xl">
									<Image
										src={HeroImage}
										alt="Kazar mobile app interface"
										width={400}
										height={520}
										className="w-full h-auto object-cover"
										priority
									/>
								</div>
								{/* Ambient glow */}
								<div className="absolute -inset-10 -z-10 bg-meta-5/20 dark:bg-meta-5/10 blur-3xl rounded-[4rem]" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroArea;
