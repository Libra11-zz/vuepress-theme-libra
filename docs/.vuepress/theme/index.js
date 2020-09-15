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
        ],
      },
    ],
  ],
};
