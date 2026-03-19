import { Link, useParams, useSearchParams } from 'react-router';
import { getAllTags, getPublishedPostsByTag, publishedPosts, tagToSlug } from '~/lib/posts';
import { BlogCard } from '~/components/blog/BlogCard';

export default function Blog() {
    const params = useParams();
    const [searchParams] = useSearchParams();
    const routeTag = params.tag ?? '';
    const queryTag = searchParams.get('tag') ?? '';
    const activeTag = routeTag || queryTag;
    const activeTagSlug = activeTag ? tagToSlug(activeTag) : '';

    const tags = getAllTags();
    const filteredPosts = activeTag ? getPublishedPostsByTag(activeTagSlug) : publishedPosts;
    const activeTagLabel = activeTagSlug
        ? tags.find(t => t.slug === activeTagSlug)?.label ?? activeTag
        : '';

    return (
        <main className='mx-auto w-full max-w-3xl px-4 pt-24 pb-16'>
            <h1 className='text-3xl font-serif'>Blog</h1>
            <p className='mt-2 text-sm'>Thoughts, notes, and write-ups.</p>

            {tags.length ? (
                <div className='mt-8 flex flex-wrap items-center gap-2'>
                    <Link
                        to='/blog'
                        className={`rounded-full border px-3 py-1 text-xs ${
                            activeTag
                                ? 'border-border-subtle text-off-white'
                                : 'border-gold text-gold'
                        }`}
                    >
                        All
                    </Link>
                    {tags.map(tag => (
                        <Link
                            key={tag.slug}
                            to={`/blog/tags/${tag.slug}`}
                            className={`rounded-full border px-3 py-1 text-xs ${
                                activeTagSlug === tag.slug
                                    ? 'border-gold text-gold'
                                    : 'border-border-subtle text-off-white hover:border-gold'
                            }`}
                        >
                            {tag.label}
                        </Link>
                    ))}
                </div>
            ) : null}

            {activeTag ? (
                <div className='mt-6 text-sm text-off-white'>
                    Showing tag: <span className='text-gold'>{activeTagLabel}</span>{' '}
                    <Link to='/blog' className='underline'>
                        Clear
                    </Link>
                </div>
            ) : null}

            <ul className='mt-10 space-y-6'>
                {filteredPosts.map(({ slug, meta }) => (
                    <BlogCard key={slug} slug={slug} meta={meta} />
                ))}
            </ul>
        </main>
    );
}
