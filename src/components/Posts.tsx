import React from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'
import { Link } from 'react-router-dom'

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
          <Link to={`/posts/${id}`}>{title}</Link>
        </li>
      )
    }
  )

  return (
    <div>
      <ul className='collection'>{postList}</ul>
      <Link to='/posts/add' className='btn-floating btn-large red right'>
        <i className='material-icons'>add</i>
      </Link>
    </div>
  )
}

export default Posts
