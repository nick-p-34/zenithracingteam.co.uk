const defaultArticleSlug = {"name": "Team Launch", "slug": "team-launch"};

export function generateStaticParams() {
    return [{ articleSlug: defaultArticleSlug.slug }];
}

export default async function ArticleDetailPage({
                                                   params,
                                               }: {
    params: Promise<{ articleSlug: string }>;
}) {
    const { articleSlug } = await params;

    return <main>Article ({defaultArticleSlug.name}) — Coming Soon</main>;
}