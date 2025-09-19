import React from "react";
import Image from "next/image";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { LogoImage } from "@/assets";

interface FooterProps {
	className?: string;
}

interface SocialLink {
	icon: React.ComponentType<{ className?: string }>;
	href: string;
	label: string;
	bgColor: string;
	hoverColor: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
	const currentYear = new Date().getFullYear();

	const socialLinks: SocialLink[] = [
		{
			icon: FaFacebookSquare,
			href: "#",
			label: "Facebook",
			bgColor: "bg-[#1877F2]",
			hoverColor: "hover:bg-[#166FE5]",
		},
		{
			icon: FaInstagramSquare,
			href: "#",
			label: "Instagram",
			bgColor: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
			hoverColor: "hover:scale-110",
		},
		{
			icon: FaXTwitter,
			href: "#",
			label: "X",
			bgColor: "bg-[#000000]",
			hoverColor: "hover:bg-[#111111]",
		},

		{
			icon: FaLinkedin,
			href: "#",
			label: "LinkedIn",
			bgColor: "bg-[#0A66C2]",
			hoverColor: "hover:bg-[#085D9F]",
		},
	];

	return (
		<footer className={` border-t border-bodydark1/20 ${className}`}>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="py-8 md:py-12 lg:py-16">
						<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
							<div className="flex-shrink-0">
								<div className="flex items-center">
									<Image
										src={LogoImage}
										alt="Kazar Logo"
										width={120}
										height={40}
										className="h-8 md:h-10 lg:h-12 w-auto object-contain"
										priority
									/>
								</div>
							</div>

							<div className="flex-1 text-center lg:text-center order-3 lg:order-2">
								<p className="text-sm md:text-base text-bodydark2 font-medium">
									© {currentYear} KAZAR. All rights reserved.
								</p>
							</div>

							{/* Social Links */}
							<div className="flex-shrink-0 order-2 lg:order-3">
								<div className="flex items-center gap-3 md:gap-4">
									{socialLinks.map((social, index) => {
										const Icon = social.icon;
										return (
											<a
												key={index}
												href={social.href}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={social.label}
												className={`
						  w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12
						  ${social.bgColor}
						  ${social.hoverColor}
						  rounded-full
						  flex items-center justify-center
						  text-white
						  transition-all duration-300
						  shadow-2 hover:shadow-4
						  transform hover:scale-105
						  group
						`}
											>
												<Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
											</a>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Border */}
					<div className="border-t border-bodydark1/10 py-4 md:py-6">
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs md:text-sm text-bodydark2/90">
							<div className="flex flex-wrap items-center gap-4 md:gap-6">
								<a
									href="#"
									className="hover:text-primary transition-colors duration-300"
								>
									Privacy Policy
								</a>
								<a
									href="#"
									className="hover:text-primary transition-colors duration-300"
								>
									Terms of Service
								</a>
							</div>
							<div className="text-center sm:text-right">
								<p>Made with ❤️ in Nigeria</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
