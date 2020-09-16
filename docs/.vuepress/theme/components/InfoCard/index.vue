<template>
  <div class="my">
    <div class="header-info">
      <div class="avatar">
        <img :src="$themeConfig.infoCard.headerPic" alt class="avatar-img" />
      </div>
      <span class="name">{{ $themeConfig.infoCard.name }}</span>
      <i class="mail">{{ $themeConfig.infoCard.mail }}</i>
      <div class="statistics">
        <span class="articles">
          {{ totalCount }}
          <i class="white">&nbsp;文章</i>
        </span>
        <span class="verticle-line white">|</span>
        <span class="link">
          {{ categoryCount }}
          <i class="white">&nbsp;分类</i>
        </span>
      </div>
      <router-link to="/contact" class="more">联系我</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalCount: 0,
      categoryCount: 0,
    };
  },
  created() {
    this.getAllBlogsNum();
    this.getAllCategoryNum();
  },
  methods: {
    getAllBlogsNum() {
      let pages = this.$site.pages;
      pages = pages.filter((item) => {
        const { date } = item.frontmatter;
        return date !== undefined;
      });
      this.totalCount = pages.length;
    },
    getAllCategoryNum() {
      let pages = this.$site.pages;
      pages = pages.filter((item) => {
        const { date } = item.frontmatter;
        return date !== undefined;
      });
      let res = [];
      pages.forEach((item) => {
        let category = item.frontmatter.category;
        res.push(category);
      });
      this.categoryCount = new Set(res).size;
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
