<template>
  <div class="contact-container">
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
    <div class="contact">
      <div class="contact-content">
        <div class="content-header-container">
          <div class="contact-header">
            <img class="header-img" :src="$themeConfig.contact.headerPic" alt />
          </div>
        </div>
        <div class="hello">{{ $themeConfig.contact.title }}</div>
        <div class="detail">
          {{ $themeConfig.contact.subTitle1 }}
          <br />
          {{ $themeConfig.contact.subTitle2 }}
        </div>
      </div>
      <div class="contact-bottom">
        <!-- <a
          href="tencent://message/?uin=97220040&Site=Sambow&Menu=yes"
          class="icon-container"
        >
          <i class="iconfont iconQQ"></i>
        </a> -->
        <a class="icon-container weixin">
          <i class="iconfont iconQQ"></i>
          <div class="qrcode">
            <img :src="$themeConfig.contact.qq" alt />
          </div>
        </a>
        <a class="icon-container weixin">
          <i class="iconfont iconweixin"></i>
          <div class="qrcode">
            <img :src="$themeConfig.contact.wechat" alt />
          </div>
        </a>
        <a class="icon-container email">
          <i class="iconfont iconemailFilled"></i>
          <div class="email-content">{{ $themeConfig.contact.mail }}</div>
        </a>
        <a :href="$themeConfig.contact.github" class="icon-container">
          <i class="iconfont icongithub"></i>
        </a>
      </div>
      <!-- <div class="contact-card"> -->
      <!-- <contact-item :isLink="false" icon="QQ" content="97220040" />
        <contact-item :isLink="false" icon="emailFilled" content="libra085925@gmail.com" />
        <contact-item :isLink="false" icon="weixin" content="WX_LIBRA_CODE" />
      <contact-item :isLink="true" icon="github" content />-->
      <!-- </div> -->
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "@theme/components/Navbar";
import MyFooter from "@theme/components/Footer";
export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="less">
@import "@theme/common/color.less";
.contact-container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  .bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: left / cover fixed no-repeat url("../assets/background.jpg");
    z-index: -1;
  }
  .contact {
    flex: 1;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (min-width: 992px) {
      padding: 0px 20px;
      margin-top: 30px;
    }
    .content-header-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: @whiteColor;
      border-radius: 80px;
      overflow: hidden;
      width: 160px;
      height: 160px;
      .contact-header {
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 75px;
        .header-img {
          object-fit: cover;
        }
      }
    }
    .hello {
      font-size: 30px;
      font-weight: bold;
      margin-top: 20px;
    }
    .detail {
      text-align: center;
      margin-top: 20px;
      font-style: italic;
    }
    .contact-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .contact-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      .email {
        position: relative;
        &:hover {
          .email-content {
            display: block;
          }
        }
        .email-content {
          position: absolute;
          overflow: hidden;
          top: -40px;
          left: -55px;
          padding: 3px 10px;
          border-radius: 2px;
          background-color: @backgroundColor;
          display: none;
        }
      }
      .weixin {
        position: relative;
        .qrcode {
          position: absolute;
          border-radius: 3px;
          overflow: hidden;
          width: 100px;
          height: 100px;
          top: -120px;
          left: -15px;
          background-color: @whiteColor;
          display: none;
        }
        &:hover {
          .qrcode {
            display: block;
          }
        }
      }
      .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: @whiteColor;
        margin: 0 10px;
        .iconfont {
          font-size: 30px;
          color: @backgroundColor8;
        }
        &:hover {
          cursor: pointer;
          .iconfont {
            transition: all 0.5s;
            color: black;
          }
        }
      }
    }
  }
}
</style>
