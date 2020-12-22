<template>
  <div class="article">
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
    <div class="article-content">
      <div class="left">
        <span class="title animated rollIn">{{ blog.title }}</span>
        <ul class="label animated zoomInUp">
          <li class="date">
            <i class="iconfont iconshizhong"></i>
            {{ blog.date }}
          </li>
          <li class="update">
            <i class="iconfont iconUpdate"></i>
            {{ blog.Update || blog.date }}
          </li>
          <li class="labels">
            <i class="iconfont iconlabel"></i>
            {{ blog.category }}
          </li>
        </ul>
        <div class="image">
          <img :src="blog.picture" alt width="100%" />
        </div>
        <div class="detail">
          <div>
            <Content />
          </div>
        </div>
        <Comment v-if="$themeConfig.comment.showComment"/>
      </div>
      <div class="right">
        <category-card />
        <info-card />
        <div class="list">
          <!-- <li
            v-for="(item, index) in hs"
            :key="index"
            class="catalog-list"
            :style="`padding-left: ${(parseFloat(item.tagName[1]) - 1) * 20}px`"
          >
            <a :href="`#heading-${index}`" v-html="item.innerHTML"></a>
          </li> -->
           <TOC/>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import CategoryCard from "@theme/components/CategoryCard";
import InfoCard from "@theme/components/InfoCard";
import MyHeader from "@theme/components/Navbar";
import MyFooter from "@theme/components/Footer";
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
import "prismjs/themes/prism-tomorrow.css";

export default {
  layout: "other",
  data() {
    return {
      hs: [],
      blog: {},
    };
  },
  mounted() {
    this.fixedTop();
  },
  watch: {
    // 路由变化 重新更新数据赋值
    $route(to, from) {
      if (to.fullPath !== from.fullPath) {
        this.refresh();
      }
    },
  },
  methods: {
    // apply catalog fixed top
    fixedTop() {
      var obj = document.querySelector(".list");
      var ot = obj.offsetTop;
      document.onscroll = function () {
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        obj.setAttribute("data-fixed", st >= ot + 20 ? "fixed" : "");
      };
    },
    refresh() {
      this.blog = this.$frontmatter;
    },
  },
  created() {
    this.blog = this.$frontmatter;
  },
  components: {
    InfoCard,
    CategoryCard,
    MyHeader,
    MyFooter,
    Comment
  },
};
</script>

<style lang="less">
@import "@theme/common/color.less";
.article {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  .bg {
    background: left / cover fixed no-repeat url("../assets/background.jpg");
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -1;
  }
  .article-content {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    max-width: 1284px;
    margin: 0 auto;
    @media (min-width: 992px) {
      padding: 0px 20px;
      margin-top: 30px;
    }
    .left {
      flex: 1;
      position: relative;
      @media (max-width: 992px) {
        width: 100%;
      }
      padding: 0px 10px;
      margin: 0 auto;
      max-width: 1284px;
      .image {
        border-radius: 5px;
        overflow: hidden;
        @media (min-width: 992px) {
          height: 500px;
        }
      }
      .title {
        display: block;
        color: @textColor;
        font-size: 3rem;
        font-weight: bold;
        // font-style: italic;
        text-align: left;
        @media (max-width: 992px) {
          font-size: 2rem;
        }
      }
      .label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 20px 0;
        color: @textColor;
        font-style: italic;
        font-size: 1rem;
        li {
          padding: 0 10px 0 0;
        }
        .iconfont {
          font-size: 1.1rem;
        }
      }
      .detail {
        margin-bottom: 80px;
        a{
          display:none;
        }
      }
      .vssue{
        .vssue-header-powered-by{
          display: none;
        }
        .vssue-new-comment{
          .vssue-comment-avatar {
          border-radius: 50%;
          border: 2px solid @whiteColor;
            transition: all 0.5s;
          overflow: hidden;
          .vssue-icon{
                  font-size: 46px;
                }
        }
          }
          .vssue-comments{
            .vssue-pagination{
              .vssue-pagination-per-page{
                .vssue-pagination-select{
                  color: #3eaf7c;
                  border:none;
                  background-image: none;
                  appearance:button;
                  padding-right: 0;
                  &:focus{
                    background-color: transparent;
                    box-shadow: none;
                  }
                }
              }
            }
            .vssue-comment{
              .vssue-comment-avatar{
                border-radius: 50%;
                overflow: hidden;
                border: 2px solid @whiteColor;
              }
              .vssue-comment-body{
                background-color: @backgroundColor6;
            box-shadow: 0 2px 10px 0 @blackColor;
            border-radius: 5px;
                .vssue-comment-header{
                  border: none;
                }
                .vssue-comment-main{
                  border: none;
                  padding-top: 0;
                  padding-bottom: 0;
                  .vssue-edit-comment-input{
                    color: @whiteColor;
                  }
                  .markdown-body{
                    color: @whiteColor;
                    blockquote::before{
                      background-color: transparent;
                    }
                  }
                }
                .vssue-comment-footer{
                  border: none;
                }
              }
            }
          }
        .vssue-new-comment-body {
          .vssue-new-comment-input{
            border: none;
            color: @whiteColor;
            background-color: @backgroundColor6;
            box-shadow: 0 2px 10px 0 @blackColor;
          }
        }
        .vssue-new-comment-footer {
          .vssue-new-comment-operations{
            .vssue-button{
              // padding: 0;
              border: 1px solid @whiteColor;
              font-size: 12px;
              color: @whiteColor;
            }
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
      align-items: flex-start;
      .list {
        background-color: @backgroundColor6;
        padding: 20px 20px 20px 20px;
        width: 300px;
        max-height: 600px;
        margin-top: 60px;
        border-radius: 0 0 20px 20px;
        overflow-y: scroll;
        box-shadow: 0 2px 12px 0 @blackColor;
        ul {
          padding-left: 10px;
        }
        li {
          list-style:disc;
          a {
          transition: 0.5s all;
          display: block;
          padding: 2px 0;
          &:hover {
            font-size: 1.5rem;
          }
            code {
              color: @whiteColor;
            }
          }
        }
      }
      .list[data-fixed="fixed"] {
        position: fixed;
        top: 0;
      }
    }
  }
}
</style>
