import './css/App.css'
import Posts from './components/Posts'
import Users from './components/Users'

function App () {
  return (
    <div className='App'>
      <div>
        <h2>My first Apollo React app 🚀</h2>
      </div>
      <h3>users list</h3>
      <Users />
      <h3>Posts list</h3>
      <Posts />
    </div>
  )
}

export default App
