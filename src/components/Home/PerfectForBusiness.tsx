import React from "react";

interface BusinessTypeProps {
	className?: string;
}

const PerfectForBusiness: React.FC<BusinessTypeProps> = ({
	className = "",
}) => {
	const businessTypes = [
		{
			icon: "🛒",
			title: "Online Sellers",
			description: "Sell products safely without worry about payment fraud.",
			bgColor: "bg-white",
			textColor: "text-graydark",
			iconBg: "bg-warning/10",
			iconColor: "text-warning",
		},
		{
			icon: "🔧",
			title: "Service Providers",
			description: "Get paid for your services and freelance work.",
			bgColor: "bg-white",
			textColor: "text-graydark",
			iconBg: "bg-meta-5/10",
			iconColor: "text-meta-5",
		},
		{
			icon: "🔒",
			title: "Smart Buyers",
			description: "Shop online with confidence and payment protection.",
			bgColor: "bg-white",
			textColor: "text-graydark",
			iconBg: "bg-graydark/10",
			iconColor: "text-graydark",
		},
	];

	return (
		<section className={`py-16 md:py-20 lg:py-24 ${className}`}>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8">
				<div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
					<div className="bg-gradient-to-br from-meta-5 via-meta-5 to-blue-600 p-8 md:p-12 lg:p-16">
						<div className="text-center mb-12 lg:mb-16">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
								Perfect for Every Business
							</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
							{businessTypes.map((type, index) => (
								<div
									key={index}
									className={`
										${type.bgColor} rounded-2xl p-6 lg:p-8
										shadow-4 hover:shadow-4
										transition-all duration-300 transform hover:scale-105
										border border-white/20
									`}
								>
									<div
										className={`
										w-16 h-16 ${type.iconBg} rounded-2xl
										flex items-center justify-center mb-6
										mx-auto
									`}
									>
										<span className="text-2xl">{type.icon}</span>
									</div>

									<h3
										className={`
										text-xl lg:text-2xl font-bold ${type.textColor}
										text-center mb-4
									`}
									>
										{type.title}
									</h3>

									<p
										className={`
										${type.textColor} text-center leading-relaxed
										text-sm lg:text-base opacity-80
									`}
									>
										{type.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PerfectForBusiness;
