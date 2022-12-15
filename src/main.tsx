import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'
import Users from './components/Users'
import SinglePostPage from './components/SinglePostPage'
import SinglePostAdd from './components/SinglePostAdd'

const client = new ApolloClient({
  uri: import.meta.env.VITE_graphql_endPoint,
  cache: new InMemoryCache(),
  headers: {
    'foo-token': import.meta.env.VITE_foo_token
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/posts/:id' element={<SinglePostPage />} />
        <Route path='/posts/add' element={<SinglePostAdd />} />
        {/* <Route path='/users' element={<Users />} /> */}
        {/* <Route path='/posts' element={<Posts />} /> */}
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
)

/********************************************************************************
*
使用 localStorage 放 token 的方法，先存起來，要做 signUp的時候再用
localStorage.setItem('foo-token', JSON.stringify('test-value'))
const localStorageValue = JSON.parse(
  localStorage.getItem('foo-token') || JSON.stringify('no foo token')
)
*
*********************************************************************************/