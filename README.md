# 介绍

主题使用`Vuepress`进行搭建

## 更新日志

- 2020.11.01 ～更改评论样式和默认语言,添加返回顶部功能
- 2020.10.31 ～更改文章目录实现逻辑和样式，修改文章标题显示样式,增加头像转动的小彩蛋,添加 github 评论功能
- 2020.10.21 ～修复目录内容过多导致的标题显示不全问题
- 2020.11.13 ～ 1.0.0 版正式发布到 npm

# 快速上手

## 普通方式

### 初始化项目

在任何地方创建一个文件夹，这里命名为`my-blog`,命令行进入这个文件夹

```
# 第一步
yarn init -y
# 或者
npm init -y

# 第二步
# 安装vuepress-theme-libra
yarn add vuepress-theme-libra --dev
# 或者
npm install --save-dev vuepress-theme-libra
```

安装完成之后，我们定义一下项目的基本目录结构

```
├── docs
│   ├── .vuepress
|       |___config.js  //项目的配置文件
│   └── blogs   // 存放所有博客readme文件,也可以创建文件夹
|       |___a.md
|       |___b.md
├── package.json
|__ node_modules
```

接着在`package.json`中加入下面的命令代码

```
...
"scripts": {
  "dev": "vuepress dev docs"
},
...
```

然后将下面的配置文件复制到`config.js`中,并根据自己的需求更改

```javascript
module.exports = {
  title: "Libra",
  theme: "libra",
  base: "/libra-static-blog/",
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
  // theme:
  themeConfig: {
    // 主页
    home: {
      title: "Libra",
      subTitle: "在生活里，我们永远是初学者",
    },
    // 页脚
    footer: {
      // 版权信息
      copyright: "Copyright © 2019-2020 Libra | 版权所有",
    },
    // 个人信息卡片
    infoCard: {
      // 头像
      headerPic: "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg",
      // 姓名
      name: "Libra",
      // 邮箱
      mail: "libra085925@gmail.com",
    },
    // 联系人页面
    contact: {
      title: "Hello There !!!!",
      subTitle1: "Thank you for visiting my blog",
      subTitle2: "Hope we can make progress together",
      // 微信二维码地址
      wechat:
        "https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/weixin-qrcode.png",
      // 邮箱
      mail: "libra085925@gmail.com",
      // github地址
      github: "https://github.com/Libra11",
      // 头像图片地址
      headerPic: "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg",
    },
    comment: {
      // 是否显示评论列表
      showComment: false,
      // The owner's name of repository to store the issues and comments.
      owner: "Libra11",
      // The name of repository to store the issues and comments.
      repo: "vuepress-theme-libra",
      // The clientId & clientSecret introduced in OAuth2 spec.
      clientId: "07f6df24d9150e2da866",
      clientSecret: "ec60c756133e4a608e60405110a1fd6c78f19ecc",
    },
  },
};
```

### 写作

在`docs/blogs`里面添加博客文章，文章为`markdown`格式,文章以以下内容开头

```
---
title: Blogging Like a Hacker
category: vue
desc: wo bu zhi dao ni shi shei ke wo zhi dao ni wei le shei
tag:
  - vue
  - javascript
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/flutter_clean_4.png
date: "2019-10-14"
Update: "2019-10-18"
---
```

- `title`: 文章标题
- `category`: 文章分类
- `desc`: 文章描述
- `tag`: 文章标签
- `picture`: 文章缩略图`thumbnail`
- `date`: 发表日期
- `Update`: 更新日期（可选，没有则默认为发表日期）

添加好文章之后，控制台运行`yarn dev`或者`npm run dev`即可打开预览。

### 部署

控制台运行`vuepress build docs`即可在`.vuepress`文件夹下生成`dist`文件夹，包含了所有`html`、`css`、`js`以及静态文件，然后部署即可。

## 脚手架方式

> 脚手架目前在开发中，脚手架方式会更加方便简单，会自动生成上面目录结构和配置文件，敬请期待。

# 支持

> 给作者买一杯咖啡

![image](https://libra321.oss-cn-huhehaote.aliyuncs.com/github/Group%202.png)
