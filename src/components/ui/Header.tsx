"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../elements/Button";
import { LogoImage } from "@/assets";
import DarkModeButton from "../elements/DarkModeButton";

const Header: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when clicking outside or resizing
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMobileMenuOpen(false);
			}
		};

		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
				setIsMobileMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		document.addEventListener("click", handleClickOutside);

		return () => {
			window.removeEventListener("resize", handleResize);
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isMobileMenuOpen]);

	const navLinks = [
		{ href: "#how-it-works", label: "How It Works" },
		{ href: "#why-choose-us", label: "Why Choose Us" },
		{ href: "#contact", label: "Contact Us" },
	];

	return (
		<header
			className={`
				fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out
				${
					isScrolled
						? "bg-white/95 backdrop-blur-md shadow-2 border-b border-bodydark1/20"
						: "bg-white shadow-1"
				}
			`}
		>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8">
				<div className="flex items-center justify-between h-16 lg:h-18">
					<div className="flex-shrink-0 flex items-center">
						<Link href="/" className="block">
							<Image
								src={LogoImage}
								alt="Kazar Logo"
								width={150}
								height={45}
								className="object-contain w-auto h-8 xsm:h-10 transition-transform duration-200 hover:scale-105"
								priority
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
						{navLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className="
									relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium 
									text-bodydark2 hover:text-meta-5 transition-all duration-200
									before:absolute before:bottom-0 before:left-1/2 before:w-0 
									before:h-0.5 before:bg-meta-5 before:transition-all before:duration-300
									hover:before:w-full hover:before:left-0
									focus:outline-none focus:ring-2 focus:ring-meta-5/20 focus:rounded-md
								"
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* Desktop Action Buttons */}
					<div className="hidden md:flex items-center space-x-3 lg:space-x-4">
						<DarkModeButton />
						<Button
							label="Login"
							className="
								px-4 lg:px-6 py-2 text-sm lg:text-base font-medium
								text-bodydark2 hover:text-meta-5 
								border border-bodydark1/30 hover:border-meta-5/50
								bg-transparent hover:bg-meta-5/5
								rounded-lg transition-all duration-200
								focus:outline-none focus:ring-2 focus:ring-meta-5/20
							"
						/>
						<Button
							label="Try for free"
							className="
								px-4 lg:px-6 py-2 text-sm lg:text-base font-medium
								bg-meta-5 hover:bg-meta-5/90 text-white 
								rounded-lg shadow-2 hover:shadow-4
								transition-all duration-200 transform hover:scale-105
								focus:outline-none focus:ring-2 focus:ring-meta-5/20
							"
						/>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center space-x-3 mobile-menu-container">
						<DarkModeButton />
						<button
							onClick={(e) => {
								e.stopPropagation();
								setIsMobileMenuOpen(!isMobileMenuOpen);
							}}
							className="
								relative p-2 text-bodydark2 hover:text-meta-5 
								focus:outline-none focus:ring-2 focus:ring-meta-5/20 
								rounded-md transition-colors duration-200
							"
							aria-label="Toggle mobile menu"
							aria-expanded={isMobileMenuOpen}
						>
							<div className="w-6 h-6 flex flex-col justify-center items-center">
								<span
									className={`
										block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out
										${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1"}
									`}
								/>
								<span
									className={`
										block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out
										${isMobileMenuOpen ? "opacity-0" : "mb-1"}
									`}
								/>
								<span
									className={`
										block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out
										${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}
									`}
								/>
							</div>
						</button>
					</div>
				</div>

				{/* Mobile Menu Dropdown */}
				<div
					className={`
						md:hidden mobile-menu-container overflow-hidden transition-all duration-300 ease-in-out
						${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
					`}
				>
					<div className="py-4 space-y-1 border-t border-bodydark1/20">
						{/* Mobile Navigation Links */}
						{navLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className="
									block px-4 py-3 text-base font-medium text-bodydark2 
									hover:text-meta-5 hover:bg-meta-5/5 rounded-lg 
									transition-all duration-200
									focus:outline-none focus:ring-2 focus:ring-meta-5/20
								"
							>
								{link.label}
							</Link>
						))}

						{/* Mobile Action Buttons */}
						<div className="pt-4 space-y-3 border-t border-bodydark1/20 mt-4">
							<Button
								label="Login"
								onClick={() => setIsMobileMenuOpen(false)}
								className="
									w-full px-4 py-3 text-base font-medium
									text-bodydark2 hover:text-meta-5 
									border border-bodydark1/30 hover:border-meta-5/50
									bg-transparent hover:bg-meta-5/5
									rounded-lg transition-all duration-200
									focus:outline-none focus:ring-2 focus:ring-meta-5/20
								"
							/>
							<Button
								label="Try for free"
								onClick={() => setIsMobileMenuOpen(false)}
								className="
									w-full px-4 py-3 text-base font-medium
									bg-meta-5 hover:bg-meta-5/90 text-white 
									rounded-lg shadow-2 hover:shadow-4
									transition-all duration-200
									focus:outline-none focus:ring-2 focus:ring-meta-5/20
								"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
