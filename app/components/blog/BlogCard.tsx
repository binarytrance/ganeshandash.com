import { Link } from 'react-router';
import type { PostMeta } from '~/lib/posts';
import { BlogTags } from '~/components/blog/BlogTags';

export function BlogCard({ slug, meta }: { slug: string; meta: PostMeta }) {
    return (
        <li>
            <article className='rounded-xl border border-border-subtle p-4 transition-colors hover:border-gold'>
                <h3 className='text-lg'>
                    <Link
                        to={`/blog/${slug}`}
                        className='underline text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'
                        aria-label={`Read: ${meta.title}`}
                    >
                        {meta.title}
                    </Link>
                </h3>
                <div className='mt-1 text-xs text-off-white'>{meta.date}</div>
                <BlogTags tags={meta.tags} className='mt-3 flex flex-wrap gap-2' />
                {meta.description ? <p className='mt-2 text-sm'>{meta.description}</p> : null}
            </article>
        </li>
    );
}
