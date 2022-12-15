import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const GET_SinglePost = gql`
  query PostDetail($postId: ID!) {
    post(id: $postId) {
      id
      title
      body
      author {
        name
      }
    }
  }
`

const SinglePostPage = (props: any) => {
  let { id } = useParams()

  const { loading, error, data } = useQuery(GET_SinglePost, {
    variables: { postId: id }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error </p>
  const { post } = data
  const singlePage = (
    <div>
      <h3>title : {post.title}</h3>
      <h6>id : {post.id}</h6>
      <h6>body : {post.body}</h6>
      <h6>author : {post.author.name}</h6>
      <br />
      <Link to="/">Back</Link>
    </div>
  )

  return singlePage
}
export default SinglePostPage
