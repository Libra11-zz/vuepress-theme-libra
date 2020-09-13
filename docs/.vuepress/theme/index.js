module.exports = {
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "blogs",
            dirname: "blogs",
            path: "/",
            layout: "Layout",
            itemLayout: "Blog",
            itemPermalink: "/:year/:month/:day/:slug",
            pagination: {
              lengthPerPage: 10,
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
          },
        ],
      },
    ],
  ],
};
