<template>
  <div class="test animated bounceInRight">
    <span class="labeltitle">分类</span>
    <div class="label-container">
      <Category v-for="(item, index) in categorys" :key="index" :text="item" />
    </div>
  </div>
</template>

<script>
import Category from "../Category";
export default {
  data() {
    return {
      categorys: [],
    };
  },
  created() {
    this.categorys = this.getAllCategorty();
  },
  methods: {
    getAllCategorty() {
      let pages = this.$site.pages;
      pages = pages.filter((item) => {
        const { date } = item.frontmatter;
        return date !== undefined;
      });
      let res = ["All"];
      pages.forEach((item) => {
        let category = item.frontmatter.category;
        if (typeof category === "string") {
          res.push(category);
        } else if (Array.isArray(category)) {
          category.forEach((i) => {
            res.push(i);
          });
        }
      });
      return new Set(res);
    },
  },
  components: {
    Category,
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
