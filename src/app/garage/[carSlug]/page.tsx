const defaultCarSlug = { name: "Sample", slug: "placeholder-car" };

export function generateStaticParams() {
	return [{ carSlug: defaultCarSlug.slug }];
}

export default async function CarDetailPage({ params }: { params: Promise<{ carSlug: string }> }) {
	const { carSlug } = await params;

	return (
		<main className="landing-bg content-page relative min-h-screen overflow-hidden px-6 py-12 text-[#f1f1f1] md:px-10">
			<div className="pointer-events-none absolute inset-0">
				<div className="purple-glow purple-glow-one" />
				<div className="purple-glow purple-glow-two" />
				<div className="grid-overlay" />
			</div>

			<section className="relative mx-auto flex min-h-[85vh] w-full max-w-6xl flex-col items-center justify-center gap-6">
				<h1 className="headline text-5xl leading-[1.05] font-black uppercase sm:text-6xl md:text-7xl">
					Car Details ({defaultCarSlug.name}).
					<br />
					<span className="mt-2 block text-[#bf00ff]">Coming Soon.</span>
				</h1>
				<p className="page-intro">
					Our cars are the heart of our team. The pages in this section will feature
					detailed information, photos and the history of any one of our cars.
				</p>
			</section>
		</main>
	);
}
