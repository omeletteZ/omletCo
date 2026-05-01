import { cache } from 'react'
import type { Metadata } from 'next'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

type Props = {
  params: Promise<{ id: string }>
}

const getPost = cache(async (id: string): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) 
  return res.json()
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = await getPost(id)

  return {
    title: post.title,
    description: post.body,
  }
}

export default async function PostPage({ params }: Props) {
  const { id } = await params
  const post = await getPost(id)

  return (
    <main style={{  }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  )
}