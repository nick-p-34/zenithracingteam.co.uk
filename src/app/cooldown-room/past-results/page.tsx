export default function PastResultsPage() {
	return (
		<main className="landing-bg content-page relative min-h-screen overflow-hidden px-6 py-12 text-[#f1f1f1] md:px-10">
			<div className="pointer-events-none absolute inset-0">
				<div className="purple-glow purple-glow-one" />
				<div className="purple-glow purple-glow-two" />
				<div className="grid-overlay" />
			</div>

			<section className="relative mx-auto flex min-h-[85vh] w-full max-w-6xl flex-col items-center justify-center gap-6">
				<h1 className="headline text-5xl leading-[1.05] font-black uppercase sm:text-6xl md:text-7xl">
					Past Results.
					<br />
					<span className="mt-2 block text-[#bf00ff]">Coming Soon.</span>
				</h1>
				<p className="page-intro">
					Review and relive all of Zenith Racing&#39;s past results. This page will
					feature a comprehensive list of our previous race results and debriefs.
				</p>
			</section>
		</main>
	);
}
