<template>
  <router-link :to="path" class="blog-item">
    <div class="img-container">
      <img :src="source" alt class="img" />
    </div>
    <div class="contents">
      <div class="title">{{ title }}</div>
      <div class="content">{{ content }}</div>
      <div class="bottom">
        <span class="time">
          <i class="iconfont iconshizhong"></i>
          {{ time }}
        </span>
        <span class="category">
          <i class="iconfont iconlabel"></i>
          {{ category }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["source", "title", "content", "time", "category", "path"],
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
