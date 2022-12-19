import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
import * as gqlHelper from '../gql'

const button_style = { marginLeft: 'auto' } // 這邊注意 css 是 margin-left: auto ，但 js 不能加 - 所以用大寫

const DeleteButton: React.FC<IProps> = props => {
  const [DELETE_POST_Mutation, mutationRes] = useMutation(
    gqlHelper.DELETE_POST,
    {
      // 每次執行 mutation ，都會等待 重新run 指定的 Query
      refetchQueries: [{ query: gqlHelper.GET_All_POSTS }],
      awaitRefetchQueries: true
    }
  )
  if (mutationRes.loading) return <p style={button_style}>deleting...</p>
  if (mutationRes.error) return <p style={button_style}>{mutationRes.error.message}</p>

  const { singlePost } = props

  return (
    <i
      id={singlePost.id}
      style={button_style}
      className='material-icons'
      onClick={e => {
        e.preventDefault
        DELETE_POST_Mutation({
          variables: {
            postId: singlePost.id
          }
        })
      }}
    >
      delete
    </i>
  )
}

const Posts = () => {
  const { loading, error, data } = useQuery(gqlHelper.GET_All_POSTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error </p>

  const postList = data.posts.map(
    ({ id, title }: { id: string; title: string }) => {
      return (
        <li key={id} id={id} className='collection-item'>
          <Link to={`/posts/${id}`}>{title}</Link>
          <DeleteButton singlePost={{ id, title }} />
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
