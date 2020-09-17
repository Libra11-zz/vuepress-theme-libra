#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 下面的<USERNAME>就是你github上的用户名，<REPO>就是你的仓库名
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 当然你也可以不选择gh-pages分支，选择主分支和任意分支都可以
git push -f git@github.com:Libra11/vuepress-theme-libra.git master:gh-pages

cd -