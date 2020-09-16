module.exports = {
  title: "Libra",
  description: "a vuepress theme by libra",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  locales: {
    "/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "vue-press-theme-libra",
      description: "a vuepress theme by libra",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "vue-press-theme-libra",
      description: "libra写的vuepress主题",
    },
  },
  // theme:
  themeConfig: {
    home: {
      title: "Libra",
      subTitle: "在生活里，我们永远是初学者",
    },
    footer: {
      copyright: "Copyright © 2019-2020 Libra | 版权所有",
    },
    infoCard: {
      headerPic: "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg",
      name: "Libra",
      mail: "libra085925@gmail.com",
    },
    contact: {
      title: "Hello There !!!!",
      subTitle1: "Thank you for visiting my blog",
      subTitle2: "Hope we can make progress together",
      wechat:
        "https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/weixin-qrcode.png",
      mail: "libra085925@gmail.com",
      github: "https://github.com/Libra11",
      headerPic: "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg",
    },
  },
};
