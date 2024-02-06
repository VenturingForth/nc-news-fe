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

function patchArticleVotes(articleId, inc_votes){
    const request = { inc_votes: inc_votes }
    return axios.patch(`${baseUrl}/articles/${articleId}`, request)
    .then((response) => {
        return response;
    })
}

export { 
    fetchArticles, 
    fetchArticleById, 
    fetchArticleComments, 
    patchArticleVotes 
};