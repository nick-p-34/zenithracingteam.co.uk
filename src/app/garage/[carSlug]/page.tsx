const defaultCarSlug = {"name": "#34 2001 Ford Fiesta 1.25i", "slug": "34-ford-fiesta-1-25i-2001"};

export function generateStaticParams() {
    return [{ carSlug: defaultCarSlug.slug }];
}

export default async function CarDetailPage({
                                                   params,
                                               }: {
    params: Promise<{ carSlug: string }>;
}) {
    const { carSlug } = await params;

    return <main>Car Details ({defaultCarSlug.name}) — Coming Soon</main>;
}