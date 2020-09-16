# 介绍

主题使用`Vuepress`进行搭建

# 快速上手

```
# clone the project
git clone https://github.com/Libra11/vuepress-theme-libra.git

# enter the project directory
cd vuepress-theme-libra

# install dependency
npm install # or yarn install

# develop
npm run dev # or yarn dev
```

# 配置

在`docs/.vuepress/config.js`里进行博客一些图片和文字的配置，具体信息请看`config.js`中详细内容

# 写作

在`docs/blogs`里面添加博客文章（目前里面有一些测试文章），文章为`markdown`格式,文章以一下内容开头

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
---
```

- `title`: 文章标题
- `category`: 文章分类
- `desc`: 文章描述
- `tag`: 文章标签
- `picture`: 文章缩略图`thumbnail`
- `date`: 发表日期

**项目目前为测试阶段，谨慎使用**
