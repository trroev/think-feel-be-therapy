import { LINK_FIELDS } from './link'
import { MEDIA_FIELDS } from './media'

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`

export const FOOTER = `
  Footer {
    badgeGroup {
      id
      badge {
        ${MEDIA_FIELDS}
      }
      link ${LINK_FIELDS({ disableAppearance: true })}
    }
    navItems {
      id
      label
      link {
        id
        title
        slug
      }
    }
}
`

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`

export const NAVIGATION = `
  Navigation {
    logo {
      id
      alt
      url
    }
    navItems {
      id
      label
      link {
        id
        title
        slug
      }
    }
  }
`

export const NAVIGATION_QUERY = `
query Navigation {
  ${NAVIGATION}
}
`
