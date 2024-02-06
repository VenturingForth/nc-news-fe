import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import ArticleList from './ArticleList.jsx'
import ArticlePage from './ArticlePage.jsx'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
      </Routes>
    </>
  )
}

export default App
