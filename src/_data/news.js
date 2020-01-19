const axios = require('axios');
const feedRootURL = "https://newsapi.org/v2/top-headlines";

require('dotenv').config()


module.exports = async function() {
  return axios.get( `${feedRootURL}?country=gb&apiKey=${process.env.NEWS_API_KEY}&pageSize=5` )
    .then(function(response){
      return response.data;
    })
    .catch(function(error){
      console.log(error);
    })
}
