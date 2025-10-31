import Head from 'next/head'
import { config } from '@config/config'

export const HomepageSEO: React.FC = () => {
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': 'https://ashanwithana.com/#website',
                url: 'https://ashanwithana.com/',
                name: 'Ashan Withana - Software Engineer & Backend Developer',
                description: config.seo.description,
                publisher: {
                    '@id': 'https://ashanwithana.com/#person',
                },
                inLanguage: 'en-US',
                potentialAction: [
                    {
                        '@type': 'SearchAction',
                        target: {
                            '@type': 'EntryPoint',
                            urlTemplate: 'https://ashanwithana.com/?s={search_term_string}',
                        },
                        'query-input': 'required name=search_term_string',
                    },
                ],
            },
            {
                '@type': 'Person',
                '@id': 'https://ashanwithana.com/#person',
                name: 'Ashan Withana',
                image: {
                    '@type': 'ImageObject',
                    '@id': 'https://ashanwithana.com/#personlogo',
                    inLanguage: 'en-US',
                    url: 'https://ashanwithana.com/img/ashan-withana-profile.jpg',
                    contentUrl: 'https://ashanwithana.com/img/ashan-withana-profile.jpg',
                    width: 400,
                    height: 400,
                    caption: 'Ashan Withana',
                },
                logo: {
                    '@id': 'https://ashanwithana.com/#personlogo',
                },
                description: config.seo.description,
                sameAs: [
                    config.github,
                    config.linkedin,
                    'https://ashanwithana.com/',
                ],
                url: 'https://ashanwithana.com/',
                jobTitle: 'Software Engineer & Backend Developer',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Freelance',
                },
                knowsAbout: [
                    'Laravel',
                    '.NET Core',
                    'Python',
                    'React',
                    'Angular',
                    'Vue.js',
                    'Node.js',
                    'TypeScript',
                    'API Development',
                    'Database Design',
                    'Cloud Computing',
                    'Software Architecture',
                    'Backend Development',
                    'Full Stack Development',
                ],
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Padukka',
                    addressRegion: 'Western Province',
                    addressCountry: 'LK',
                },
                email: config.email,
                telephone: config.phone,
            },
            {
                '@type': 'WebPage',
                '@id': 'https://ashanwithana.com/#webpage',
                url: 'https://ashanwithana.com/',
                name: config.seo.title,
                isPartOf: {
                    '@id': 'https://ashanwithana.com/#website',
                },
                about: {
                    '@id': 'https://ashanwithana.com/#person',
                },
                description: config.seo.description,
                breadcrumb: {
                    '@id': 'https://ashanwithana.com/#breadcrumb',
                },
                inLanguage: 'en-US',
                potentialAction: [
                    {
                        '@type': 'ReadAction',
                        target: ['https://ashanwithana.com/'],
                    },
                ],
            },
            {
                '@type': 'BreadcrumbList',
                '@id': 'https://ashanwithana.com/#breadcrumb',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://ashanwithana.com/',
                    },
                ],
            },
        ],
    }

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{config.seo.title}</title>
            <meta name="title" content={config.seo.title} />
            <meta name="description" content={config.seo.description} />
            <meta name="keywords" content="Ashan Withana, Software Engineer, Backend Developer, Laravel Developer, .NET Developer, Python Developer, Full Stack Developer, Sri Lanka Developer, Web Developer, API Development, Database Design, React Developer, Angular Developer, Vue.js Developer, Node.js Developer, TypeScript Developer, Cloud Computing, Software Architecture, Mobile App Development, Tech Consultant" />
            <meta name="author" content="Ashan Withana" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
            <meta name="bingbot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
            <link rel="canonical" href={config.seo.canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ashanwithana.com/" />
            <meta property="og:title" content={config.seo.openGraph.title} />
            <meta property="og:description" content={config.seo.openGraph.description} />
            <meta property="og:image" content="https://ashanwithana.com/img/og-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Ashan Withana - Software Engineer & Backend Developer" />
            <meta property="og:site_name" content={config.seo.openGraph.site_name} />
            <meta property="og:locale" content="en_US" />
            <meta property="article:author" content="Ashan Withana" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://ashanwithana.com/" />
            <meta property="twitter:title" content={config.seo.openGraph.title} />
            <meta property="twitter:description" content={config.seo.openGraph.description} />
            <meta property="twitter:image" content="https://ashanwithana.com/img/og-image.png" />
            <meta name="twitter:creator" content="@ashanwithana" />
            <meta name="twitter:site" content="@ashanwithana" />

            {/* Additional Meta Tags */}
            <meta name="application-name" content="Ashan Withana Portfolio" />
            <meta name="apple-mobile-web-app-title" content="Ashan Withana" />
            <meta name="theme-color" content="#6366f1" />
            <meta name="msapplication-TileColor" content="#6366f1" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />

            {/* Geographic Tags */}
            <meta name="geo.region" content="LK-WP" />
            <meta name="geo.placename" content="Padukka, Sri Lanka" />
            <meta name="geo.position" content="6.8283;80.0747" />
            <meta name="ICBM" content="6.8283, 80.0747" />

            {/* Favicon and Icons */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
            <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
            <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6366f1" />

            {/* Additional Resources */}
            <link rel="alternate" type="application/rss+xml" title="Ashan Withana Blog RSS Feed" href="https://ashanwithana.com/rss.xml" />
            <link rel="sitemap" type="application/xml" href="https://ashanwithana.com/sitemap.xml" />

            {/* Performance Optimizations */}
            <meta name="format-detection" content="telephone=no" />
            <meta httpEquiv="x-ua-compatible" content="IE=edge" />
            <meta name="referrer" content="no-referrer-when-downgrade" />

            {/* Preload critical resources */}
            <link
                rel="preload"
                href="/fonts/manrope-variable.woff2"
                as="font"
                type="font/woff2"
                crossOrigin=""
            />

            {/* DNS prefetch for external domains */}
            <link rel="dns-prefetch" href="//github.com" />
            <link rel="dns-prefetch" href="//linkedin.com" />
            <link rel="dns-prefetch" href="//fonts.gstatic.com" />
            <link rel="dns-prefetch" href="//www.google-analytics.com" />

            {/* Preconnect to critical external resources */}
            <link rel="preconnect" href="https://github.com" />
            <link rel="preconnect" href="https://linkedin.com" />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
        </Head>
    )
}