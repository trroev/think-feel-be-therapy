import { CATEGORIES } from './categories'
import { IMAGE } from './image'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const CALL_TO_ACTION = `
...on CallToActionBlockType {
  id
  blockType
  ctaBackgroundColor: backgroundColor
  ${IMAGE}
  heading
  subheading
  body
  links {
    id
    link ${LINK_FIELDS({ disableAppearance: true })}
  }
}
`

export const CONTENT = `
...on Content {
  id
  blockType
  invertBackground
  columns {
    size
    richText
    enableLink
    link ${LINK_FIELDS()}
  }
}
`

export const TAGLINE_BLOCK = `
  ...on TaglineBlockType {
    id
    blockType
    staticHeading
    words {
      word
    }
  }
`

export const HERO_BLOCK = `
  ...on HeroBlockType {
    id
    blockType
    heroBackgroundColor: backgroundColor
    heading
    ${IMAGE}
    subheading
    heroTagline {
      ${TAGLINE_BLOCK}
    }
  }
`

export const TEXT_SECTION = `
  ...on TextSectionBlockType {
    id
    blockType
    textSectionBackgroundColor: backgroundColor
    heading
    headingAlignment
    ${IMAGE}
    imageFirst
    richText
    subheading
  }
`

export const ACCORDION_BLOCK = `
  ...on AccordionBlockType {
    id
    blockType
    type
    items {
      id
      heading
      content
    }
  }
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  id
  blockType
  invertBackground
  position
  ${MEDIA}
}
`

export const MENTAYA_WIDGET_BLOCK = `
...on MentayaWidgetBlockType {
  id
  blockType
  fullWidth
}
`

export const ARCHIVE_BLOCK = `
...on Archive {
  id
  blockType
  introContent
  populateBy
  relationTo
  ${CATEGORIES}
  limit
  selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${META}
      }
      ...on Project {
        id
        slug
        title
        ${META}
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${CATEGORIES}
        ${META}
      }
      ...on Project {
        id
        slug
        title
        ${CATEGORIES}
        ${META}
      }
    }
  }
  populatedDocsTotal
}
`
