export interface NavigationItems {
  data: {
    logo: string
    links: {
      link: string
      title: string
    }[]
  }
  id: string
}

export interface NavigationData {
  navigationData: NavigationItems
}
