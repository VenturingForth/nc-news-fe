import { useEffect, useState } from "react";
import { fetchArticleById } from "./api/api";
import Loading from "./Loading";
import VoteButtons from "./VoteButtons";
import Error from "./Error";

export default function Article({article_id}){
    const [ article, setArticle ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);
    const [ error, setError ] = useState({});
    
    useEffect(() => {
        fetchArticleById(article_id).then((data) => {
            setArticle(data);
            if(isError){
                setIsError(false);
            }
            setIsLoading(false);
        }).catch((err)=>{
            setIsLoading(false);
            setIsError(true);
            setError({
                status: err.response.status,
                msg: err.response.data.msg
            })
        })
    },[]);

    if (isLoading){
        return (
            <Loading content="article"/>
        )
    }

    if (isError){
        console.log(error)
        return (
            <Error error={error} />
        )
    }

    return (
        <main>
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
            <p>Created: {article.created_at}</p>
            <VoteButtons article_id={article_id} votes={article.votes}/>
            <p>Topic: {article.topic}</p>
            <img src={article.article_img_url} />
            <p>{article.body}</p>
        </main>
    )
}