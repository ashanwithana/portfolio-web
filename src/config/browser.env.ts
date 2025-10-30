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
  NEXT_PUBLIC_POSTHOG_KEY: str({
    input: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    default: 'dev-key',
  }),
})
