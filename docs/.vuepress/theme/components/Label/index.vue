<template>
  <router-link class="container" to="/">
    <i :class="icon" class="iconfont"></i>
    {{text}}
  </router-link>
</template>

<script>
export default {
  props: ["icon", "text"]
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>