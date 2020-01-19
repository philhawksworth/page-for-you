module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/js");

  var env = process.env.ELEVENTY_ENV;
  env = (env=="seed") ? "prod" : env;
  return  {
    dir: {
      input: "src",
      output: "dist",
      data: `_data/${env}`,
    },
    passthroughFileCopy: true
  };

};
