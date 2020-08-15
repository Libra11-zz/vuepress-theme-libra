<template>
  <nav class="topbar">
    <span class="logo">
      <span class="logo-text">L</span>
    </span>
    <ul class="menu">
      <li class="menu-item">
        <router-link to="/" class="link">主页</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/blog" class="link">博客</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/label/js" class="link">标签</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/category/JS" class="link">分类</router-link>
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
      <input placeholder="请输入搜索的内容..." class="search-input" type="text" />
    </div>
    <span class="mobile-nav" @click="handleMobileNav">
      <i class="iconfont iconnav"></i>
    </span>
    <transition name="fade">
      <nav v-show="showNav" class="mobile-nav-item">
        <div class="header-button">
          <i @click="handleMobileNav" class="iconfont iconback"></i>
          <!-- <i class="iconfont iconlanguage" @click="switchLanguage"></i> -->
        </div>
        <div class="header-info">
          <div class="avatar">
            <img
              src="https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg"
              alt
              class="avatar-img"
            />
          </div>
          <span class="name">Libra</span>
          <i class="mail">libra085925@gmail.com</i>
          <div class="statistics">
            <span class="articles">
              {{totalCount}}
              <i class="white">&nbsp;文章</i>
            </span>
            <span class="verticle-line white">|</span>
            <span class="link">
              {{categoryCount}}
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
            <router-link to="/label/js">
              <i class="iconfont iconlabel"></i>
              <i class="white">标签</i>
            </router-link>
          </li>
          <li class="nav-menu-item" @click="handleMobileNav">
            <router-link to="/category/JS">
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
export default {
  data() {
    return {
      showNav: false,
      totalCount: 0,
      categoryCount: 0
    };
  },
  methods: {
    handleMobileNav() {
      this.showNav = !this.showNav;
    }
  }
};
</script>

<style lang="less">
</style>