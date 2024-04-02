if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  throw new Error(
    'Missing environment variable NEXT_PUBLIC_BUILDER_API_KEY. Did you forget to set it in your .env file?'
  )
}

export const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!
