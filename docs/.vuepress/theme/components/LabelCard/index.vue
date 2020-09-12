<template>
  <div class="test animated bounceInRight">
    <span class="labeltitle">标签</span>
    <div class="label-container">
      <Label v-for="(item, index) in label" :key="index" :url="`/label/${item}`" :text="item" />
    </div>
  </div>
</template>

<script>
import Label from "../Label";
export default {
  data() {
    return {
      label: []
    };
  },
  components: {
    Label
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>