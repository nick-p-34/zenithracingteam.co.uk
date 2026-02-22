const defaultBioSlug = {"name": "Nick Parke", "slug": "nick-parke"};

export function generateStaticParams() {
    return [{ bioSlug: defaultBioSlug.slug }];
}

export default async function TeamBioDetailPage({
                                                   params,
                                               }: {
    params: Promise<{ bioSlug: string }>;
}) {
    const { bioSlug } = await params;

    return <main>Team Member Bio ({defaultBioSlug.name}) — Coming Soon</main>;
}