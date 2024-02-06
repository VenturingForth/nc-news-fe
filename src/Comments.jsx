import { useEffect, useState } from "react";
import { fetchArticleComments } from "./api/api";
import CommentCard from "./CommentCard.jsx";

export default function Comments({article_id}){
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        fetchArticleComments(article_id).then((data) => {
            setComments(data);
        }), []});

    return (
        <>
            <h2>Comments {`(${comments.length})`}</h2>
            {comments.map((comment)=>{
                return (
                    <CommentCard comment={comment} key={comment.comment_id}/>
                )
            })}
        </>
    )
}