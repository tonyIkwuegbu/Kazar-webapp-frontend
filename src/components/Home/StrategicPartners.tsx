import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Partner1, Partner2, Partner3, Partner4, Partner5 } from "@/assets";
import { StaticImageData } from "next/image";

interface Partner {
	name: string;
	logo: string | StaticImageData;
	width?: number;
	height?: number;
}

interface StrategicPartnersProps {
	className?: string;
}

const StrategicPartners: React.FC<StrategicPartnersProps> = ({
	className = "",
}) => {
	const partners: Partner[] = [
		{
			name: "Partner 1",
			logo: Partner1,
			width: 120,
			height: 40,
		},
		{
			name: "Partner 2",
			logo: Partner2,
			width: 100,
			height: 50,
		},
		{
			name: "Partner 3",
			logo: Partner3,
			width: 120,
			height: 70,
		},

		{
			name: "Partner 5",
			logo: Partner5,
			width: 130,
			height: 65,
		},
	];

	// Duplicate partners array for seamless infinite scroll
	const duplicatedPartners = [...partners, ...partners, ...partners];

	return (
		<section className={`py-12 md:py-16  ${className}`}>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h3 className="text-lg md:text-xl font-medium text-bodydark2 mb-2">
						Key Partners
					</h3>
					<p className="text-sm md:text-base text-bodydark2/70">and Clients</p>
				</motion.div>

				<div className="relative overflow-hidden">
					<motion.div
						className="flex items-center space-x-12 md:space-x-16 lg:space-x-20"
						animate={{ x: [0, -100 * partners.length] }}
						transition={{
							duration: 30,
							ease: "linear",
							repeat: Infinity,
						}}
						whileHover={{ animationPlayState: "paused" }}
					>
						{duplicatedPartners.map((partner, index) => (
							<motion.div
								key={`${partner.name}-${index}`}
								className="
									flex-shrink-0 flex items-center justify-center
									h-16 md:h-20 lg:h-24
									px-4 md:px-6
									group cursor-pointer
								"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								<div className="relative">
									<Image
										src={partner.logo}
										alt={`${partner.name} logo`}
										width={partner.width || 120}
										height={partner.height || 60}
										className="
											h-8 md:h-10 lg:h-12 w-auto object-contain
											opacity-60 hover:opacity-100
											transition-all duration-300
											filter grayscale hover:grayscale-0
										"
									/>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>

				<motion.div
					className="text-center mt-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<p className="text-xs md:text-sm text-bodydark2/60">
						Trusted by leading organizations across Nigeria and beyond
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default StrategicPartners;
