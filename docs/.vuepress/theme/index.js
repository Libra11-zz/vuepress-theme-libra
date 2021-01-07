// pro 开发
const { themeConfig } = require("../../docs/.vuepress/config.js");
// dev 开发
// const { themeConfig } = require("../../.vuepress/config.js");
module.exports = {
  plugins: [
    [
      "@vuepress/blog",
      {
        comment: {
          service: "vssue",
          locale: "zh",
          // The owner's name of repository to store the issues and comments.
          owner: themeConfig.comment.owner,
          // The name of repository to store the issues and comments.
          repo: themeConfig.comment.repo,
          // The clientId & clientSecret introduced in OAuth2 spec.
          clientId: themeConfig.comment.clientId,
          clientSecret: themeConfig.comment.clientSecret,
        },
        directories: [
          {
            id: "blogs",
            dirname: "blogs",
            path: "/",
            layout: "Layout",
            itemLayout: "Blogs",
            itemPermalink: "/:year/:month/:day/:slug",
            pagination: {
              lengthPerPage: 8,
            },
          },
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: "tag",
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ["tag"],
            // Path of the `entry page` (or `list page`)
            path: "/tag/",
            // Layout of the `entry page`
            layout: "Tags",
            // layout of the `scope page`
            scopeLayout: "Tag",
            pagination: {
              lengthPerPage: 8,
            },
          },
          {
            // Unique ID of current classification
            id: "category",
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ["category"],
            // Path of the `entry page` (or `list page`)
            path: "/category/",
            // Layout of the `entry page`
            layout: "Categorys",
            // layout of the `scope page`
            scopeLayout: "Category",
            pagination: {
              lengthPerPage: 8,
            },
          },
          {
            // Unique ID of current classification
            id: "blog",
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ["blog"],
            // Path of the `entry page` (or `list page`)
            path: "/blog/",
            // Layout of the `entry page`
            layout: "Blog",
            // Layout of the `scope page`
            scopeLayout: "Blogs",
            pagination: {
              lengthPerPage: 8,
            },
          },
          {
            // Unique ID of current classification
            id: "contact",
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ["contact"],
            // Path of the `entry page` (or `list page`)
            path: "/contact/",
            // Layout of the `entry page`
            layout: "Contact",
          },
          {
            // Unique ID of current classification
            id: "timeline",
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ["timeline"],
            // Path of the `entry page` (or `list page`)
            path: "/timeline/",
            // Layout of the `entry page`
            layout: "Timeline",
          },
        ],
      },
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
  ],
};
