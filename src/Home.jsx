import ArticleList from "./ArticleList";
import Topics from "./Topics";
import SortBar from "./SortBar";
import { useEffect, useState } from "react";

export default function Home({topic, setTopic}){
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("desc");

    useEffect(()=>{
        setSortBy("created_at");
        setOrderBy("desc");
    },[topic])

    return(
        <>
        <Topics topic={topic} setTopic={setTopic}/>
        <SortBar 
            topic={topic} setTopic={setTopic}
            sortBy={sortBy} setSortBy={setSortBy}
            orderBy={orderBy} setOrderBy={setOrderBy}
        />
        <ArticleList 
            topic={topic}
            sortBy={sortBy}
            orderBy={orderBy}
        />
        </>
    )
}