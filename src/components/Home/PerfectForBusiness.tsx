import React from "react";

interface BusinessTypeProps {
	className?: string;
}

const BUSINESS_TYPES = [
	{
		icon: "🛒",
		title: "Online Sellers",
		description:
			"Share a deal link for your product, agree on price and delivery terms, and get paid the moment the buyer confirms — no chargebacks, no fake transfers.",
		iconBg: "bg-warning/10",
	},
	{
		icon: "📱",
		title: "Social Media Vendors",
		description:
			"Selling through Instagram, WhatsApp or Twitter DMs? Turn any chat into a secure deal link — buyers pay into escrow, so 'send money first' scams are no longer a risk for either side.",
		iconBg: "bg-meta-5/10",
	},
	{
		icon: "🛡️",
		title: "Smart Buyers",
		description:
			"Your money stays in escrow until you've inspected and confirmed the item or service. If something's wrong, raise a dispute — full refund, partial refund, or replacement.",
		iconBg: "bg-success/10",
	},
];

const PerfectForBusiness: React.FC<BusinessTypeProps> = ({
	className = "",
}) => {
	return (
		<section className={`py-16 md:py-20 lg:py-24 ${className}`}>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8">
				<div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-meta-5 via-meta-5 to-blue-600 p-8 md:p-12 lg:p-16">
					<div className="text-center mb-12 lg:mb-16">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
							Built for every side of a deal
						</h2>
						<p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
							Whether you&apos;re selling or buying, Kazar holds the money until
							both sides are satisfied.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
						{BUSINESS_TYPES.map((type) => (
							<div
								key={type.title}
								className="bg-white dark:bg-graydark rounded-2xl p-6 lg:p-8 shadow-4 transition-transform duration-300 hover:-translate-y-1 border border-white/20"
							>
								<div
									className={`w-16 h-16 ${type.iconBg} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
								>
									<span className="text-2xl">{type.icon}</span>
								</div>
								<h3 className="text-xl lg:text-2xl font-bold text-graydark dark:text-white text-center mb-4">
									{type.title}
								</h3>
								<p className="text-bodydark2 dark:text-bodydark text-center leading-relaxed text-sm lg:text-base">
									{type.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PerfectForBusiness;
