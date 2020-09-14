<template>
  <div>
    <router-link :to="goTo(item)" class="mobile-label" v-for="(item, index) in label" :key="index">
      <span class="title">{{item}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: []
    };
  },
  created() {
    this.label = this.getAllTags();
  },
  methods: {
    goTo(item) {
      if (item === "All") {
        return "/tag";
      } else {
        return `/tag/${item}`;
      }
    },
    getAllTags() {
      let pages = this.$site.pages;
      pages = pages.filter(item => {
        const { date } = item.frontmatter;
        return date !== undefined;
      });
      let res = ["All"];
      pages.forEach(item => {
        let tag = item.frontmatter.tag;
        if (typeof tag === "string") {
          res.push(tag);
        } else if (Array.isArray(tag)) {
          tag.forEach(i => {
            res.push(i);
          });
        }
      });
      return new Set(res);
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>