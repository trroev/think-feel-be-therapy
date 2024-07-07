import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function TestPage() {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
  })

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1>Test Page</h1>
        <h4>Media collection:</h4>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      {/* {data.docs.map((doc) => (
        <div key={doc.id} className="flex flex-col gap-4">
          <Image src={doc.url} alt={doc.alt} width={doc.width} height={doc.height} />
          <p>{doc.filename}</p>
        </div>
      ))} */}
    </div>
  )
}
