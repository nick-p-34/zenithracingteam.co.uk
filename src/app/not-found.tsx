import Link from "next/link";

export default function NotFoundPage() {
	return (
		<main className="landing-bg content-page relative min-h-screen overflow-hidden px-6 py-12 text-[#f1f1f1] md:px-10">
			<div className="pointer-events-none absolute inset-0">
				<div className="purple-glow purple-glow-one" />
				<div className="purple-glow purple-glow-two" />
				<div className="grid-overlay" />
			</div>

			<section className="relative mx-auto flex min-h-[85vh] w-full max-w-6xl flex-col items-center justify-center gap-6">
				<h1 className="headline text-5xl leading-[1.05] font-black uppercase sm:text-6xl md:text-7xl">
					This page does not exist.
					<br />
					<span className="mt-2 block text-[#bf00ff]">404 Error</span>
				</h1>

				<div className="retro-panel interactive-panel no-glint mx-auto flex w-full max-w-2xl flex-col items-center gap-4 p-5 text-center md:p-6">
					<p className="max-w-xl text-base leading-relaxed text-[#dfdfdf] md:text-lg">
						Taken a wrong turn? Let&#39;s get back on track.
					</p>
					<Link href="/" className="social-text-link interactive-panel">
						Return to Home Page
					</Link>
				</div>
			</section>
		</main>
	);
}
