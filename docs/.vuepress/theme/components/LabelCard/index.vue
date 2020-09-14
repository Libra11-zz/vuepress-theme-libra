<template>
  <div class="test animated bounceInRight">
    <span class="labeltitle">标签</span>
    <div class="label-container">
      <Label v-for="(item, index) in label" :key="index" :text="item" />
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
  created() {
    this.label = this.getAllTags();
  },
  methods: {
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
  },
  components: {
    Label
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>