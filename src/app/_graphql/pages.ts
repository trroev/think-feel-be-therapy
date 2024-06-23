import {
  ACCORDION_BLOCK,
  ARCHIVE_BLOCK,
  CALL_TO_ACTION,
  CONTENT,
  HERO_BLOCK,
  MEDIA_BLOCK,
  MENTAYA_WIDGET_BLOCK,
  TEXT_SECTION,
} from './blocks'
import { META } from './meta'

export const PAGES = `
  query Pages {
    Pages(limit: 300)  {
      docs {
        slug
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        pageHeader {
          backgroundColor
          heading
          subheading
        }
        layout {
          ${ACCORDION_BLOCK}
          ${ARCHIVE_BLOCK}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${HERO_BLOCK}
          ${MEDIA_BLOCK}
          ${MENTAYA_WIDGET_BLOCK}
          ${TEXT_SECTION}
        }
        ${META}
      }
    }
  }
`
