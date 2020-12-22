// Layout of the `entry page`
<template>
  <div class="labels-container">
    <my-header></my-header>
    <vue-particles
      class="bg"
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="6"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <div class="label-content">
      <div class="left">
        <div class="mobile-classify-label">
          <mobile-label />
        </div>
        <div class="page-blog-mobile">
          <span class="page-title">
            {{ isCategory ? current : current }}
          </span>
          <mobile-blog-item
            v-for="(item, index) in Blogs"
            :key="index"
            :source="item.frontmatter.picture"
            :title="item.frontmatter.title"
            :content="item.frontmatter.desc"
            :time="item.frontmatter.date"
            :path="item.path"
            :category="item.frontmatter.category"
          />
        </div>
        <div class="page-blog">
          <span class="page-title">
            {{ isCategory ? current : current }}
          </span>
          <div class="blog-container">
            <blog-item
              v-for="(item, index) in Blogs"
              :key="index"
              :source="item.frontmatter.picture"
              :title="item.frontmatter.title"
              :content="item.frontmatter.desc"
              :path="item.path"
              :time="item.frontmatter.date"
              :category="item.frontmatter.category"
            />
          </div>
        </div>
      </div>
      <div class="right">
        <label-card v-if="!isCategory" />
        <category-card v-else />
        <info-card />
      </div>
    </div>
    <pagination
      :totalPages="$pagination.length"
      :changePage="changePage"
      :currentPage="$pagination.paginationIndex + 1"
    ></pagination>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "@theme/components/Navbar";
import MyFooter from "@theme/components/Footer";
import BlogItem from "@theme/components/BlogItem";
import LabelCard from "@theme/components/LabelCard";
import CategoryCard from "@theme/components/CategoryCard";
import InfoCard from "@theme/components/InfoCard";
import MobileBlogItem from "@theme/components/MobileBlogItem";
import MobileLabel from "@theme/components/MobileLabel";
import Pagination from "@theme/components/Pagination";
export default {
  data() {
    return {
      Blogs: [],
      isCategory: false,
      current: "",
    };
  },
  watch: {
    // 路由变化 重新更新数据赋值
    $route(to, from) {
      if (to.fullPath !== from.fullPath) {
        this.Blogs = this.getBlogsByTag();
      }
    },
  },
  methods: {
    getBlogsByTag() {
      return this.$pagination.pages;
    },
    getCurrentCategoryOrTag() {
      if (this.isCategory) {
        return this.$currentCategory.path.split("/")[2];
      } else {
        return this.$currentTag.path.split("/")[2];
      }
    },
    changePage(n) {
      // 报错没找到原因  目前被我catch掉了  找到原因的小伙伴可以私信一下我
      // if (n !== 1) {
      //   if (this.isCategory) {
      //     this.$router
      //       .push(`/category/${this.current}/page/${n}`)
      //       .catch(() => {});
      //   } else {
      //     this.$router.push(`/tag/${this.current}/page/${n}`).catch(() => {});
      //   }
      // } else {
      //   if (this.isCategory) {
      //     this.$router.push(`/category/${this.current}`).catch(() => {});
      //   } else {
      //     this.$router.push(`/tag/${this.current}`).catch(() => {});
      //   }
      // }
      if (n === 1) {
        if (this.isCategory) {
          this.$router
            .push(`/category/${this.getCurrentCategoryOrTag()}`)
            .catch(() => {});
        } else {
          this.$router.push(`/tag/${this.getCurrentCategoryOrTag()}`).catch(() => {});
        }
      }else {
        if (this.isCategory) {
          this.$router
            .push(`/category/${this.getCurrentCategoryOrTag()}/page/${n}`)
            .catch(() => {});
        } else {
          this.$router.push(`/tag/${this.getCurrentCategoryOrTag()}/page/${n}`).catch(() => {});
        }
      }
    },
  },
  created() {
    if (this.$route.path.startsWith("/category")) {
      this.isCategory = true;
    }
    this.Blogs = this.getBlogsByTag();
  },
  components: {
    MyHeader,
    MyFooter,
    LabelCard,
    CategoryCard,
    InfoCard,
    BlogItem,
    MobileBlogItem,
    MobileLabel,
    Pagination,
  },
};
</script>

<style lang="less">
@import "@theme/common/color.less";
.labels-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  .bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: left / cover fixed no-repeat url("../assets/background.jpg");
    z-index: -1;
  }
  .label-content {
    position: relative;
    flex: 1;
    @media (min-width: 992px) {
      margin-top: 30px;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    max-width: 1284px;
    margin: 0 auto;
    .left {
      flex: 1;
      position: relative;
      @media (max-width: 992px) {
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
      }
      .mobile-classify-label {
        @media (min-width: 992px) {
          display: none;
        }
        padding: 0 10px;
      }
      .page-blog-mobile {
        @media (min-width: 992px) {
          display: none;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        .page-title {
          display: inline-block;
          font-size: 1.8rem;
          color: @whiteColor;
          font-weight: 100;
          margin: 20px 0 0 0;
          position: relative;
          &:after {
            content: "";
            width: 80%;
            height: 1px;
            background-color: #36bfc4;
            position: absolute;
            bottom: -5px;
            left: 10%;
          }
        }
      }
      .page-blog {
        @media (max-width: 992px) {
          display: none;
        }
        position: relative;
        // margin-top: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // margin: 0 auto;
        .blog-container {
          display: flex;
          // justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          min-width: 904px;
          div {
            margin-right: 20px;
          }
        }
        .page-title {
          display: inline-block;
          font-size: 3rem;
          color: @whiteColor;
          font-weight: 100;
          margin: 0px 0 20px 0;
          text-align: center;
          position: relative;
          &:after {
            content: "";
            width: 80%;
            height: 1px;
            background-color: #36bfc4;
            position: absolute;
            bottom: -5px;
            left: 10%;
          }
        }
      }
    }
    .right {
      @media (max-width: 992px) {
        display: none;
      }
      display: flex;
      flex-direction: column;
      margin-left: 80px;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
}
</style>
