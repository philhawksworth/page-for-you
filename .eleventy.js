module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/js");
  return  {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    },
    passthroughFileCopy: true
  };

};
