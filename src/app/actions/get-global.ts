'use server'

import { type GlobalSlug } from 'payload'

import { getPayloadInstance } from './get-payload-instance'

export const getGlobal = async ({ slug }: { slug: GlobalSlug }) => {
  const payload = await getPayloadInstance()
  const data = await payload.findGlobal({
    slug,
  })

  return data
}
