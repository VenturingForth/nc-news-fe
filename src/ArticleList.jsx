import { useEffect, useState } from "react";
import { fetchArticles } from "./api/api.js"
import ArticleCard from "./ArticleCard.jsx";
import Loading from "./Loading.jsx";

export default function ArticleList(){
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetchArticles().then((data) => {
            setArticles(data);
            setIsLoading(false);
        })
    }, [])
    
    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <ul>
            {articles.map((article)=>{
                return (
                    <ArticleCard 
                        article={article} 
                        key={`${article.title}${article.id}`} 
                    />
                )
            })}
        </ul>
    )
}