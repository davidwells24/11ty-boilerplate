
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("blog_post", function(image, description) {
    return `<div class="blog_post">
  <div class="blog_image">${image}</div>
  <div class="description">${description}</div>
</div>`;
  });
};