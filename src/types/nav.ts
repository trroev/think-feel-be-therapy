/* eslint-disable @typescript-eslint/no-explicit-any */
import { type BuilderElement, type Input } from '@builder.io/sdk'

export interface NavigationItems {
  data:
    | {
        [key: string]: any
        blocks?: BuilderElement[] | undefined
        inputs?: Input[] | undefined
        state?:
          | {
              [key: string]: any
            }
          | undefined
      }
    | undefined
  id: string | undefined
}
;[]

export interface NavigationData {
  navigationData: NavigationItems[]
}
