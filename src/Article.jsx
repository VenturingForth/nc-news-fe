export default function Article({article}){
    return (
        <main>
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
            <p>Created: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <p>Topic: {article.topic}</p>
            <img src={article.article_img_url} />
            <p>{article.body}</p>
        </main>
    )
}