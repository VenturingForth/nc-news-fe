import axios from "axios";

function fetchArticles(){
    return axios.get("https://nc-news-6ukh.onrender.com/api/articles")
    .then((response) => {
        return response.data;
    }).then((data)=>{
        return data.articles;
    })
}

function fetchArticleById(articleId){
    return axios.get(`https://nc-news-6ukh.onrender.com/api/articles/${articleId}`)
    .then((response) => {
        console.log(response)
    })
}

export { fetchArticles, fetchArticleById };