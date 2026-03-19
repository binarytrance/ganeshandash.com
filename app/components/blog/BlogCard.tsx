import { Link } from 'react-router';
import type { PostMeta } from '~/lib/posts';
import { tagToSlug } from '~/lib/posts';

export function BlogCard({ slug, meta }: { slug: string; meta: PostMeta }) {
    const tags = (meta.tags ?? []).filter(tag => tagToSlug(tag) !== 'draft');
    return (
        <li>
            <Link
                to={`/blog/${slug}`}
                className='block rounded-xl border border-border-subtle p-4 transition-colors hover:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'
                aria-label={`Read: ${meta.title}`}
            >
                <h3 className='text-lg underline text-gold'>{meta.title}</h3>
                <div className='mt-1 text-xs text-off-white'>{meta.date}</div>
                {tags.length ? (
                    <div className='mt-3 flex flex-wrap gap-2'>
                        {tags.map(tag => (
                            <span
                                key={tag}
                                className='rounded-full border border-border-subtle px-2 py-0.5 text-xs text-off-white'
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : null}
                {meta.description ? <p className='mt-2 text-sm'>{meta.description}</p> : null}
            </Link>
        </li>
    );
}
