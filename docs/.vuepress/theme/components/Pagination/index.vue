<template>
  <div class="pageContainer">
    <ul class="pagesInner">
      <li class="page" @click="prevOrNext(-1)">
        <span class="iconfont iconleft" aria-hidden="true"></span>
      </li>
      <li
        class="page"
        v-for="(item, index) in pages"
        :key="index"
        :class="{actived: item === currentPage}"
        @click="select(item)"
      >
        <span>{{item}}</span>
      </li>
      <li class="page" @click="prevOrNext(1)">
        <span class="iconfont iconaui-icon-right" aria-hidden="true"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["totalPages", "changePage"],
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    select(n) {
      if (n === this.currentPage) return;
      if (typeof n === "string") return;
      this.currentPage = n;
      this.changePage(n);
    },
    prevOrNext(n) {
      this.currentPage += n;
      this.currentPage < 1
        ? (this.currentPage = 1)
        : this.currentPage > this.totalPages
        ? (this.currentPage = this.totalPages)
        : null;
      this.changePage(this.currentPage);
    }
  },
  computed: {
    pages() {
      const c = this.currentPage;
      const t = this.totalPages;
      if (t <= 10) {
        return Array.from({ length: t }, (v, k) => k + 1);
      }
      if (c <= 5) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, "...", t];
      } else if (c >= t - 4) {
        return [
          1,
          "...",
          t - 8,
          t - 7,
          t - 6,
          t - 5,
          t - 4,
          t - 3,
          t - 2,
          t - 1,
          t
        ];
      } else {
        return [
          1,
          "...",
          c - 3,
          c - 2,
          c - 1,
          c,
          c + 1,
          c + 2,
          c + 3,
          "...",
          t
        ];
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>