module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/js");
  return  {
    dir: {
      input: "src",
      output: "dist"
    },
    passthroughFileCopy: true
  };

};
