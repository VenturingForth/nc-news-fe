import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import ArticlePage from './ArticlePage.jsx'
import Error from './Error.jsx'
import { Routes, Route } from 'react-router-dom'
import UserContext from './contexts/UserContext.jsx'

function App() {
  const [topic, setTopic] = useState("all");
  const [loggedInUser, setLoggedInUser] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
  })

  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Header setTopic={setTopic}/>
        <Routes>
          <Route path="/" element={<Home topic={topic} setTopic={setTopic}/>} />
          <Route path="/article/:article_id" element={<ArticlePage />} />
          <Route path="/topic/:topic" element={<Home topic={topic} setTopic={setTopic}/>} />
          <Route path="*" element={<Error error={{status: 400, msg: "This resource doesn't exist, go home."}}/>}/>
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
