import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import ArticleList from './ArticleList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ArticleList />
    </>
  )
}

export default App
