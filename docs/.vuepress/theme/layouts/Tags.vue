// Layout of the `entry page`
<template>
  <div class="labels-container">
    <my-header></my-header>
    <div class="label-content">
      <div class="left">
        <div class="mobile-classify-label">
          <mobile-label
            v-for="(item, index) in labels"
            :key="index"
            :url="`/label/${item}`"
            :title="item"
          />
        </div>
        <div class="recently-blog-mobile">
          <span class="recently-title">{{ label }}</span>
          <mobile-blog-item
            v-for="(item, index) in Blogs"
            :key="index"
            :source="item.headerPic"
            :title="item.title"
            :url="item._id"
            :content="item.desc"
            :id="item._id"
            :time="timeTransfrom(item.upTime)"
            :category="item.category"
          />
        </div>
        <div class="recently-blog">
          <span class="recently-title">{{ label }}</span>
          <div class="blog-container">
            <blog-item
              v-for="(item, index) in Blogs"
              :key="index"
              :source="item.headerPic"
              :title="item.title"
              :url="item._id"
              :content="item.desc"
              :id="item._id"
              :time="timeTransfrom(item.upTime)"
              :category="item.category"
            />
          </div>
        </div>
      </div>
      <div class="right">
        <label-card />
        <info-card />
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "@theme/components/Navbar";
import MyFooter from "@theme/components/Footer";
import BlogItem from "@theme/components/BlogItem";
import LabelCard from "@theme/components/LabelCard";
import InfoCard from "@theme/components/InfoCard";
import MobileBlogItem from "@theme/components/MobileBlogItem";
import MobileLabel from "@theme/components/MobileLabel";
export default {
  props: ["label"],
  data() {
    return {
      Blogs: [],
      total: 0,
      labels: []
    };
  },
  methods: {
    getBlogsByTag() {
      console.log(this.$frontmatterKey.list);
    }
  },
  created() {
    this.getBlogsByTag();
  },
  components: {
    MyHeader,
    MyFooter,
    LabelCard,
    InfoCard,
    BlogItem,
    MobileBlogItem,
    MobileLabel
  }
};
</script>

<style lang="less">
@import "@theme/common/color.less";
.labels-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
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
      .recently-blog-mobile {
        @media (min-width: 992px) {
          display: none;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        .recently-title {
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
      .recently-blog {
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
        .recently-title {
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
