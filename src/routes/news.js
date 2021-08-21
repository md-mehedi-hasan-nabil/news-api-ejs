const express = require('express');
const newRouter = express.Router();
const axios = require('axios');

newRouter.get('/', async (req, res) => {
    try {
        const news = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=01bc97cdc7584974a9dbd97cda1ac85f');
        let newsArray = news.data.articles;
        res.render('news', {
            newsArray
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.data)
        }
        res.render('news', {
            newsArray
        })
        console.log("error "+error)
    }
});

module.exports = newRouter;