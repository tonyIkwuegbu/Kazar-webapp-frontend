"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { testimonials } from "@/data/TestimonialsData";

interface TrustedCommunityProps {
	className?: string;
}

const TrustedCommunity: React.FC<TrustedCommunityProps> = ({
	className = "",
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const sectionRef = useRef<HTMLElement>(null);

	// Animated counter hook
	const useCounter = (
		end: number,
		duration: number = 2000,
		shouldStart: boolean = false,
	) => {
		const [count, setCount] = useState(0);

		useEffect(() => {
			if (!shouldStart) return;

			let startTime: number;
			const animate = (currentTime: number) => {
				if (!startTime) startTime = currentTime;
				const progress = Math.min((currentTime - startTime) / duration, 1);
				setCount(Math.floor(progress * end));

				if (progress < 1) {
					requestAnimationFrame(animate);
				}
			};

			requestAnimationFrame(animate);
		}, [end, duration, shouldStart]);

		return count;
	};

	// Intersection observer for triggering animations
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.3 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	// Auto-rotate testimonials
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const stats = [
		{
			icon: "👥",
			value: useCounter(10000, 2000, isVisible),
			suffix: "+",
			label: "Protected Users",
			color: "text-meta-5",
		},
		{
			icon: "₦",
			value: useCounter(2.5, 2000, isVisible),
			suffix: "B+",
			label: "Secured transactions",
			color: "text-meta-5",
		},
		{
			icon: "📈",
			value: useCounter(99.8, 2000, isVisible),
			suffix: "%",
			label: "Success Rate",
			color: "text-meta-5",
		},
		{
			icon: "⭐",
			value: useCounter(4.9, 2000, isVisible),
			suffix: "/5",
			label: "User Ratings",
			color: "text-meta-5",
		},
	];

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, index) => (
			<span
				key={index}
				className={`text-lg ${
					index < rating ? "text-warning" : "text-bodydark1"
				}`}
			>
				★
			</span>
		));
	};

	return (
		<section
			ref={sectionRef}
			className={`py-16 md:py-20 lg:py-24 ${className}`}
		>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-graydark mb-4">
						Join Nigeria&apos;s <span className="text-meta-5">Most</span>
						<br />
						<span className="text-meta-5">Trusted</span> Trading Community
					</h2>
					<p className="text-lg md:text-xl text-bodydark2 max-w-3xl mx-auto">
						Thousands of Nigerian entrepreneurs trust KAZAR to protect their
						transactions and grow their businesses safely.
					</p>
				</div>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="
    text-center p-6 bg-white rounded-2xl
    shadow-2 hover:shadow-4
    transition-all duration-300 transform hover:scale-105
    animate-bounce-soft
    dark:bg-primary/10 dark:text-bodydark1
  "
							style={{ animationDelay: `${index * 200}ms` }}
						>
							<div className="text-3xl mb-3">{stat.icon}</div>
							<div
								className={`text-2xl lg:text-3xl font-bold ${stat.color} mb-2`}
							>
								{stat.value.toLocaleString()}
								{stat.suffix}
							</div>
							<div className="text-bodydark2 text-sm lg:text-base font-medium">
								{stat.label}
							</div>
						</div>
					))}
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="relative bg-white dark:bg-primary/10 rounded-2xl p-8 md:p-12 shadow-4 overflow-hidden">
						<div className="absolute top-0 right-0 w-32 h-32 bg-meta-5/5 rounded-full -translate-y-16 translate-x-16"></div>
						<div className="absolute bottom-0 left-0 w-24 h-24 bg-meta-5/5 rounded-full translate-y-12 -translate-x-12"></div>

						{/* Testimonial Content */}
						<div className="relative z-10">
							<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
								<div className="flex-shrink-0">
									<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-meta-5">
										<Image
											src={testimonials[currentTestimonial].avatar}
											alt={testimonials[currentTestimonial].name}
											width={64}
											height={64}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>

								<div className="flex-1 text-center md:text-left">
									<div className="flex justify-center md:justify-start mb-4">
										{renderStars(testimonials[currentTestimonial].rating)}
									</div>

									<h4 className="text-xl font-bold text-graydark dark:text-bodydark1 mb-4">
										{testimonials[currentTestimonial].name}
									</h4>

									<p className="text-bodydark2 leading-relaxed mb-6">
										{testimonials[currentTestimonial].text}
									</p>
								</div>
							</div>

							<div className="flex justify-center space-x-2 mt-8">
								{testimonials.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentTestimonial(index)}
										className={`
											w-3 h-3 rounded-full transition-all duration-300
											${
												currentTestimonial === index
													? "bg-meta-5 w-8"
													: "bg-bodydark1 hover:bg-meta-5/50"
											}
										`}
										aria-label={`View testimonial ${index + 1}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrustedCommunity;
