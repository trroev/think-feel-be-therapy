'use client'

import { GoogleAnalytics } from '@next/third-parties/google'

type GoogleAnalyticsProps = {
  readonly gaId: string
}

export const GoogleAnalyticsComponent = ({ gaId }: GoogleAnalyticsProps) => {
  if (!gaId) {
    return null
  }

  return <GoogleAnalytics gaId={gaId} />
}
