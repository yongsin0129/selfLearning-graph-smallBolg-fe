import React from 'react'
// Import everything needed to use the `useQuery` hook
import { useQuery } from '@apollo/client'
import * as gqlHelper from '../gql'

const Users = () => {
  const { loading, error, data } = useQuery(gqlHelper.GET_All_USERS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const users = data.users.map(({ id, name }: { id: string; name: string }) => (
    <div key={id} className='collection-item'>
      <h6>id : {id}</h6>
      <p>name : {name}</p>
    </div>
  ))

  return (
    <div>
      <ul className='collection'>{users}</ul>
    </div>
  )
}

export default Users
