'use server'

import { getPayloadInstance } from './get-payload-instance'

export const getPages = async () => {
  const payload = await getPayloadInstance()
  const data = await payload.find({
    collection: 'pages',
  })

  return data
}
