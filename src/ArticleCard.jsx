import { Card } from "react-bootstrap";

export default function ArticleCard({article}){
    return (
        <Card style={{width: '36rem'}}>
            <Card.Img variant="top" src={article.article_img_url} />
            <Card.Body>
                <Card.Header>Topic: {article.topic}</Card.Header>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>Author: {article.author}</Card.Text>
                <Card.Text>Created at: {article.created_at}</Card.Text>
                <Card.Text>Votes: {article.votes}</Card.Text>
                <Card.Text>Comments: {article.comment_count}</Card.Text>
            </Card.Body>
        </Card>
    )
}