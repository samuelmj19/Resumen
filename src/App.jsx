import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Layout from './layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout/>
    </div>
  )
}

export default App
