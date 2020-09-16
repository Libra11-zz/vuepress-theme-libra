<template>
  <div class="app">
    <Navbar />
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
      <span class="content-text header-text animated slow bounceInLeft">{{
        $themeConfig.home.title
      }}</span>
      <span class="content-text sub-text animated slow lightSpeedIn">{{
        $themeConfig.home.subTitle
      }}</span>
      <router-link to="/contact" class="contact">
        <i class="iconfont iconcontact"></i>
        联系我
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";
import Footer from "@theme/components/footer.vue";
export default {
  name: "layout",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="less" scoped>
@import "@theme/common/color.less";
.app {
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
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 100;
    margin-left: 10%;
    .contact {
      position: relative;
      margin-top: 40px;
      padding: 8px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      border: 0.5px solid @whiteColor4;
      color: @whiteColor;
      font-weight: 100;
      transition: 0.5s all;
      border-radius: 3px;
      .iconcontact {
        color: @whiteColor;
      }
      &:hover {
        cursor: pointer;
        background-color: @whiteColor2;
      }
    }
    .content-text {
      color: @whiteColor6;
      transition: 0.5s all;
      display: block;
      &:hover {
        color: @whiteColor;
      }
    }
    .header-text {
      @media (max-width: 992px) {
        font-size: 2rem;
      }
      font-size: 4rem;
    }
    .sub-text {
      @media (max-width: 992px) {
        font-size: 1rem;
      }
      margin-top: 20px;
      font-size: 2rem;
      font-weight: 100;
    }
  }
}
</style>
