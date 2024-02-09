import { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import UserContext from "./contexts/UserContext";
import { deleteComment } from "./api/api";


export default function CommentsCard({comment}){
    const { loggedInUser } = useContext(UserContext);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    
    function handleDeleteClick(event){
        setIsDeleting(true);
        deleteComment(comment.comment_id)
        .then((data) => {
            setIsDeleting(false);
            if(isError){
                setIsError(false);
            }
        }).catch((err) => {
            setIsError(true);
            setIsDeleting(false);
            console.log(err);
        })
    }

    return (
        <Card variant="comment">
            <Card.Body>
                <Card.Header>{`${comment.author} @ ${comment.created_at}`}</Card.Header>
                <Card.Text>{`${comment.body}`}</Card.Text>
                <Card.Footer>{`Votes: ${comment.votes}`}</Card.Footer>
                {(loggedInUser.username === comment.author) ?
                <Button 
                    variant="danger" 
                    type="button" 
                    disabled={isDeleting}
                    onClick={() => {handleDeleteClick(event)}}>
                        Delete
                    </Button> :
                null}
                <Card.Text>{isError ? "Your comment could not be deleted, please try again" : null}</Card.Text>
            </Card.Body>
        </Card>
    )
}