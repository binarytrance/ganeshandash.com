import { Link } from 'react-router';
import { Section } from '~/components/Section';
import { posts, type Post } from '~/lib/posts';
import { BlogCard } from '~/components/blog/BlogCard';

const LatestBlogs = () => {
    const latestPosts: Post[] = posts.slice(0, 3);

    return (
        <Section id='blog'>
            <h2 className='font-serif text-2xl sm:text-4xl text-gold letter mb-6 sm:mb-12'>
                <Link to='/blog' className='text-gold'>
                    Latest Blogs
                </Link>
            </h2>

            {latestPosts.length === 0 ? (
                <p className='text-sm'>No posts yet.</p>
            ) : (
                <ul className='space-y-6'>
                    {latestPosts.map(post => (
                        <BlogCard key={post.slug} slug={post.slug} meta={post.meta} />
                    ))}
                </ul>
            )}
        </Section>
    );
};

export default LatestBlogs;
