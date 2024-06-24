import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types.js'
import { ArchiveBlock } from '../../_blocks/ArchiveBlock'
import { ContentBlock } from '../../_blocks/Content'
import { MediaBlock } from '../../_blocks/MediaBlock'
import { VerticalPadding, VerticalPaddingOptions } from '../VerticalPadding'
import { Hero } from '../hero'
import { TextSection } from '../text-section'
import { Accordion } from '../accordion'
import { CTA } from '../call-to-action'
import { MentayaWidget } from '../mentaya-widget'

const blockComponents: { [key: string]: React.FC<any> } = {
  accordionBlock: Accordion,
  archive: ArchiveBlock,
  content: ContentBlock,
  ctaBlock: CTA,
  heroBlock: Hero,
  mediaBlock: MediaBlock,
  mentayaWidgetBlock: MentayaWidget,
  textSectionBlock: TextSection,
}

export const Blocks: React.FC<{
  blocks: Page['layout'][0][]
  disableTopPadding?: boolean
}> = props => {
  const { disableTopPadding, blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType, id } = block as { blockType: string; id: string }

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            const prevBlock = blocks[index - 1]

            const prevBlockInverted =
              prevBlock && 'invertBackground' in prevBlock && prevBlock?.invertBackground

            let paddingTop: VerticalPaddingOptions = 'large'
            let paddingBottom: VerticalPaddingOptions = 'large'

            if (prevBlock) {
              paddingTop = 'none'
            }

            if (index === blocks.length - 1) {
              paddingBottom = 'large'
            }

            if (disableTopPadding && index === 0) {
              paddingTop = 'none'
            }

            if (Block) {
              return (
                <VerticalPadding top={paddingTop} bottom={paddingBottom}>
                  <Block id={id} {...block} />
                </VerticalPadding>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
