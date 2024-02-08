import ArticleList from "./ArticleList";
import Topics from "./Topics";
import { useState } from "react";

export default function Home(){
    const [topic, setTopic] = useState("all")

    return(
        <>
        <Topics topic={topic} setTopic={setTopic}/>
        <ArticleList topic={topic}/>
        </>
    )
}