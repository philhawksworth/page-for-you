



const fs          = require("fs");
const axios       = require('axios');
const countries   = require('./countries.json');
const feedRootURL = "https://newsapi.org/v2/top-headlines";

require('dotenv').config()
const API_KEY = process.env.NEWS_API_KEY;


const fetchURL = function(country) {
  return axios.get( `${feedRootURL}?country=${country}&apiKey=${API_KEY}&pageSize=5` );
};
const promiseArray = countries.map(fetchURL);


async function getNews() {
  const articles = await Promise.all(promiseArray)
  .then((response) => {
    var data = [];
    response.forEach(element => {
      let url = new URL(element.config.url);
      let search_params = url.searchParams;
      let country = search_params.get('country');
      data.push({
        "country": country,
        "news": element.data
      })
    });
    return data;
  });
  return articles;
}



module.exports = async function() {
  const news = await getNews();

  if(process.env.ELEVENTY_ENV == 'seed') {
    fs.writeFile(__dirname + '/../dev/news.json', JSON.stringify(news), err => {
      if(err) {
        console.log(err);
      } else {
        console.log("News data primed for dev.");
      }
    });
  }


  return news;
};
