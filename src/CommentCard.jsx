import { Card, CardHeader } from "react-bootstrap";

export default function CommentsCard({comment}){
    return (
        <Card style={{width: '36rem'}}>
            <Card.Body>
                <Card.Header>{`${comment.author} @ ${comment.created_at}`}</Card.Header>
                <Card.Text>{`${comment.body}`}</Card.Text>
                <Card.Footer>{`Votes: ${comment.votes}`}</Card.Footer>
            </Card.Body>
        </Card>
    )
}