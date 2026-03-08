import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router';
import SocialIcons from './SocialIcons';

function Navbar() {
    let location = useLocation();
    let isHome = location.pathname === '/';
    let isBlogRoute = location.pathname === '/blog' || location.pathname.startsWith('/blog/');

    let sectionLinks = useMemo(
        () =>
            [
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'Contact' }
            ] as const,
        []
    );

    let [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    let [isCondensed, setIsCondensed] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (!isHome) return;

        let hashId = decodeURIComponent(location.hash.replace('#', ''));
        if (!hashId) return;
        if (!sectionLinks.some(link => link.id === hashId)) return;

        setActiveSectionId(hashId);
    }, [isHome, location.hash, sectionLinks]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        let rafId = 0;
        let update = () => {
            setIsCondensed(window.scrollY > 24);

            if (!isHome) {
                setActiveSectionId(null);
                return;
            }

            // If we're at the bottom of the page, treat Contact as active.
            let doc = document.documentElement;
            let distanceFromBottom = doc.scrollHeight - (window.scrollY + window.innerHeight);
            if (distanceFromBottom === 0) {
                setActiveSectionId('contact');
                return;
            }

            let sections = sectionLinks
                .map(link => document.getElementById(link.id))
                .filter(Boolean) as HTMLElement[];

            if (sections.length === 0) return;

            let nav = document.querySelector('nav.navbar') as HTMLElement | null;
            let navOffset = (nav?.getBoundingClientRect().height ?? 0) + 16;

            let bestId = sections[0]?.id ?? null;
            let bestTop = Number.NEGATIVE_INFINITY;

            for (let section of sections) {
                let rect = section.getBoundingClientRect();
                if (rect.top <= navOffset && rect.top > bestTop) {
                    bestTop = rect.top;
                    bestId = section.id;
                }
            }

            setActiveSectionId(bestId);
        };

        let onScrollOrResize = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize);
        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
        };
    }, [isHome, sectionLinks]);

    function navLinkClass(isActive: boolean) {
        return [
            'relative inline-block text-off-white',
            isActive
                ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-[30%] after:bg-gold"
                : ''
        ].join(' ');
    }

    return (
        <nav
            className={[
                'navbar sticky top-0 z-50 w-full transition-all duration-200',
                isCondensed
                    ? 'bg-emerald border-b border-border-subtle'
                    : 'bg-transparent border-b border-transparent'
            ].join(' ')}
        >
            <div
                className={[
                    'flex justify-center sm:justify-between items-center mx-[5vw] sm:mx-[10vw] transition-all duration-200',
                    isCondensed ? 'py-4' : 'py-8'
                ].join(' ')}
            >
                <div className='navbar__site-links gap-4 flex items-center'>
                    <Link to='/' className='w-[40px] h-[40px] hidden sm:flex' aria-label='Home'>
                        <img src='/images/logo.png' alt='Logo' />
                    </Link>

                    {sectionLinks.map(link => {
                        let to =
                            link.id === 'blog' ? (isHome ? '/#blog' : '/blog') : `/#${link.id}`;
                        let isActive =
                            link.id === 'blog'
                                ? isBlogRoute || (isHome && activeSectionId === 'blog')
                                : isHome && activeSectionId === link.id;

                        return (
                            <Link key={link.id} to={to} className={navLinkClass(isActive)}>
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
                <SocialIcons className='hidden sm:flex' />
            </div>
        </nav>
    );
}
export default Navbar;
