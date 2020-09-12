module.exports = {
  plugins: [
    [
      "@vuepress/blog",
      {
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
            // Layout of the `scope page`
            scopeLayout: "Tag",
          },
        ],
      },
    ],
  ],
};
