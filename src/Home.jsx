import ArticleList from "./ArticleList";
import Topics from "./Topics";
import SortBar from "./SortBar";
import { useEffect, useState } from "react";

export default function Home(){
    const [topic, setTopic] = useState("all");
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("desc");



    return(
        <>
        <Topics topic={topic} setTopic={setTopic}/>
        <SortBar 
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