import axios from "axios";

function fetchArticles(){
    return axios.get("https://nc-news-6ukh.onrender.com/api/articles")
    .then((response)=>{
        console.log(response.data, "<-- .then clause")
        return response.data;
    }).then((data)=>{
        return data.articles;
    })
}

export { fetchArticles };