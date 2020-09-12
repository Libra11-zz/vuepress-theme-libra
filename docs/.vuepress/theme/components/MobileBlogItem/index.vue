<template>
  <div @click="go(id)" class="mobile-blog-item">
    <div class="item-left">
      <img :src="source" alt class="left-image" />
    </div>
    <div class="item-right">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
      <div class="bottom">
        <span class="time">
          <i class="iconfont iconshizhong"></i>
          {{time}}
        </span>
        <span class="category">
          <i class="iconfont iconlabel"></i>
          {{category}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["source", "title", "content", "time", "category", "url", "id"],
  methods: {
    go(id) {
      this.$router.push({
        path: "/articleDetail/" + id
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>