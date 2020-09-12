<template>
  <router-link :to="url" class="mobile-label">
    <span class="title">{{title}}</span>
  </router-link>
</template>

<script>
export default {
  props: ["title", "url"]
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>