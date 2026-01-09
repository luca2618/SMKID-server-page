import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

const handler = siteMetadata.newsletter
  ? NewsletterAPI({
      // @ts-ignore
      provider: siteMetadata.newsletter.provider,
    })
  : async () =>
      new Response(JSON.stringify({ message: 'Newsletter not configured' }), {
        status: 501,
      })

export { handler as GET, handler as POST }
