const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('filterTagList', tags => {
        const toBeFiltered = ['post'];

        return tags.filter(t => !toBeFiltered.includes(t));
    })

    eleventyConfig.addShortcode('tooltip-a', (href, text) => {
        return `<a href="${href}" data-tippy-content="${href}">${text}</a>`
    })

    eleventyConfig.addPassthroughCopy({ './public/': '/' })

    eleventyConfig.setLibrary("md", markdownIt().use(markdownItAttrs));
}