export const IMAGE_FIELDS = `
  id
  alt
  caption
  updatedAt
  createdAt
  url
  filename
  mimeType
  width
  height
  focalX
  focalY
`

export const IMAGE = `image {
  ${IMAGE_FIELDS}
}`
