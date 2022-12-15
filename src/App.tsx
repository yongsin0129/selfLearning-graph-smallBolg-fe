import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client'
import Posts from './components/Posts'

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
  console.log('DisplayAllUsers ~ data', data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const users =  data.users.map(({ id, name }: { id: string; name: string }) => (
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

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <h3>users list</h3>
      <DisplayAllUsers />
      <h3>Posts list</h3>
      <Posts />
    </div>
  )
}

export default App
