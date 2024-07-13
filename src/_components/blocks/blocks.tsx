import { type FC } from 'react'
import { type Page } from '@/payload-types'

import { Accordion } from '../accordion'
import { CTA } from '../call-to-action'
import { Hero } from '../hero'
import { MentayaWidget } from '../mentaya-widget'
import { TextSection } from '../text-section'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockComponents: { [key: string]: FC<any> } = {
  accordionBlock: Accordion,
  ctaBlock: CTA,
  heroBlock: Hero,
  mentayaWidgetBlock: MentayaWidget,
  textSectionBlock: TextSection,
}

interface BlocksProps {
  blocks: Page['content'][0][]
}

const Blocks: FC<BlocksProps> = ({ blocks }) => {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <>
        {blocks.map((block) => {
          const { blockType, id } = block as { blockType: string; id: string }

          if (blockType && blockComponents[blockType]) {
            const Block = blockComponents[blockType]

            if (Block) {
              return <Block key={id} id={id} {...block} />
            }
          }
          return null
        })}
      </>
    )
  }
  return null
}

export { Blocks }
