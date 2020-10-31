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
        <div class="picLink">
          <img :src="Blogs[0].frontmatter.picture" alt class="picture" />
        </div>
        <div class="detail animated slow bounceInLeft">
          <div class="title-label">
            <span class="title">{{ Blogs[0].frontmatter.title }}</span>
            <span class="label">
              <i class="iconfont iconlabel"></i>
              {{ Blogs[0].frontmatter.category }}
            </span>
          </div>
          <div class="content">{{ Blogs[0].frontmatter.desc }}</div>
          <div class="bottom-content">
            <div class="bottom-left">
              <span class="time">
                <i class="iconfont iconshizhong"></i>
                {{ Blogs[0].frontmatter.date }}
              </span>
              <span class="likes">
                <i class="iconfont iconlabel"></i>
                {{ Blogs[0].frontmatter.category }}
              </span>
            </div>
            <router-link class="bottom-right" :to="Blogs[0].path">
              阅读更多
              <i class="iconfont icon-Right-Arrow"></i>
            </router-link>
          </div>
        </div>

        <div class="recently-blog-mobile">
          <span class="recently-title">最近博客</span>
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

        <div class="recently-blog">
          <span class="recently-title">最近博客</span>
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
import { sortBlog } from "../utils";
export default {
  props: ["label"],
  data() {
    return {
      Blogs: [],
      total: 0,
      labels: [],
    };
  },
  methods: {
    getRecentBlogs() {
      let pages = this.$site.pages;
      return pages.filter((item) => {
        const { date } = item.frontmatter;
        return date !== undefined;
      });
    },
  },
  created() {
    this.Blogs = sortBlog(this.getRecentBlogs()).slice(0, 8);
  },
  components: {
    MyHeader,
    MyFooter,
    LabelCard,
    InfoCard,
    BlogItem,
    MobileBlogItem,
    MobileLabel,
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
      .picLink {
        @media (max-width: 992px) {
          padding: 0 10px;
        }
        .picture {
          width: 100%;
          display: block;
          position: relative;
          border-radius: 0 0 20px 20px;
          box-shadow: 0 2px 12px 0 @blackColor;
          @media (max-width: 992px) {
            border-radius: 5px;
            overflow: hidden;
          }
        }
      }
      .mobile-detail {
        @media (min-width: 992px) {
          display: none;
        }
        color: @whiteColor;
        font-weight: 100;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        line-clamp: 3;
        box-orient: vertical;
        .title {
          font-size: 2rem;
        }
        .content {
          overflow: hidden;
        }
        .bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: @whiteColor;
          font-size: 0.8rem;
          width: 100%;
          font-weight: 100;
          .bottom-left {
            flex: 1;
            display: block;
            .commits {
              margin-left: 10px;
            }
            .likes {
              margin-left: 10px;
            }
          }
          .bottom-right {
            display: block;
            color: @whiteColor6;
            transition: 0.5s all;
            .iconfont {
              transition: 0.5s all;
            }
            &:hover {
              cursor: pointer;
              color: @whiteColor;
              .iconfont {
                color: @whiteColor;
              }
            }
          }
        }
      }
      .detail {
        @media (max-width: 992px) {
          display: none;
        }
        position: absolute;
        top: 450px;
        left: 40px;
        height: 300px;
        padding: 40px 20px 20px 20px;
        box-shadow: 0 2px 12px 0 @blackColor;
        border-radius: 0 0 20px 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: @backgroundColor8;
        .title-label {
          width: 100%;
          display: flex;
          color: @whiteColor;
          justify-content: space-between;
          font-weight: 100;
          .title {
            font-size: 3rem;
          }
          .label {
            // background-color: #1867c0;
            padding: 5px 10px;
            border-radius: 3px;
            height: 32px;
            transition: 0.5s all;
            &:hover {
              cursor: pointer;
              box-shadow: 0 2px 12px 0 @blackColor;
            }
          }
        }
        .content {
          flex: 1;
          margin: 20px 0;
          font-size: 1.2rem;
          color: @whiteColor6;
          font-weight: 100;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 3; //行数需设置
          line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: @whiteColor;
          font-weight: 100;
          .bottom-left {
            flex: 1;
            display: block;
            .commits {
              margin-left: 10px;
            }
            .likes {
              margin-left: 10px;
            }
          }
          .bottom-right {
            display: block;
            color: @whiteColor6;
            transition: 0.5s all;
            .iconfont {
              transition: 0.5s all;
            }
            &:hover {
              cursor: pointer;
              color: @whiteColor;
              .iconfont {
                color: @whiteColor;
              }
            }
          }
        }
      }
      @media (max-width: 992px) {
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
      }
      .mobile-classify-label {
        @media (min-width: 992px) {
          display: none;
        }
        padding: 10px 10px 30px 10px;
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
        margin-top: 300px;
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
