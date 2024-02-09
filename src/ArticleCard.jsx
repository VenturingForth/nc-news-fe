import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ArticleCard({article}){
    return (
        <Card className="card-article" >
            <Card.Img variant="top" src={article.article_img_url} />
            <Card.Body>
                <Card.Header>Topic: {article.topic}</Card.Header>
                <Card.Title>
                    <Link to={`/article/${article.article_id}`}>
                        {article.title}
                    </Link>
                </Card.Title>
                <Card.Text>Author: {article.author}</Card.Text>
                <Card.Text>Created at: {article.created_at}</Card.Text>
                <Card.Text>Votes: {article.votes}</Card.Text>
                <Card.Text>Comments: {article.comment_count}</Card.Text>
            </Card.Body>
        </Card>
    )
}