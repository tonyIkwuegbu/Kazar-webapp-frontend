import React from "react";
import { features } from "@/data/Features";

interface WhyChooseKazarProps {
	className?: string;
}

const WhyChooseKazar: React.FC<WhyChooseKazarProps> = ({ className = "" }) => {
	return (
		<section
			id="why-choose-us"
			className={`py-16 md:py-20 lg:py-24 ${className}`}
		>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-graydark dark:text-white mb-4">
						Why Choose <span className="text-meta-5">Kazar</span> Escrow
					</h2>
					<p className="text-lg md:text-xl text-bodydark2 dark:text-bodydark max-w-3xl mx-auto">
						Built for Nigeria&apos;s unique trading environment with features
						that protect, simplify, and accelerate your transactions.
					</p>
				</div>

				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
					{features.map((feature) => {
						const Icon = feature.icon;
						return (
							<div
								key={feature.title}
								className="group bg-secondary/10 dark:bg-white/5 rounded-2xl p-6 lg:p-8 border border-bodydark1/10 dark:border-white/10 hover:border-meta-5/30 shadow-1 hover:shadow-4 dark:shadow-none transition-all duration-300 hover:-translate-y-1"
							>
								<div
									className={`w-12 h-12 lg:w-16 lg:h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 lg:mb-6 transition-transform duration-300 group-hover:scale-110`}
								>
									<Icon
										className={`w-6 h-6 lg:w-8 lg:h-8 ${feature.iconColor}`}
									/>
								</div>
								<h3 className="text-lg lg:text-xl font-bold text-graydark dark:text-white mb-3 lg:mb-4 transition-colors duration-300 group-hover:text-meta-5">
									{feature.title}
								</h3>
								<p className="text-bodydark2 dark:text-bodydark leading-relaxed text-sm lg:text-base">
									{feature.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseKazar;
