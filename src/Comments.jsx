import { useEffect, useState } from "react";
import { fetchArticleComments } from "./api/api";
import { Card } from "react-bootstrap";

export default function Comments({article_id}){
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        fetchArticleComments(article_id).then((data) => {
            setComments(data);
        }), []});

    return (
        <>
            {comments.map((comment)=>{
                return (
                    <CommentCard comment={comment} />
                )
            })}
        </>
    )
}