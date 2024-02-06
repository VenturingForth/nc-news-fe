import axios from "axios";

const baseUrl = "https://nc-news-6ukh.onrender.com/api";

function fetchArticles(){
    return axios.get(`${baseUrl}/articles`)
    .then((response) => {
        return response.data.articles;
    })
}

function fetchArticleById(articleId){
    return axios.get(`${baseUrl}/articles/${articleId}`)
    .then((response) => {
        return response.data.article;
    })
}

function fetchArticleComments(articleId){
    return axios.get(`${baseUrl}/articles/${articleId}/comments`)
    .then((response) => {
        return response.data.comments;
    })
}

export { fetchArticles, fetchArticleById, fetchArticleComments };