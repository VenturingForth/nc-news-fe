import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import ArticleList from './ArticleList.jsx'
import ArticlePage from './ArticlePage.jsx'
import { Routes, Route } from 'react-router-dom'
import UserContext from './contexts/UserContext.jsx'

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
  })

  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:article_id" element={<ArticlePage />} />
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
