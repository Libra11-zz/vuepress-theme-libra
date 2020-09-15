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
        <span class="title animated rollIn">{{ title }}</span>
        <ul class="label animated zoomInUp">
          <li class="date">
            <i class="iconfont iconshizhong"></i>
            123
          </li>
          <li class="update">
            <i class="iconfont iconUpdate"></i>
            123
          </li>
          <li class="labels">
            <i class="iconfont iconlabel"></i>
            {{ category }}
          </li>
        </ul>
        <div class="image">
          <img :src="headerPic" alt width="100%" />
        </div>
        <div class="detail">
          <div><Content /></div>
        </div>
      </div>
      <div class="right">
        <category-card />
        <info-card />
        <ul class="list">
          <li
            v-for="(item, index) in hs"
            :key="index"
            class="catalog-list"
            :style="`padding-left: ${(parseFloat(item.tagName[1]) - 1) * 20}px`"
          >
            <a :href="`#heading-${index}`" v-html="item.innerHTML"></a>
          </li>
        </ul>
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
export default {
  layout: "other",
  data() {
    return {
      hs: [],
      id: this.$route.params.id,
      title: "",
      pubTime: "",
      upTime: "",
      category: "",
      content: "",
      headerPic: "",
      views: 0,
      commentsLength: 0,
    };
  },
  mounted() {
    // this.fixedTop();
    setTimeout(() => {
      this.listAndAnchor();
    }, 1000);
  },
  methods: {
    // generator markdown catalog
    listAndAnchor() {
      let markdownDiv = document.querySelector(".detail>div");
      this.hs = Array.from(markdownDiv.querySelectorAll("h1, h2"));
      for (let i = 0; i < this.hs.length; i++) {
        const item = this.hs[i];
        item.id = `heading-${i}`;
      }
    },
    // apply catalog fixed top
    // fixedTop() {
    //   var obj = document.querySelector(".list");
    //   var ot = obj.offsetTop;
    //   document.onscroll = function() {
    //     var st = document.body.scrollTop || document.documentElement.scrollTop;
    //     obj.setAttribute("data-fixed", st >= ot + 20 ? "fixed" : "");
    //   };
    // },
  },
  components: {
    InfoCard,
    CategoryCard,
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="less" scoped>
@import "@theme/common/color.less";

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
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
    position: absolute;
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
        margin-top: 60px;
        border-radius: 0 0 20px 20px;
        box-shadow: 0 2px 12px 0 @blackColor;
        .catalog-list {
          transition: 0.5s all;
          padding: 2px 0;
          &:hover {
            // background-color: grey;
            font-size: 1.5rem;
          }
        }
        li {
          a {
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
