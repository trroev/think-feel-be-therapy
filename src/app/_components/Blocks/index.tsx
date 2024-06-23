import { FC } from 'react'

import { Page } from '../../../payload/payload-types.js'
import { Hero } from '../hero'
import { TextSection } from '../text-section'
import { Accordion } from '../accordion'
import { CTA } from '../call-to-action'
import { MentayaWidget } from '../mentaya-widget'

const blockComponents: { [key: string]: FC<any> } = {
  accordionBlock: Accordion,
  ctaBlock: CTA,
  heroBlock: Hero,
  mentayaWidgetBlock: MentayaWidget,
  textSectionBlock: TextSection,
}

export const Blocks: FC<{
  blocks: Page['layout'][0][]
  disableTopPadding?: boolean
}> = props => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <>
        {blocks.map(block => {
          const { blockType, id } = block as { blockType: string; id: string }

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return <Block id={id} {...block} />
            }
          }
          return null
        })}
      </>
    )
  }

  return null
}
