import React from "react";
import Image from "next/image";
import { Step1, Step2, Step3 } from "@/assets";

interface HowItWorksProps {
	className?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ className = "" }) => {
	return (
		<section className={`py-16 md:py-20 lg:py-24 bg-gray-50 ${className}`}>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-graydark mb-4">
						How <span className="text-meta-5">KAZAR</span> Escrow Works
					</h2>
					<p className="text-lg md:text-xl text-bodydark2 max-w-2xl mx-auto">
						Secure transactions in 3 simple steps — whether you&apos;re buying,
						selling, or offering a service.
					</p>
				</div>

				{/* Steps Grid */}
				<div className="max-w-5xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
						<div className="flex justify-center">
							<div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl px-2 sm:px-0">
								<div className="relative group">
									<Image
										src={Step1}
										alt="Step 1: Start a Deal or Join One"
										width={800}
										height={500}
										className="
										w-full h-auto object-contain max-w-md
										transition-transform duration-300
										group-hover:scale-105
									"
									/>
								</div>
							</div>
						</div>

						{/* Step 2 */}
						<div className="flex justify-center">
							<div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl px-2 sm:px-0">
								<div className="relative group">
									<Image
										src={Step2}
										alt="Step 2: Make Payment Into Escrow"
										width={400}
										height={300}
										className="
										w-full h-auto object-contain max-w-md
										transition-transform duration-300
										group-hover:scale-105
									"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Second Row - Step 3 */}
					<div className="flex justify-center">
						<div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl px-2 sm:px-0">
							<div className="relative group">
								<Image
									src={Step3}
									alt="Step 3: Complete the Transaction"
									width={800}
									height={500}
									className="
										w-full h-auto object-cover
										transition-transform duration-300
										group-hover:scale-102
									"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
