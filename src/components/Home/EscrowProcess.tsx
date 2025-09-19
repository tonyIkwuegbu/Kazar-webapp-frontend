import React from "react";
import Image from "next/image";
import { EscrowImage } from "@/assets";

interface EscrowProcessProps {
	alt?: string;
	className?: string;
}

const EscrowProcess: React.FC<EscrowProcessProps> = ({
	alt = "Escrow Deal Process Flow",
	className = "",
}) => {
	return (
		<section className={`py-12 md:py-16 lg:py-20 ${className}`}>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8">
				<div className="flex justify-center">
					<div className="relative w-full max-w-5xl">
						<Image
							src={EscrowImage}
							alt={alt}
							width={1200}
							height={600}
							className="
								w-full h-auto object-contain
								rounded-2xl shadow-2
								
							"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EscrowProcess;
