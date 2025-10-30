// import type { DefaultSeoProps } from 'next-seo'
import { i18n } from '../../next-i18next.config'

export const NAME = 'Ashan Withana'

export const config: Config = {
  isDev: process.env.NODE_ENV === 'development',
  defaultLocale: i18n.defaultLocale,
  revalidateDelay: 30,
  copyright: `© ${new Date().getFullYear()} ${NAME}`,
  seo: {
    title: `${NAME} | Software Engineer & Backend Developer`,
    description:
      'Experienced Software Engineer specializing in Laravel, .NET, and Python. Building scalable backend systems and innovative solutions for modern applications.',
    canonical: 'https://ashanwithana.dev',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://ashanwithana.dev',
      title: `${NAME} | Software Engineer & Backend Developer`,
      description:
        'Experienced Software Engineer specializing in Laravel, .NET, and Python. Building scalable backend systems and innovative solutions for modern applications.',
      site_name: `${NAME} | Software Engineer & Backend Developer`,
      images: [
        {
          url: 'https://ashanwithana.dev/img/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Ashan Withana - Software Engineer & Backend Developer',
        },
      ],
    },
    twitter: {
      cardType: 'summary_large_image',
      site: '@ashanwithana',
    },
    languageAlternates: [{ hrefLang: 'en', href: 'https://ashanwithana.dev' }],
    additionalMetaTags: [
      { httpEquiv: 'x-ua-compatible', content: 'IE=edge; chrome=1' },
      { property: 'msapplication-TileColor', content: '#2D3748' },
      { property: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { property: 'theme-color', content: '#2D3748' },
      { name: 'author', content: 'Ashan Withana' },
      {
        name: 'keywords',
        content:
          'Software Engineer, Backend Developer, Laravel, .NET, Python, API Development, Full Stack Developer, React, Angular, Vue.js, Node.js, TypeScript, Database Design, Cloud Computing, Sri Lanka Developer',
      },
      { name: 'twitter:creator', content: '@ashanwithana' },
      { name: 'twitter:site', content: '@ashanwithana' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
    ],
    additionalLinkTags: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      { rel: 'manifest', href: 'site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#2D3748',
      },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },
    ],
  },
  email: 'ashanwithana4@gmail.com',
  email_link: 'mailto:ashanwithana4@gmail.com',
  phone: '+94 71 1722 653',
  github: 'https://github.com/ashanwithana',
  linkedin: 'https://www.linkedin.com/in/ashanwithana',
  location: 'Padukka, Sri Lanka',
  tagline: 'Crafting robust backend solutions with precision and innovation',
}

interface Config {
  isDev: boolean
  defaultLocale: string
  revalidateDelay: number
  copyright: string
  seo: {
    title: string
    description: string
    canonical: string
    openGraph: {
      type: string
      locale: string
      url: string
      title: string
      description: string
      site_name: string
      images: Array<{
        url: string
        width: number
        height: number
        alt: string
      }>
    }
    twitter: {
      cardType: string
      site: string
    }
    languageAlternates: Array<{
      hrefLang: string
      href: string
    }>
    additionalMetaTags: Array<{
      httpEquiv?: string
      property?: string
      name?: string
      content: string
    }>
    additionalLinkTags: Array<{
      rel: string
      sizes?: string
      href: string
      type?: string
      color?: string
    }>
  }
  email: string
  email_link: string
  phone: string
  github: string
  linkedin: string
  location: string
  tagline: string
}
