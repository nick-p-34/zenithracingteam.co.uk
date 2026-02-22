const defaultResultSlug = {"name": "Fiesta Zetec Championship - ICCR Round 1 - Mondello Park", "slug": "iccr-zetec-r1-mondello-2026-02-22"};

export function generateStaticParams() {
    return [{ resultSlug: defaultResultSlug.slug }];
}

export default async function ResultDetailPage({
                                                    params,
                                                }: {
    params: Promise<{ resultSlug: string }>;
}) {
    const { resultSlug } = await params;

    return <main>Race Results ({defaultResultSlug.name}) — Coming Soon</main>;
}