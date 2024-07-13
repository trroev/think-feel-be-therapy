'use server'

import { getPayloadInstance } from './get-payload-instance'

export const getPage = async ({ slug }: { slug: string }) => {
  const payload = await getPayloadInstance()
  const data = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return data.docs[0]
}
