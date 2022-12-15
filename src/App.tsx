import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client'

const GET_AllUsers = gql`
  query GetAllUsers {
    users {
      id
      name
    }
  }
`

function DisplayAllUsers () {
  const { loading, error, data } = useQuery(GET_AllUsers)
  console.log("DisplayAllUsers ~ data", data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return data.users.map(({ id, name }: { id: string; name: string }) => (
    <div key={id}>
      <h3>id : {id}</h3>
      <h3>name : {name}</h3>
      <br />
    </div>
  ))
}

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <h1>user list</h1>
      <DisplayAllUsers />
    </div>
  )
}

export default App
