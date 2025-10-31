import Head from 'next/head'
import { BlogPost } from '@data/blog'
import { config, NAME } from '@config/config'

interface BlogPostSEOProps {
    post: BlogPost
}

export const BlogPostSEO: React.FC<BlogPostSEOProps> = ({ post }) => {
    const {
        title,
        excerpt,
        coverImage,
        publishedAt,
        tags,
        slug,
        readingTime,
        seo,
    } = post

    // SEO optimized values
    const pageTitle = `${title} | ${NAME}`
    const metaDescription = seo?.metaDescription || excerpt
    const canonicalUrl = seo?.canonicalUrl || `https://ashanwithana.com/blog/${slug}/`
    const ogImage = seo?.ogImage || coverImage || 'https://ashanwithana.com/img/og-image.png'
    const keywords = seo?.keywords?.join(', ') || tags.join(', ')
    const publishDate = new Date(publishedAt).toISOString()
    const wordCount = seo?.schema?.wordCount || Math.ceil(readingTime * 250) // Estimate based on reading time

    // Structured Data for Blog Post
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': seo?.schema?.articleType || 'BlogPosting',
                '@id': `${canonicalUrl}#article`,
                headline: title,
                description: metaDescription,
                image: {
                    '@type': 'ImageObject',
                    url: ogImage,
                    width: 1200,
                    height: 630,
                },
                datePublished: publishDate,
                dateModified: publishDate,
                author: {
                    '@type': 'Person',
                    '@id': 'https://ashanwithana.com/#person',
                    name: NAME,
                    url: 'https://ashanwithana.com/',
                },
                publisher: {
                    '@type': 'Person',
                    '@id': 'https://ashanwithana.com/#person',
                    name: NAME,
                    logo: {
                        '@type': 'ImageObject',
                        url: 'https://ashanwithana.com/img/ashan-withana-profile.jpg',
                        width: 400,
                        height: 400,
                    },
                },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': canonicalUrl,
                },
                articleSection: seo?.schema?.category || tags[0] || 'Technology',
                keywords: tags,
                wordCount: wordCount,
                timeRequired: `PT${readingTime}M`,
                inLanguage: 'en-US',
                url: canonicalUrl,
                isPartOf: {
                    '@type': 'Blog',
                    '@id': 'https://ashanwithana.com/blog/#blog',
                    name: `${NAME} Blog`,
                    url: 'https://ashanwithana.com/blog/',
                },
            },
            {
                '@type': 'WebPage',
                '@id': `${canonicalUrl}#webpage`,
                url: canonicalUrl,
                name: pageTitle,
                description: metaDescription,
                isPartOf: {
                    '@type': 'WebSite',
                    '@id': 'https://ashanwithana.com/#website',
                },
                about: {
                    '@type': 'Thing',
                    name: title,
                },
                primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: ogImage,
                },
                datePublished: publishDate,
                dateModified: publishDate,
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        {
                            '@type': 'ListItem',
                            position: 1,
                            name: 'Home',
                            item: 'https://ashanwithana.com/',
                        },
                        {
                            '@type': 'ListItem',
                            position: 2,
                            name: 'Blog',
                            item: 'https://ashanwithana.com/blog/',
                        },
                        {
                            '@type': 'ListItem',
                            position: 3,
                            name: title,
                            item: canonicalUrl,
                        },
                    ],
                },
            },
        ],
    }

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="title" content={pageTitle} />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={NAME} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="article" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title} />
            <meta property="og:site_name" content={`${NAME} Blog`} />
            <meta property="og:locale" content="en_US" />
            <meta property="article:author" content={NAME} />
            <meta property="article:published_time" content={publishDate} />
            <meta property="article:modified_time" content={publishDate} />
            <meta property="article:section" content={seo?.schema?.category || tags[0] || 'Technology'} />
            {tags.map((tag) => (
                <meta key={tag} property="article:tag" content={tag} />
            ))}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:creator" content="@ashanwithana" />
            <meta name="twitter:site" content="@ashanwithana" />

            {/* Additional SEO Meta Tags */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
            <meta name="bingbot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

            {/* Reading Time and Word Count */}
            <meta name="reading-time" content={`${readingTime} minutes`} />
            <meta name="word-count" content={wordCount.toString()} />

            {/* Content Classification */}
            <meta name="content-type" content="blog-post" />
            <meta name="content-category" content={seo?.schema?.category || tags[0] || 'Technology'} />

            {/* Mobile and App Tags */}
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />

            {/* Performance and Technical */}
            <meta httpEquiv="x-ua-compatible" content="IE=edge" />
            <meta name="referrer" content="no-referrer-when-downgrade" />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="dns-prefetch" href="//github.com" />
            <link rel="dns-prefetch" href="//linkedin.com" />
        </Head>
    )
}