import { envsafe, str, url } from 'envsafe'

export const env = envsafe({
  NEXT_PUBLIC_CLOUDFLARE_TOKEN: str({
    input: process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN,
    default: 'dev-token',
  }),
  NEXT_PUBLIC_FORMSPREE_URL: url({
    input: process.env.NEXT_PUBLIC_FORMSPREE_URL,
    default: 'https://formspree.io/dev',
  }),
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: str({
    input: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    default: 'dev-service-id',
  }),
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: str({
    input: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    default: 'dev-template-id',
  }),
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: str({
    input: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    default: 'dev-public-key',
  }),
  NEXT_PUBLIC_POSTHOG_KEY: str({
    input: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    default: 'dev-key',
  }),
})
