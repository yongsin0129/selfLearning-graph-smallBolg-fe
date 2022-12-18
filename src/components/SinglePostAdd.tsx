import React, { EventHandler, useRef } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate, Link } from 'react-router-dom'
import * as gqlHelper from '../gql'

const link_style = {
  margin: '1rem'
}

const SinglePostAdd = () => {
  let AddPostInput = { title: '', body: '' }
  const navigate = useNavigate()
  const [ADD_POST_Function, { data, loading, error }] = useMutation(
    gqlHelper.ADD_POST,
    {
      // 每次執行 mutation ，都會等待 重新run 指定的 Query
      refetchQueries: [{ query: gqlHelper.GET_All_POSTS }],
      awaitRefetchQueries: true
    }
  )

  if (loading) return <p>Submitting...</p>
  if (error) return <p>`Submission error! {error.message}`</p>
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          ADD_POST_Function({
            variables: {
              input: AddPostInput
            }
          })
            .then(() => navigate('/'))
            .catch(e => {
              console.log(e)
            })
        }}
      >
        <label>Post Title:</label>
        <input
          onChange={e => {
            AddPostInput.title = e.target.value
          }}
        />

        <label>Post Body:</label>
        <input
          onChange={e => {
            AddPostInput.body = e.target.value
          }}
        />

        <button type='submit'>Add Post</button>
        <br />
        <div style={link_style}>
          <Link to='/'>Back</Link>
        </div>
      </form>
    </div>
  )
}

export default SinglePostAdd
