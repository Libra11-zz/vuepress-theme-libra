---
title: CSS三栏布局
category: css7
desc: 最简单、最全面的CSS三栏布局
tag:
  - css7
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/34C75FB4-EF1A-4D2F-937A-4B6A66F231D5.png
date: "2020-11-12"
---

# CSS 三栏布局

> 代码中 div 都没有设置高度，使用时请自行设置高度

## 浮动+margin

```html
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
  <div class="main"></div>
</div>
```

```css
.left {
  float: left;
  width: 200px;
  background-color: red;
}
.right {
  width: 200px;
  background-color: blue;
  float: right;
}
.main {
  margin-left: 200px;
  margin-right: 200px;
  background-color: green;
}
```

## 浮动+BFC

```html
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
  <div class="main"></div>
</div>
```

```css
.left {
  float: left;
  width: 200px;
  background-color: red;
}
.right {
  width: 200px;
  background-color: blue;
  float: right;
}
.main {
  overflow: hidden;
  background-color: green;
}
```

## flex

```html
<div class="container">
  <div class="left"></div>
  <div class="main"></div>
  <div class="right"></div>
</div>
```

```css
.container {
  display: flex;
}
.main {
  flex: 1;
  background-color: red;
}
.left {
  width: 200px;
  background-color: blue;
}
.right {
  width: 200px;
  background-color: green;
}
```

## table

```html
<div class="container">
  <div class="left"></div>
  <div class="main"></div>
  <div class="right"></div>
</div>
```

```css
.container {
  display: table;
}
.left {
  width: 200px;
  display: table-cell;
  background-color: red;
}
.main {
  display: table-cell;
  background-color: blue;
}
.right {
  display: table-cell;
  width: 200px;
  background-color: green;
}
```

## 定位

```html
<div class="container">
  <div class="left"></div>
  <div class="main"></div>
  <div class="right"></div>
</div>
```

```css
.container {
  position: relative;
}
.main {
  margin: 0 200px;
  background-color: green;
}
.left {
  position: absolute;
  width: 200px;
  left: 0;
  background-color: red;
}
.right {
  position: absolute;
  width: 200px;
  background-color: blue;
  right: 0;
}
```

## 双飞翼布局

```html
<div class="content">
  <div class="main"></div>
</div>
<div class="left"></div>
<div class="right"></div>
```

```css
.content {
  float: left;
  width: 100%;
}
.main {
  margin-left: 200px;
  margin-right: 200px;
  background-color: green;
}
.left {
  float: left;
  width: 200px;
  margin-left: -100%;
  background-color: red;
}
.right {
  width: 200px;
  float: right;
  margin-left: -200px;
  background-color: blue;
}
```

## 圣杯布局

```html
<div class="container">
  <div class="main"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>
```

```css
.container {
  margin-left: 200px;
  margin-right: 200px;
}
.main {
  float: left;
  width: 100%;
  background-color: red;
}
.left {
  float: left;
  width: 200px;
  margin-left: -100%;
  position: relative;
  left: -200px;
  background-color: blue;
}
.right {
  float: left;
  width: 200px;
  margin-left: -200px;
  position: relative;
  right: -200px;
  background-color: green;
}
```
