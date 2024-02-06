import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import ArticleList from './ArticleList.jsx'
import ArticlePage from './ArticlePage.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
      </Routes>
      <ArticleList />
    </>
  )
}

export default App
