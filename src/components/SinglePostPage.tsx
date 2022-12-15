import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePostPage = (props: any) => {
  let { id } = useParams()

  return <div> Post Page id : ({id})</div>
}
export default SinglePostPage
