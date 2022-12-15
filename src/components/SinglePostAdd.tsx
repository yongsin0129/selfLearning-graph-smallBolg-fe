import React, { EventHandler, useRef } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useNavigate, Link } from 'react-router-dom'

const ADD_POST = gql`
  mutation AddPost($input: AddPostInput!) {
    addPost(input: $input) {
      id
      title
      body
    }
  }
`

const SinglePostAdd = () => {
  let AddPostInput = { title: '', body: '' }
  const navigate = useNavigate()

  const [ADD_POST_Function, { data, loading, error }] = useMutation(ADD_POST)
  if (loading) return <p>Submitting...</p>
  if (error) return <p>`Submission error! {error.message}`</p>

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log(AddPostInput)
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
        <br />
        <br />
        <Link to='/'>Back</Link>
      </form>
    </div>
  )
}

export default SinglePostAdd
