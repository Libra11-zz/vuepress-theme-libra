<template>
  <nav class="topbar">
    <span class="logo">
      <span class="logo-text">{{$themeConfig.logo || "L"}}</span>
    </span>
    <ul class="menu">
      <li class="menu-item">
        <router-link to="/" class="link">主页</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/blog" class="link">博客</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/tag" class="link">标签</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/category" class="link">分类</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/timeline" class="link">时间线</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/contact" class="link">联系我</router-link>
      </li>
    </ul>
    <div class="search">
      <i class="iconfont iconsearch"></i>
      <search-box></search-box>
    </div>
    <span class="mobile-nav" @click="handleMobileNav">
      <i class="iconfont iconnav"></i>
    </span>
    <transition name="fade">
      <nav v-show="showNav" class="mobile-nav-item">
        <div class="header-button">
          <i @click="handleMobileNav" class="iconfont iconback"></i>
        </div>
        <div class="header-info">
          <div class="avatar">
            <img
              :src="$themeConfig.infoCard.headerPic"
              alt
              class="avatar-img"
            />
          </div>
          <span class="name">{{$themeConfig.infoCard.name}}</span>
          <i class="mail">{{$themeConfig.infoCard.mail}}</i>
          <div class="statistics">
            <span class="articles">
              {{ totalCount }}
              <i class="white">&nbsp;文章</i>
            </span>
            <span class="verticle-line white">|</span>
            <span class="link">
              {{ categoryCount }}
              <i class="white">&nbsp;分类</i>
            </span>
          </div>
        </div>
        <div class="line"></div>
        <ul class="nav-menu">
          <li class="nav-menu-item" @click="handleMobileNav">
            <router-link to="/">
              <i class="iconfont iconhome"></i>
              <i class="white">主页</i>
            </router-link>
          </li>
          <li class="nav-menu-item" @click="handleMobileNav">
            <router-link to="/blog">
              <i class="iconfont iconblog"></i>
              <i class="white">博客</i>
            </router-link>
          </li>
          <li class="nav-menu-item" @click="handleMobileNav">
            <router-link to="/tag">
              <i class="iconfont iconlabel"></i>
              <i class="white">标签</i>
            </router-link>
          </li>
          <li class="nav-menu-item" @click="handleMobileNav">
            <router-link to="/category">
              <i class="iconfont iconfenlei-"></i>
              <i class="white">分类</i>
            </router-link>
          </li>
          <li class="nav-menu-item" @click="handleMobileNav">
            <router-link to="/timeline">
              <i class="iconfont icontimeline"></i>
              <i class="white">时间线</i>
            </router-link>
          </li>
          <li class="nav-menu-item" @click="handleMobileNav">
            <router-link to="/contact">
              <i class="iconfont iconother"></i>
              <i class="white">联系我</i>
            </router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </nav>
</template>

<script>
import SearchBox from "@theme/components/SearchBox";
export default {
  data() {
    return {
      showNav: false,
      totalCount: 0,
      categoryCount: 0,
    };
  },
  created() {
    this.getAllBlogsNum();
    this.getAllCategoryNum();
  },
  components: {
    SearchBox,
  },
  methods: {
    handleMobileNav() {
      this.showNav = !this.showNav;
    },
    getAllBlogsNum() {
      let pages = this.$site.pages;
      pages = pages.filter((item) => {
        const { date } = item.frontmatter;
        return date !== undefined;
      });
      this.totalCount = pages.length;
    },
    getAllCategoryNum() {
      let pages = this.$site.pages;
      pages = pages.filter((item) => {
        const { date } = item.frontmatter;
        return date !== undefined;
      });
      let res = [];
      pages.forEach((item) => {
        let category = item.frontmatter.category;
        res.push(category);
      });
      this.categoryCount = new Set(res).size;
    },
  },
};
</script>

<style lang="less">
@import "@theme/common/color.less";
.topbar {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    @media (max-width: 992px) {
      width: 40px;
      height: 40px;
      border-radius: 40px;
    }
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border: 0.5px solid @whiteColor4;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
    margin: 0 0 0 20px;
    &:hover {
      border-color: @whiteColor;
      cursor: pointer;
      .logo-text {
        color: @whiteColor;
      }
    }
    .logo-text {
      @media (max-width: 992px) {
        font-size: 16px;
      }
      font-size: 24px;
      color: @whiteColor4;
      transition: 0.5s all;
    }
  }
  .menu {
    @media (max-width: 992px) {
      display: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    .menu-item {
      margin: 0px 30px;
    }
  }
  .search {
    position: relative;
    .iconsearch {
      position: absolute;
      color: @whiteColor;
      top: 50%-30px;
      left: 30px;
    }
  }
  .iconlanguage {
    @media (max-width: 992px) {
      display: none;
    }
    &:hover {
      color: @whiteColor;
      cursor: pointer;
    }
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 30px;
    color: @whiteColor6;
    transition: 0.5s all;
  }
  .link {
    position: relative;
    color: @whiteColor6;
    font-weight: 100;
    transition: 0.5s all;
    &:after {
      position: absolute;
      content: "";
      bottom: -5px;
      left: 0px;
      width: 0px;
      height: 1px;
      background-color: @whiteColor4;
      transition: 0.5s all;
    }
    &:hover {
      cursor: pointer;
      color: @whiteColor;
      &:after {
        background-color: @whiteColor;
        width: 100%;
      }
    }
  }
  .mobile-nav {
    @media (min-width: 992px) {
      display: none;
      width: 60px;
      height: 60px;
    }
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 60px;
    border: 0.5px solid @whiteColor4;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
    margin: 0 20px 0 0;
    .iconnav {
      @media (max-width: 992px) {
        font-size: 16px;
      }
      font-size: 24px;
      color: @whiteColor4;
    }
    &:hover {
      border-color: @whiteColor;
      cursor: pointer;
      .iconnav {
        color: @whiteColor;
      }
    }
  }
}
.mobile-nav-item {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: @backgroundColor;
  box-shadow: 0 5px 20px @blackColor;
  transform-origin: 0 0;
  .header-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .iconback {
      color: @whiteColor;
      font-size: 2.5rem;
      display: block;
      margin: 10px 0 0 10px;
    }
    .iconlanguage {
      color: @whiteColor;
      font-size: 2.5rem;
      display: block;
      margin: 10px 10px 0 0;
    }
  }
  .header-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-weight: 100;
    color: @whiteColor;
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 80px;
      overflow: hidden;
      border: 1px solid @whiteColor;
      .avatar-img {
        width: 80px;
        height: 80px;
      }
    }
    .name {
      margin-top: 10px;
    }
    .mail {
      color: @whiteColor6;
      font-size: 0.8rem;
      margin: 3px 0 10px 0;
    }
    .statistics {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 20px;
      color: @whiteColor6;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: @whiteColor;
  }
  .nav-menu {
    color: @whiteColor6;
    font-weight: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    .nav-menu-item {
      padding: 15px 0px;
      i {
        font-style: normal;
      }
    }
  }
}
</style>
