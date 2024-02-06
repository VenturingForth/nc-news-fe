import axios from "axios";

function fetchArticles(){
    return axios.get("https://nc-news-6ukh.onrender.com/api/articles")
    .then((response) => {
        return response.data.articles;
    })
}

function fetchArticleById(articleId){
    return axios.get(`https://nc-news-6ukh.onrender.com/api/articles/${articleId}`)
    .then((response) => {
        return response.data.article;
    })
}

export { fetchArticles, fetchArticleById };