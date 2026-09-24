import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Mayen and this is my portfolio. I am a software engineer and I love to build things. I have experience in building web applications, mobile applications, and desktop applications. I am currently learning Next.js and React.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
