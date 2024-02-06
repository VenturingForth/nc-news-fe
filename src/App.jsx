import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import ArticleList from './ArticleList.jsx'
import ArticlePage from './ArticlePage.jsx'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList 
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />} />
        <Route path="/article/:article_id" element={<ArticlePage 
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />} />
      </Routes>
    </>
  )
}

export default App
