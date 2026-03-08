import { Link } from 'react-router';
import type { PostMeta } from '~/lib/posts';

export function BlogCard({ slug, meta }: { slug: string; meta: PostMeta }) {
    return (
        <li>
            <Link
                to={`/blog/${slug}`}
                className='block rounded-xl border border-border-subtle p-4 transition-colors hover:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'
                aria-label={`Read: ${meta.title}`}
            >
                <h3 className='text-lg underline text-gold'>{meta.title}</h3>
                <div className='mt-1 text-xs text-off-white'>{meta.date}</div>
                {meta.description ? <p className='mt-2 text-sm'>{meta.description}</p> : null}
            </Link>
        </li>
    );
}
