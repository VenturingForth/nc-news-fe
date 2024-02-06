import { useEffect, useState } from "react";
import { fetchArticleById } from "./api/api";
import Loading from "./Loading";
import VoteButtons from "./VoteButtons";

export default function Article({article_id}){
    const [ article, setArticle ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true)
    
    useEffect(() => {
        fetchArticleById(article_id).then((data) => {
            setArticle(data);
            setIsLoading(false);
        })
    },[]);

    if (isLoading){
        return (
            <Loading content="article"/>
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