import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroImage } from "@/assets";
import Button from "../elements/Button";

const TRUST_STATS = [
	{ value: "₦0", label: "Lost to fraud" },
	{ value: "100%", label: "Secure transactions" },
	{ value: "2 mins", label: "Average deal creation" },
];

const HeroArea: React.FC = () => {
	return (
		<section className="relative min-h-[calc(100dvh-80px)] pt-20 md:pt-10 lg:pt-0 flex items-center pb-12 overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-white dark:from-graydark dark:via-[#1a2535] dark:to-graydark">
			{/* Subtle background accent */}
			<div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(37,154,230,0.08)_0%,transparent_30%)] dark:bg-[radial-gradient(at_30%_20%,rgba(37,154,230,0.12)_0%,transparent_60%)]" />

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Content */}
					<div className="flex flex-col justify-center text-center lg:text-left">
						<div className="inline-flex items-center justify-center gap-2 px-5 py-2 mb-8 rounded-full border border-meta-5/30 bg-meta-5/5 dark:bg-meta-5/10">
							<span className="h-2 w-2 rounded-full bg-meta-5 animate-pulse" />
							<span className="text-sm font-semibold tracking-[2px] uppercase text-meta-5">
								NOW IN EARLY ACCESS
							</span>
						</div>

						<h1 className="tracking-wide text-[42px] md:text-[52px] lg:text-[58px] leading-[1.05] font-bold text-graydark dark:text-white">
							Trade without <span className="text-meta-5">fear</span> of fraud.
						</h1>

						<p className="mt-6 text-lg md:text-xl text-bodydark2 dark:text-bodydark max-w-lg mx-auto lg:mx-0">
							Kazar holds your money in escrow until both parties confirm the
							deal — no risk, no fake buyers, no lost cash.
						</p>

						{/* CTAs - Improved Mobile Experience */}
						<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-md mx-auto lg:mx-0">
							<Link href="#waitlist" className="w-full sm:w-auto">
								<Button
									theme="primary"
									size="md"
									className="text-base font-semibold w-full sm:min-w-[220px]"
								>
									Join the Waitlist
								</Button>
							</Link>

							<Link href="#how-it-works" className="w-full sm:w-auto">
								<Button
									theme="secondary"
									size="md"
									className="text-base font-medium w-full sm:min-w-[220px]"
								>
									See How It Works
								</Button>
							</Link>
						</div>

						{/* Trust Stats */}
						<div className="mt-12 flex items-center justify-center lg:justify-start gap-8 sm:gap-10">
							{TRUST_STATS.map((stat, i) => (
								<React.Fragment key={i}>
									{i > 0 && (
										<div className="h-9 w-px bg-bodydark1/60 dark:bg-bodydark/30" />
									)}
									<div>
										<div className="text-3xl font-bold text-graydark dark:text-white">
											{stat.value}
										</div>
										<div className="text-sm text-bodydark2 dark:text-bodydark mt-1">
											{stat.label}
										</div>
									</div>
								</React.Fragment>
							))}
						</div>
					</div>

					{/* Right Side - Slanted Phone */}
					<div className="flex justify-center lg:justify-end pt-8 lg:pt-0">
						<div className="relative">
							<div
								className="relative w-full max-w-[340px] md:max-w-[380px] transition-all duration-700 hover:scale-105"
								style={{
									transform:
										"perspective(1200px) rotateY(-30deg) rotateX(30deg)",
									transformStyle: "preserve-3d",
								}}
							>
								<div className="rounded-[2.75rem] overflow-hidden dark:border-white/90 shadow-2xl">
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
