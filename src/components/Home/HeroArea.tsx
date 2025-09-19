import React from "react";
import Image from "next/image";
import Button from "../elements/Button";
import { Pattern1, Pattern2 } from "@/assets";

const HeroArea: React.FC = () => {
	return (
		<section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-4.5rem)] pt-16 lg:pt-18 flex items-center justify-center overflow-hidden">
			{/* Left Pattern */}
			<div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
				<Image
					src={Pattern1}
					alt="pattern-1"
					width={400}
					height={400}
					className="
						hidden lg:block w-[180px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto
						opacity-50 dark:opacity-0
						transition-opacity duration-300
					"
					priority
				/>
			</div>

			{/* Right Pattern */}
			<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
				<Image
					src={Pattern2}
					alt="pattern-2"
					width={400}
					height={400}
					className="
						hidden lg:block w-[180px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto
						opacity-50 dark:opacity-0
						transition-opacity duration-300
					"
					priority
				/>
			</div>

			{/* Hero Content */}
			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div className="max-w-5xl mx-auto">
					<div className="inline-flex items-center px-4 py-2 mb-8 bg-white/80 dark:bg-graydark/40 backdrop-blur-sm rounded-full border border-bodydark1/20 shadow-1">
						<span className="text-xs sm:text-sm text-bodydark2 font-medium">
							🔒 Buy, Sell, Or Offer Services — Safely.
						</span>
					</div>

					<div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
						<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-graydark dark:text-white leading-tight">
							Transact{" "}
							<span className="text-meta-5">
								Safely
								<span className=" w-full h-1 bg-gradient-to-r from-meta-5/40 to-meta-5/10 rounded-full"></span>
							</span>
							.
						</h1>
						<h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-graydark dark:text-white leading-tight">
							Trust{" "}
							<span className="text-meta-5 relative">
								KAZAR
								<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-meta-5/40 to-meta-5/10 rounded-full"></span>
							</span>
							.
						</h2>
					</div>

					<p className="text-base animate-tada sm:text-lg md:text-2xl text-bodydark2 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
						With KAZAR&apos;s smart escrow system, you&apos;ll never lose money
						to fake buyers or sellers again.
					</p>

					<div className="flex flex-col xsm:flex-row items-center justify-center gap-3 sm:gap-6">
						<Button
							label="See how it works"
							className="
								px-6 sm:px-8 py-3 sm:py-4 text-sm md:text-lg font-medium
								text-bodydark2 hover:text-meta-5 
								border-2 border-bodydark1/60 hover:border-meta-5/50
								bg-white backdrop-blur-sm hover:bg-white
								rounded-xl shadow-2 hover:shadow-4
								transition-all duration-300 transform hover:scale-105
								focus:outline-none focus:ring-2 focus:ring-meta-5/20
								min-w-[160px] sm:min-w-[190px]
							"
						/>
						<Button
							label="Try Kazaar for free →"
							className="
								px-6 sm:px-8 py-3 sm:py-4 text-sm md:text-lg font-medium
								bg-meta-5 hover:bg-meta-5/90 text-white 
								rounded-xl shadow-4 hover:shadow-6
								transition-all duration-300 transform hover:scale-105
								focus:outline-none focus:ring-2 focus:ring-meta-5/20
								min-w-[160px] sm:min-w-[190px]
								relative overflow-hidden
								before:absolute before:inset-0 before:bg-gradient-to-r 
								before:from-transparent before:via-white/20 before:to-transparent
								before:translate-x-[-200%] hover:before:translate-x-[200%]
								before:transition-transform before:duration-700
							"
						/>
					</div>

					<div className="mt-12 sm:mt-16 flex flex-col items-center space-y-3">
						<p className="text-xs sm:text-sm text-bodydark2/70 font-medium">
							Trusted by thousands of users worldwide
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroArea;
