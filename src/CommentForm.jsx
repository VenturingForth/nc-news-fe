import { Button, Form } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import UserContext from "./contexts/UserContext";

export default function CommentForm(){
    const { loggedInUser } = useContext(UserContext);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ userComment, setUserComment ] = useState({})

    function handleCommentChange(event){
        setUserComment({
            username: loggedInUser.username,
            body: event.target.form[0].value
        })
    }
    
    function handleCommentSubmit(event){
        event.preventDefault();
        console.log(userComment)
        event.target.form[0].value = "";
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