import { useEffect, useState } from "react";
import { fetchArticles } from "./api/api.js"
import ArticleCard from "./ArticleCard.jsx";
import Loading from "./Loading.jsx";
import { useParams } from "react-router-dom";

export default function ArticleList({topic}){
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchTopic = useParams().topic;
    
    useEffect(() => {
        setIsLoading(true);
        fetchArticles(fetchTopic).then((data) => {
            setArticles(data);
            setIsLoading(false);
        })
    }, [fetchTopic])
    
    if (isLoading) {
        return (
            <Loading content={"articles"}/>
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