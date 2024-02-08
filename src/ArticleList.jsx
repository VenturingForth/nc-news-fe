import { useEffect, useState } from "react";
import { fetchArticles } from "./api/api.js"
import ArticleCard from "./ArticleCard.jsx";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";
import { useParams, useSearchParams } from "react-router-dom";

export default function ArticleList(){
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState({})
    const fetchTopic = useParams().topic;
    const [searchParams, setSearchParams] = useSearchParams();
    const sortByQuery = searchParams.get('sort_by');
    const orderQuery = searchParams.get('order');

    const setSortOrder = (direction) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('order', direction);
        setSearchParams(newParams);
    }
    
    useEffect(() => {
        setIsLoading(true);
        fetchArticles(fetchTopic, sortByQuery, orderQuery).then((data) => {
            setArticles(data);
            if(isError){
                setIsError(false);
            }
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setIsError(true);
            setError({
                status: err.response.status,
                msg: err.response.data.msg
            })
        })
    }, [fetchTopic, sortByQuery, orderQuery])
    
    if (isLoading) {
        return (
            <Loading content={"articles"}/>
        )
    }

    if (isError) {
        return (
            <Error error={error} />
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