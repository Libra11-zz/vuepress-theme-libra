<template>
  <div class="timeline">
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
    <div class="content">
      <div class="left">
        <section id="conference-timeline">
          <div class="conference-center-line"></div>
          <div
            class="conference-timeline-content"
            v-for="(item, index) in blogs"
            :key="index"
          >
            <div class="timeline-article" @click="goDetail(item)">
              <div
                :class="
                  index % 2 === 0
                    ? 'content-right-container fadeInRight'
                    : 'content-left-container fadeInLeft'
                "
                class="animated"
              >
                <div
                  :class="index % 2 === 0 ? 'content-right' : 'content-left'"
                >
                  <div class="timeline-container">
                    <div class="card-left"></div>
                    <div class="card-right">
                      <div class="title">{{ item.frontmatter.title }}</div>
                      <div class="desc">{{ item.frontmatter.desc }}</div>
                      <div class="date">
                        <i class="iconfont iconshizhong"></i>
                        <div class="time">
                          {{ item.frontmatter.date }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="meta-icon animated zoomIn">
                <div class="inner">
                  <i>{{ $themeConfig.logo || "L" }}</i>
                </div>
              </div>
            </div>
          </div>
        </section>
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
import LabelCard from "@theme/components/LabelCard";
import InfoCard from "@theme/components/InfoCard";
import { sortBlog } from "../utils/index.js";
export default {
  data() {
    return {
      blogs: [],
    };
  },
  created() {
    this.blogs = sortBlog(this.getAllBlog());
  },
  methods: {
    getAllBlog() {
      let pages = this.$site.pages;
      return pages.filter((item) => {
        const { date } = item.frontmatter;
        return date !== undefined;
      });
    },
    goDetail(item) {
      this.$router.push(`${item.path}`);
    },
  },
  components: {
    MyHeader,
    MyFooter,
    LabelCard,
    InfoCard,
  },
};
</script>

<style lang="less">
@import "@theme/common/color.less";
.timeline {
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
  .content {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    max-width: 1284px;
    margin: 0 auto;
    .left {
      width: 904px;
      @media (max-width: 992px) {
        padding: 0px 10px;
      }

      /*===== Vertical Timeline =====*/
      #conference-timeline {
        position: relative;
        max-width: 904px;
        width: 100%;
        margin: 0 auto;
      }
      #conference-timeline .conference-center-line {
        position: absolute;
        width: 2px;
        height: 100%;
        top: 0;
        left: 50%;
        margin-left: -2px;
        background: @whiteColor6;
        z-index: 0;
      }
      .timeline-article {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        margin: 10px 0;
        cursor: pointer;
        .timeline-container {
          display: flex;
          // align-items: center;
          .card-left {
            .index {
              font-size: 30px;
              margin-right: 20px;
            }
          }
          .card-right {
            width: 100%;
            .title {
              font-size: 18px;
            }
            .desc {
              font-weight: 100;
              margin-top: 10px;
              font-size: 14px;
              padding-left: 20px;
              font-style: italic;
            }
            .date {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              margin-top: 10px;
              .iconfont {
                vertical-align: middle;
                line-height: 1.5;
                margin-right: 10px;
              }
              .time {
                text-align: right;
                font-weight: 100;
                font-size: 12px;
                font-style: italic;
                color: @whiteColor6;
              }
            }
          }
        }
      }
      .timeline-article .content-left-container,
      .timeline-article .content-right-container {
        padding: 10px 0;
        max-width: 44%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .timeline-article .content-left,
      .timeline-article .content-right {
        position: relative;
        width: 97%;
        border-radius: 5px;
        background-color: @backgroundColor6;
        box-shadow: 2px 2px 5px 0 @blackColor;
        overflow: hidden;
        padding: 20px 10px;
      }
      .timeline-article p {
        padding: 0;
        font-weight: 100;
        color: @whiteColor6;
        font-size: 14px;
        line-height: 24px;
        position: relative;
      }
      .timeline-article .content-left-container {
        float: left;
      }
      .timeline-article .content-right-container {
        float: right;
      }
      .timeline-article .content-left:before,
      .timeline-article .content-right:before {
        position: absolute;
        top: 20px;
        font-size: 23px;
        font-family: "Libra";
        color: @whiteColor;
      }
      .timeline-article .meta-icon {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50px;
        height: 50px;
        margin-left: -25px;
        color: @whiteColor;
        border-radius: 100%;
        background: @whiteColor;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.6s;
        &:hover {
          background: #36bfc4;
          cursor: pointer;
          transition: all 0.6s;
        }
        .inner {
          width: 44px;
          height: 44px;
          background-color: @blackColor;
          border-radius: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            color: @whiteColor;
            font-size: 20px;
          }
        }
      }
      /*===== // Vertical Timeline =====*/

      /*===== Resonsive Vertical Timeline =====*/
      @media only screen and (max-width: 830px) {
        #conference-timeline .timeline-start,
        #conference-timeline .timeline-end {
          margin: 0;
        }
        #conference-timeline .conference-center-line {
          margin-left: 0;
          left: 26px;
        }
        .timeline-article .meta-icon {
          // margin-left: 0;
          left: 26px;
        }
        .timeline-article .content-left-container,
        .timeline-article .content-right-container {
          max-width: 100%;
          width: auto;
          float: none;
          margin-left: 64px;
          min-height: 53px;
        }
        .timeline-article .content-left-container {
          margin-bottom: 20px;
        }
        .timeline-article .content-left,
        .timeline-article .content-right {
          width: 93%;
          padding: 10px 25px;
          min-height: 65px;
        }
        .timeline-article .content-left:before {
          content: "";
          position: absolute;
          top: 16px;
          left: -14px;
          height: 0;
          width: 0;
          border: 7px solid transparent;
          border-right: 7px solid @backgroundColor6;
        }
        .timeline-article .content-right:before {
          content: "";
          position: absolute;
          top: 16px;
          left: -14px;
          height: 0;
          width: 0;
          border: 7px solid transparent;
          border-right: 7px solid @backgroundColor6;
        }
      }
      @media only screen and (max-width: 400px) {
        .timeline-article p {
          margin: 0;
        }
      }
      /*===== // Resonsive Vertical Timeline =====*/
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
