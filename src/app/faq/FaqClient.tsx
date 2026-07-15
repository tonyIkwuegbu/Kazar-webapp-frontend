"use client";

import { useState, useMemo } from "react";
import { FAQ_CATEGORIES } from "@/data/faqData";

function ChevronIcon({ open }: { open: boolean }) {
	return (
		<svg
			className={`h-5 w-5 shrink-0 text-meta-5 transition-transform duration-300 ${
				open ? "rotate-180" : ""
			}`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	);
}

function SearchIcon() {
	return (
		<svg
			className="h-4 w-4 text-bodydark2"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	);
}

export default function FaqClient() {
	const [query, setQuery] = useState("");
	const [openKey, setOpenKey] = useState<string | null>(null);
	const [activeCategory, setActiveCategory] = useState<string>(
		FAQ_CATEGORIES[0].id,
	);

	const filtered = useMemo(() => {
		if (!query.trim()) return FAQ_CATEGORIES;

		const q = query.toLowerCase();
		return FAQ_CATEGORIES.map((cat) => ({
			...cat,
			items: cat.items.filter(
				(item) =>
					item.question.toLowerCase().includes(q) ||
					item.answer.toLowerCase().includes(q),
			),
		})).filter((cat) => cat.items.length > 0);
	}, [query]);

	const isSearching = query.trim().length > 0;

	return (
		<section className="min-h-screen pb-24 pt-28 dark:bg-boxdark md:pt-32">
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8">
				{/* Header */}
				<div className="mx-auto max-w-2xl text-center">
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-meta-5/20 bg-meta-5/5 px-3 py-1.5 dark:border-meta-5/30 dark:bg-meta-5/10">
						<span className="text-xs font-semibold uppercase tracking-widest text-meta-5">
							Help center
						</span>
					</div>
					<h1 className="mb-4 text-3xl font-bold tracking-tight text-graydark dark:text-white md:text-5xl">
						Frequently asked <span className="text-meta-5">questions</span>
					</h1>
					<p className="text-lg text-bodydark2 dark:text-bodydark">
						Everything about escrow, verification, disputes, and how Kazar keeps
						every deal safe.
					</p>
				</div>

				{/* Search */}
				<div className="mx-auto mt-8 max-w-xl">
					<div className="flex items-center gap-3 rounded-2xl border border-bodydark1/40 bg-white px-4 py-3 shadow-2 dark:border-white/10 dark:bg-graydark">
						<SearchIcon />
						<input
							type="text"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Search questions… e.g. BVN, dispute, withdrawal"
							className="w-full bg-transparent text-sm text-graydark placeholder:text-bodydark2 focus:outline-none dark:text-white dark:placeholder:text-bodydark"
						/>
					</div>
				</div>

				<div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
					{/* Category nav — hidden while searching, sticky on desktop */}
					{!isSearching && (
						<nav className="hidden lg:block">
							<div className="sticky top-28 space-y-1">
								{FAQ_CATEGORIES.map((cat) => (
									<button
										key={cat.id}
										onClick={() => {
											setActiveCategory(cat.id);
											document.getElementById(cat.id)?.scrollIntoView({
												behavior: "smooth",
												block: "start",
											});
										}}
										className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
											activeCategory === cat.id
												? "bg-meta-5/10 font-semibold text-meta-5"
												: "text-bodydark2 hover:bg-gray-50 dark:text-bodydark dark:hover:bg-white/5"
										}`}
									>
										<span className="text-base">{cat.icon}</span>
										{cat.title}
									</button>
								))}
							</div>
						</nav>
					)}

					{/* Mobile category pills */}
					{!isSearching && (
						<div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:hidden">
							{FAQ_CATEGORIES.map((cat) => (
								<a
									key={cat.id}
									href={`#${cat.id}`}
									className="flex shrink-0 items-center gap-1.5 rounded-full border border-bodydark1/40 bg-white px-3.5 py-2 text-xs font-medium text-graydark dark:border-white/10 dark:bg-graydark dark:text-white"
								>
									<span>{cat.icon}</span>
									{cat.title}
								</a>
							))}
						</div>
					)}

					{/* Questions */}
					<div className="min-w-0 space-y-10">
						{filtered.length === 0 ? (
							<p className="py-16 text-center text-bodydark2 dark:text-bodydark">
								No questions match &ldquo;{query}&rdquo;. Try a different term
								or{" "}
								<a href="/contact" className="font-medium text-meta-5">
									contact support
								</a>
								.
							</p>
						) : (
							filtered.map((cat) => (
								<div key={cat.id} id={cat.id} className="scroll-mt-28">
									<h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-graydark dark:text-white">
										<span>{cat.icon}</span>
										{cat.title}
									</h2>

									<div className="divide-y divide-bodydark1/30 rounded-2xl border border-bodydark1/30 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-graydark">
										{cat.items.map((item) => {
											const key = `${cat.id}-${item.question}`;
											const open = openKey === key;
											return (
												<div key={key}>
													<button
														onClick={() => setOpenKey(open ? null : key)}
														className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
													>
														<span
															className={`text-sm leading-relaxed md:text-[15px] ${
																open
																	? "font-semibold text-meta-5"
																	: "font-medium text-graydark dark:text-white"
															}`}
														>
															{item.question}
														</span>
														<ChevronIcon open={open} />
													</button>

													<div
														className={`grid transition-all duration-300 ease-in-out ${
															open
																? "grid-rows-[1fr] opacity-100"
																: "grid-rows-[0fr] opacity-0"
														}`}
													>
														<div className="overflow-hidden">
															<p className="px-5 pb-4 text-sm leading-relaxed text-bodydark2 dark:text-bodydark">
																{item.answer}
															</p>
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							))
						)}
					</div>
				</div>

				{/* Contact CTA */}
				<div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-meta-5/20 bg-meta-5/5 p-8 text-center dark:border-meta-5/30 dark:bg-meta-5/10">
					<h3 className="mb-2 text-xl font-bold text-graydark dark:text-white">
						Still have questions?
					</h3>
					<p className="mb-5 text-sm text-bodydark2 dark:text-bodydark">
						Our support team is available Monday–Friday 8am–6pm WAT, Saturday
						9am–2pm WAT.
					</p>

					<a
						href="/contact"
						className="inline-flex items-center gap-2 rounded-xl bg-meta-5 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
					>
						Contact Support
					</a>
				</div>
			</div>
		</section>
	);
}
