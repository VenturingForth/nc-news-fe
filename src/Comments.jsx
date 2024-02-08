import { useEffect, useState } from "react";
import { fetchArticleComments } from "./api/api";
import CommentCard from "./CommentCard.jsx";
import CommentForm from "./CommentForm.jsx";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";

export default function Comments({article_id}){
    const [ comments, setComments ] = useState([]);
    const [ isLoading, setIsLoading ] = useState([]);
    const [ isError, setIsError ] = useState(false);
    const [ error, setError ] = useState({})

    useEffect(() => {
        fetchArticleComments(article_id).then((data) => {
            setComments(data);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setIsError(true);
            })
        , 
        []})
    ;
    
    if (isLoading) {
        return <Loading content="comments"/>
    }

    if (!isError) {
        return (
            <>
                <h2>Comments {`(${comments.length})`}</h2>
                <CommentForm 
                    article_id={article_id}
                />
                {comments.map((comment)=>{
                    return (
                        <CommentCard 
                            comment={comment} 
                            key={comment.comment_id}
                        />
                    )
                })}
            </>
        )
    }

}