"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogoImage } from "@/assets";
import DarkModeButton from "../elements/DarkModeButton";

const NAV_LINKS = [
	{ href: "#how-it-works", label: "How It Works" },
	{ href: "#why-choose-us", label: "Why Choose Us" },
	{ href: "#waitlist", label: "Join Waitlist" },
];

const Header: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();
	const router = useRouter();
	const isHome = pathname === "/";

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth >= 768) setMobileOpen(false);
		};
		const onClickOutside = (e: MouseEvent) => {
			if (mobileOpen && !menuRef.current?.contains(e.target as Node)) {
				setMobileOpen(false);
			}
		};
		window.addEventListener("resize", onResize);
		document.addEventListener("mousedown", onClickOutside);
		return () => {
			window.removeEventListener("resize", onResize);
			document.removeEventListener("mousedown", onClickOutside);
		};
	}, [mobileOpen]);

	const handleNavClick = (e: React.MouseEvent, anchor: string) => {
		e.preventDefault();
		setMobileOpen(false);
		const id = anchor.replace("#", "");
		if (isHome) {
			document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		} else {
			router.push(`/${anchor}`);
		}
	};

	return (
		<header
			className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/90 dark:bg-graydark/85 backdrop-blur-md border-b border-bodydark1/30 dark:border-white/10 shadow-1 dark:shadow-none"
					: "bg-white dark:bg-graydark border-b border-transparent"
			}`}
		>
			<div ref={menuRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Main row */}
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<Link
						href="/"
						className="shrink-0 transition-opacity hover:opacity-80"
					>
						<Image
							src={LogoImage}
							alt="Kazar"
							width={120}
							height={36}
							className="h-8 w-auto object-contain dark:brightness-0 dark:invert"
							priority
						/>
					</Link>

					{/* Desktop nav */}
					<nav className="hidden md:flex items-center gap-1">
						{NAV_LINKS.map(({ href, label }) => (
							<a
								key={href}
								href={isHome ? href : `/${href}`}
								onClick={(e) => handleNavClick(e, href)}
								className="px-4 py-2 rounded-lg text-sm font-medium text-bodydark2 dark:text-bodydark hover:text-meta-5 dark:hover:text-meta-5 hover:bg-meta-5/5 dark:hover:bg-meta-5/10 transition-colors duration-200 cursor-pointer"
							>
								{label}
							</a>
						))}
					</nav>

					{/* Desktop actions */}
					<div className="hidden md:flex items-center gap-3">
						<DarkModeButton />
						<span
							aria-disabled="true"
							title="Coming soon"
							className="px-4 py-2 rounded-lg text-sm font-medium text-bodydark2/50 dark:text-bodydark/40 border border-bodydark1/20 dark:border-white/10 cursor-not-allowed select-none"
						>
							Login
						</span>
						{/* <a
							href={isHome ? "#waitlist" : "/#waitlist"}
							onClick={(e) => handleNavClick(e, "#waitlist")}
							className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-meta-5 hover:bg-meta-5/90 transition-all duration-200 hover:-translate-y-px active:translate-y-0"
						>
							Join waitlist
						</a> */}
					</div>

					{/* Mobile */}
					<div className="flex md:hidden items-center gap-2">
						<DarkModeButton />
						<button
							onClick={() => setMobileOpen((o) => !o)}
							aria-label="Toggle menu"
							aria-expanded={mobileOpen}
							className="p-2 rounded-lg text-bodydark2 dark:text-bodydark hover:text-meta-5 hover:bg-meta-5/5 dark:hover:bg-meta-5/10 transition-colors duration-200"
						>
							<div className="w-5 h-4 flex flex-col justify-between">
								<span
									className={`block h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
								/>
								<span
									className={`block h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
								/>
								<span
									className={`block h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
								/>
							</div>
						</button>
					</div>
				</div>

				{/* Mobile drawer */}
				<div
					className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
						mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="border-t border-bodydark1/20 dark:border-white/10 py-4 space-y-1">
						{NAV_LINKS.map(({ href, label }) => (
							<a
								key={href}
								href={isHome ? href : `/${href}`}
								onClick={(e) => handleNavClick(e, href)}
								className="block px-4 py-3 rounded-lg text-sm font-medium text-bodydark2 dark:text-bodydark hover:text-meta-5 hover:bg-meta-5/5 dark:hover:bg-meta-5/10 transition-colors duration-200 cursor-pointer"
							>
								{label}
							</a>
						))}
						<div className="pt-3 mt-2 border-t border-bodydark1/20 dark:border-white/10 space-y-2">
							<span
								aria-disabled="true"
								title="Coming soon"
								className="flex w-full items-center justify-center px-4 py-3 rounded-lg text-sm font-medium text-bodydark2/50 dark:text-bodydark/40 border border-bodydark1/20 dark:border-white/10 cursor-not-allowed select-none"
							>
								Login
							</span>
							{/* <a
								href={isHome ? "#waitlist" : "/#waitlist"}
								onClick={(e) => handleNavClick(e, "#waitlist")}
								className="flex w-full items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-meta-5 hover:bg-meta-5/90 transition-colors duration-200"
							>
								Join waitlist
							</a> */}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
