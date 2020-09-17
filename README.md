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

在`docs/blogs`里面添加博客文章（目前里面有一些测试文章），文章为`markdown`格式,文章以以下内容开头

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

# 部署（仅为 github Page 上的部署）

1. 修改 `config.js`里的`base`的值，如果发布到 `https://<USERNAME>.github.io`，可以不设置`base`的值，以为其默认值为`/`,# 如果发布到 `https://<USERNAME>.github.io/<REPO>`,则需要将`base`得值设为`/REPO/`
2. 在`github`上建一个新的`repo`，名称为下面`deplohy.sh`里配置的`repo`名称
3. 项目根目录下有一个`deploy.sh`文件，复制以下配置，根据实际情况选择对应选项

```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件(有yarn使用yarn，没有也可以使用npm)
# npm run build
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

配置完成之后直接运行`deploy.sh`,会将打包好的代码上传到你的`repo`仓库的`gh-pages`分支 4.进入`github`的`repo`仓库，点击`Settings`,下拉找到`GitHub Pages`选项，`Branch`选择`gh-pages`，目录选择根目录`/root`,然后点击`save`，`github`将自动为你生成链接，访问链接即可访问到你的博客。
![image](https://libra321.oss-cn-huhehaote.aliyuncs.com/github/84CBEB9D-AF4D-4E20-ACC2-12DD6CB5332F.png)

**项目目前为测试阶段，谨慎使用  😎**
