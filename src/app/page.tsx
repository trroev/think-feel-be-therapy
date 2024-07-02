export default function IndexPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h1>Think.Feel.Be.</h1>
          <h3>Therapy</h3>
        </div>
        <h6>Coming soon...</h6>
      </div>
      <p>
        In the meantime, you can visit my website at{' '}
        <a
          href="https://www.rachaelmathiak.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brandPrimary hover:underline"
        >
          rachaelmathiak.com
        </a>
      </p>
    </section>
  )
}
