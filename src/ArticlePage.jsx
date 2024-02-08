import { useParams } from 'react-router-dom';
import Article from './Article.jsx';
import Comments from './Comments.jsx';

export default function articlePage(){
    const { article_id } = useParams();

    return (
        <>
            <Article 
                article_id={article_id}
            />
            <Comments 
                article_id={article_id}
            />
        </>
    )
}