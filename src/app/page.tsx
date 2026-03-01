"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const teaserCards = [
	{
		title: "Watch This Space",
		text: "Our story begins soon. Stay tuned for updates on our team, car, and the season ahead.",
	},
	{
		title: "Site Under Construction",
		text: "We're working hard to build a digital garage, where you can explore all things Zenith Racing.",
	},
	{
		title: "Finding The Car",
		text: "As we aim for the Fiesta Zetec class, we're on the hunt for the perfect car to kick off our racing journey.",
	},
];

const tickerItems = [
	"Zenith Racing Team",
	"Website Coming Soon",
	"Watch This Space",
	"First Season Loading",
	"Stay Tuned",
];

const socialLinks = [
	{
		name: "Instagram",
		href: "https://instagram.com/zenith_racing.team?igsh=MXNbTFnenJ5M2o0",
		iconClass: "fa-brands fa-instagram",
	},
	{
		name: "TikTok",
		href: "https://tiktok.com/@zenith.racing.team",
		iconClass: "fa-brands fa-tiktok",
	},
	{
		name: "Bluesky",
		href: "https://bsky.app/profile/zenith-racing-team.bsky.social",
		iconClass: "fa-brands fa-bluesky",
	},
	{
		name: "Facebook",
		href: "https://www.facebook.com/share/14X8GoarjZg/",
		iconClass: "fa-brands fa-facebook-f",
	},
];

export default function HomePage() {
	useEffect(() => {
		const glintTargets = Array.from(
			document.querySelectorAll<HTMLElement>(
				".interactive-panel:not(.no-glint), .interactive-chip"
			)
		);
		const handlers = new WeakMap<HTMLElement, () => void>();

		const triggerGlint = (element: HTMLElement) => {
			element.classList.remove("is-glinting");
			void element.offsetWidth;
			element.classList.add("is-glinting");
		};

		const clearGlint = (event: Event) => {
			(event.currentTarget as HTMLElement).classList.remove("is-glinting");
		};

		glintTargets.forEach(element => {
			const onEnter = () => triggerGlint(element);
			handlers.set(element, onEnter);

			element.addEventListener("mouseenter", onEnter);
			element.addEventListener("focusin", onEnter);
			element.addEventListener("animationend", clearGlint);
		});

		return () => {
			glintTargets.forEach(element => {
				const onEnter = handlers.get(element);
				if (onEnter) {
					element.removeEventListener("mouseenter", onEnter);
					element.removeEventListener("focusin", onEnter);
				}
				element.removeEventListener("animationend", clearGlint);
				element.classList.remove("is-glinting");
			});
		};
	}, []);

	return (
		<main className="landing-bg relative min-h-screen overflow-hidden px-6 py-12 text-[#f1f1f1] md:px-10">
			<div className="pointer-events-none absolute inset-0">
				<div className="purple-glow purple-glow-one" />
				<div className="purple-glow purple-glow-two" />
				<div className="grid-overlay" />
			</div>

			<motion.section
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9, ease: "easeOut" }}
				className="relative mx-auto flex min-h-[85vh] w-full max-w-6xl flex-col justify-between gap-10"
			>
				<div className="flex flex-wrap items-center justify-between gap-4">
					<header className="retro-panel interactive-panel w-fit px-5 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#dfdfdf]">
						Zenith Racing Team
					</header>

					<nav
						aria-label="Zenith Racing social media"
						className="retro-panel interactive-panel no-glint flex items-center gap-2 rounded-full px-3 py-2"
					>
						{socialLinks.map(link => (
							<a
								key={link.name}
								href={link.href}
								aria-label={link.name}
								className="social-icon-link interactive-panel"
								target="_blank"
							>
								<i aria-hidden="true" className={`${link.iconClass} social-icon`} />
							</a>
						))}
					</nav>
				</div>

				<div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.9fr]">
					<div className="space-y-6">
						<motion.h1
							initial={{ opacity: 0, x: -18 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.7 }}
							className="headline text-5xl leading-[1.05] font-black uppercase sm:text-6xl md:text-7xl"
						>
							New Season, New Team.
							<br />
							<span className="mt-2 block text-[#bf00ff]">Coming Soon.</span>
						</motion.h1>

						<p className="max-w-2xl text-lg leading-relaxed text-[#dfdfdf] md:text-xl">
							We&#39;re thrilled to announce the launch of Zenith Racing, a new
							grassroots racing team aiming for the ICCR. As we prepare for our
							inaugural season, we invite you to join us on this exciting journey.
							Follow our progress as we build our car, develop our team, and take on
							the competition. Stay tuned for updates, and contact us if you want to
							show your support!
						</p>
					</div>

					<aside className="retro-panel interactive-panel no-glint p-5 md:p-6">
						<h2 className="mb-4 text-base font-bold uppercase tracking-[0.2em] text-[#ffffff]">
							Pit Wall Teaser
						</h2>
						<div className="space-y-3">
							{teaserCards.map((card, index) => (
								<motion.article
									key={card.title}
									initial={{ opacity: 0, x: 16 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.25 + index * 0.12, duration: 0.45 }}
									className="inner-card interactive-panel"
								>
									<h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#f1f1f1]">
										{card.title}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-[#c4c4c4]">
										{card.text}
									</p>
								</motion.article>
							))}
						</div>
					</aside>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7, duration: 0.8 }}
					className="retro-panel interactive-panel overflow-hidden ticker-wrap"
				>
					<div className="ticker-track">
						{[0, 1].map(group => (
							<div key={group} className="ticker-group" aria-hidden={group === 1}>
								{tickerItems.map(item => (
									<p key={`${group}-${item}`} className="ticker-text">
										{item}
									</p>
								))}
							</div>
						))}
					</div>
				</motion.div>
			</motion.section>
		</main>
	);
}
