import { Button, Form } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import UserContext from "./contexts/UserContext";
import { postArticleComment } from "./api/api";

export default function CommentForm({article_id}){
    const { loggedInUser } = useContext(UserContext);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ userComment, setUserComment ] = useState("")

    function handleCommentChange(event){
        setUserComment(event.target.form[0].value);
    }
    
    function handleCommentSubmit(event){
        event.preventDefault();
        event.target.form[0].value = "";
        setIsLoading(true);
        postArticleComment(article_id, loggedInUser.username, userComment).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(()=>{

    },[])

    return (
        <Form>
            <Form.Group className="comment-form" controlId="formComment">
                <Form.Label>Leave a comment on this article, {loggedInUser.username}.</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={handleCommentChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => handleCommentSubmit(event)}>Submit</Button>
        </Form>
    )
}