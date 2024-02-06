import { useParams } from 'react-router-dom';
import { fetchArticleById } from './api/api.js';

export default function articlePage(){
    const articleData = () => {
        const { article_id } = useParams();
        console.log(article_id);
    }
    return (
        <h1>Article Page</h1>
    )
}