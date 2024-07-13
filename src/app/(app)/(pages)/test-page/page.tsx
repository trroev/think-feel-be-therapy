import { getPages } from '@/app/actions/get-pages'

export default async function TestPage() {
  const pageData = await getPages()

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1>Test Page</h1>
        <h4>Pages collection:</h4>
        <pre>{JSON.stringify(pageData, null, 2)}</pre>
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
