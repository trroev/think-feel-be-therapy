import type { CollectionSlug, Payload } from 'payload'

export const revalidate = async (args: {
  collection: CollectionSlug
  slug: string
  payload: Payload
}): Promise<void> => {
  const { collection, slug, payload } = args

  try {
    const data = await payload.find({
      collection: collection,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (data.docs.length > 0) {
      payload.logger.info(`Revalidated page '${slug}' in collection '${collection}'`)
    } else {
      payload.logger.error(
        `Error revalidating page '${slug}' in collection '${collection}': No documents found`
      )
    }
  } catch (err: unknown) {
    payload.logger.error(
      `Error hitting revalidate route for page '${slug}' in collection '${collection}': ${err}`
    )
  }
}
