import { useParams } from 'react-router-dom';
import { fetchArticleById } from './api/api.js';
import { useEffect, useState } from 'react';
import Article from './Article.jsx';

export default function articlePage(){
    const [ article, setArticle ] = useState({});
    const { article_id } = useParams();
    
    useEffect(() => {
        fetchArticleById(article_id).then((data) => {
            setArticle(data);
        })
    }), [];

    return (
        <>
            <Article article={article}/>
        </>
    )
}