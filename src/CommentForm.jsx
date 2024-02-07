import { Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import UserContext from "./contexts/UserContext";
import { postArticleComment } from "./api/api";

export default function CommentForm({article_id}){
    const { loggedInUser } = useContext(UserContext);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    const [ userComment, setUserComment ] = useState("")

    function handleCommentChange(event){
        setUserComment(event.target.form[0].value);
    }
    
    function handleCommentSubmit(event){
        event.preventDefault();
        setIsLoading(true);
        postArticleComment(article_id, loggedInUser.username, userComment).then((data) => {
            event.target.form[0].value = "";
            setIsLoading(false);
            setUserComment("");
            if(isError){
                setIsError(false);
            }
            return data;
        }).catch((err) => {
            setIsError(true);
            setIsLoading(false);
            console.log(err);
        })
    }

    return (
        <Form>
            <Form.Group className="comment-form" controlId="formComment">
                <Form.Label>Leave a comment on this article, {loggedInUser.username}.</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={handleCommentChange}/>
            </Form.Group>
            <Form.Text>{isError ? "Your comment could not be posted, please try again. \n" : null}</Form.Text>
            <Button 
                variant="primary" 
                type="submit" 
                disabled={isLoading || !userComment.length}
                onClick={() => handleCommentSubmit(event)}>
                    {isLoading ? 'Posting...' : 'Submit'}
                </Button>
        </Form>
    )
}