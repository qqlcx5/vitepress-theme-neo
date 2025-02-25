#!/bin/bash

# 设置变量
BRANCH="main"
DEPLOY_BRANCH="main"
BUILD_DIR="docs/.vitepress/dist"
# git clone --depth=1 --branch=$BRANCH git@github.com:qqlcx5/vitepress-dedao.git .

# pnpm run docs:build
touch $BUILD_DIR/.nojekyll
touch $BUILD_DIR/CNAME
echo "dedao.feyoudao.cn" > $BUILD_DIR/CNAME

# 6. 部署文档
cd $BUILD_DIR
git init
git remote add origin https://github.com/qqlcx5/vitepress-dedao-docs.git
git checkout -b $DEPLOY_BRANCH
git add .
git commit -m"Deploy docs"
git push -f origin $DEPLOY_BRANCH
