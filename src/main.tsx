import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'
import Users from './components/Users'
import SinglePostPage from './components/SinglePostPage'

const client = new ApolloClient({
  uri: import.meta.env.VITE_graphql_endPoint,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/posts/:id' element={<SinglePostPage />} />
        {/* <Route path='/users' element={<Users />} /> */}
        {/* <Route path='/posts' element={<Posts />} /> */}
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
)
