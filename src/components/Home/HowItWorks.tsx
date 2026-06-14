"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
	Step1,
	Step2,
	Step3,
	StepOneImage,
	StepThreeImage,
	StepTwoImage,
} from "@/assets";

interface HowItWorksProps {
	className?: string;
}

interface Step {
	title: string;
	description: string;
	image: StaticImageData;
	badge: StaticImageData;
}

const STEPS: Step[] = [
	{
		title: "Create or join a deal",
		description:
			"Set the price, item details, delivery timeline and who pays the platform fee — then share a link. The other party can preview and join deal.",
		image: StepOneImage,
		badge: Step1,
	},
	{
		title: "Fund the escrow",
		description:
			"Once both sides agree on the terms, the buyer pays into escrow. Kazar holds the funds securely — the seller can't touch it until the deal is confirmed.",
		image: StepTwoImage,
		badge: Step2,
	},
	{
		title: "Confirm and release",
		description:
			"The seller ships with tracking, the buyer inspects within the agreed window, then confirms delivery to release the funds — or raises a dispute if something's wrong.",
		image: StepThreeImage,
		badge: Step3,
	},
];

const fadeUp = {
	hidden: { opacity: 0, y: 28 },
	visible: { opacity: 1, y: 0 },
};

const HowItWorks: React.FC<HowItWorksProps> = ({ className = "" }) => {
	return (
		<section
			id="how-it-works"
			className={`relative py-16 md:py-20 lg:py-28 bg-white dark:bg-graydark overflow-hidden ${className}`}
		>
			{/* Ambient background accent */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,154,230,0.06) 0%, transparent 70%)",
				}}
			/>

			<div className="container relative mx-auto px-4 2xsm:px-6 xsm:px-8">
				{/* Heading */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					variants={fadeUp}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="text-center mb-16 lg:mb-20"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full border border-meta-5/20 dark:border-meta-5/30 bg-meta-5/5 dark:bg-meta-5/10">
						<span className="text-xs font-semibold tracking-widest uppercase text-meta-5">
							The Kazar process
						</span>
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-graydark dark:text-white mb-4">
						How <span className="text-meta-5">Kazar</span> escrow works
					</h2>
					<p className="text-lg md:text-xl text-bodydark2 dark:text-bodydark max-w-2xl mx-auto">
						Three steps stand between &ldquo;let&apos;s do this&rdquo; and money
						safely changing hands — for buyers, sellers, and service deals
						alike.
					</p>
				</motion.div>

				{/* Steps */}
				<div className="max-w-6xl mx-auto flex flex-col gap-16 lg:gap-24">
					{STEPS.map((step, index) => {
						const reversed = index % 2 === 1;
						return (
							<div
								key={step.title}
								className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
									reversed ? "lg:[&>*:first-child]:order-2" : ""
								}`}
							>
								{/* Image side — image only, no overlaid text */}
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.3 }}
									variants={fadeUp}
									transition={{ duration: 0.6, ease: "easeOut" }}
									className="relative flex justify-center"
								>
									<div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">
										{/* Glow */}
										<div
											aria-hidden="true"
											className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] blur-3xl bg-meta-5/10 dark:bg-meta-5/15"
										/>
										<div className="relative rounded-2xl overflow-hidden border border-bodydark1/30 dark:border-white/10 shadow-6 dark:shadow-none transition-transform duration-500 hover:-translate-y-1.5">
											<Image
												src={step.image}
												alt={step.title}
												width={800}
												height={600}
												className="w-full h-auto object-cover"
											/>
										</div>
									</div>
								</motion.div>

								{/* Copy side */}
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.4 }}
									variants={fadeUp}
									transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
									className="text-center lg:text-left"
								>
									{/* Step number badge — actual image asset */}
									<div className="inline-flex mb-6">
										<Image
											src={step.badge}
											alt=""
											width={56}
											height={56}
											aria-hidden="true"
											className="w-14 h-14 rounded-2xl object-cover"
										/>
									</div>
									<h3 className="text-2xl md:text-3xl font-bold tracking-tight text-graydark dark:text-white mb-4">
										{step.title}
									</h3>
									<p className="text-base md:text-lg leading-relaxed text-bodydark2 dark:text-bodydark max-w-md mx-auto lg:mx-0">
										{step.description}
									</p>
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
