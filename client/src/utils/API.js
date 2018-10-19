import axios from "axios";
const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";

export default {
    search: function(query) {
        return axios.get(URL + APIKEY + query);
    },
    saveArticle: function(articleObject) {
        return axios.post("./saveArticle", articleObject);
    },
    getSavedArticles: function() {
        return axios.get("./getSavedArticles");
    },
    deletedSavedArticles: function(id) {
        return axios.delete("./deletedSavedArticles", {data: {articleId: id}})
    }
};