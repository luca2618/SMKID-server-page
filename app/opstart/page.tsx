import SectionContainer from '@/components/SectionContainer'
import { genPageMetadata } from 'app/seo'
import { Pages, allPages } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'

export const metadata = genPageMetadata({ title: 'Opstart' })

export default function Page() {
  const page = allPages.find((p) => p.slug === 'opstart') as Pages
  const mainContent = coreContent(page)

  return (
    <SectionContainer>
      <article className="prose dark:prose-invert max-w-none py-8">
        <MDXLayoutRenderer code={page.body.code} />
      </article>
    </SectionContainer>
  )
}
