<template>
  <router-link class="container" :to="url">
    <i :class="icon" class="iconfont"></i>
    {{text}}
  </router-link>
</template>

<script>
export default {
  props: ["icon", "text", "url"]
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>