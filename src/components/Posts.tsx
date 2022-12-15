import React from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'

const GET_POSTS_FOR_AUTHOR = gql`
  query PostsForAuthor {
    posts {
      id
      title
      body
    }
  }
`
const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS_FOR_AUTHOR)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error </p>

  const postList = data.posts.map(
    ({ id, title }: { id: string; title: string }) => {
      return (
        <li key={id} className='collection-item'>
          {title}
        </li>
      )
    }
  )

  return (
    <div>
      <ul className='collection'>{postList}</ul>
    </div>
  )
}

export default Posts
