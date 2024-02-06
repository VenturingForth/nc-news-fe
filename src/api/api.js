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

function postArticleComment(articleId, username, comment){
    console.log(articleId, "<-- article id")
    console.log(comment, "<-- comment")
    console.log(username, "<-- username")
    const request = {
        username: "tickle122",
        body: "I like Dorritos"
    }
    console.log(request, "<-- request object")
    return axios.post(`${baseUrl}/articles/${articleId}/comments`, request)
    .then ((response) => {
        return response;
    })
}

export { 
    fetchArticles, 
    fetchArticleById, 
    fetchArticleComments, 
    patchArticleVotes,
    postArticleComment
};