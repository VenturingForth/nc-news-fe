import { useEffect, useState } from "react";
import { fetchArticles } from "./api/api.js"
import ArticleCard from "./ArticleCard.jsx";

export default function ArticleList(){
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        fetchArticles().then((data)=>{
            setArticles(data);
        }
        )
    }, [])
    console.log(articles, "<-- articles");
    
    return (
        <ul>
            {articles.map((article)=>{
                return (
                    <ArticleCard article={article} />
                )
            })}
        </ul>
    )
}