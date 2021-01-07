---
title: CSS两栏布局
category: css8
desc: 最简单、最全面的CSS两栏布局
tag:
  - css8
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/AF4A1FEB-0F0C-447D-8905-306FABA94833.png
date: "2020-11-12"
---

# CSS 两栏布局

> 代码中 div 都没有设置高度，使用时请自行设置高度

## 左列定宽，右列自适应

### 浮动+margin

```html
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
</div>
```

```css
.left {
  width: 300px;
  background-color: yellow;
  float: left;
}
.right {
  background-color: blue;
  margin-left: 300px;
}
```

如果是右列定宽，左列自适应,则同理

```css
.left {
  width: 300px;
  background-color: yellow;
  float: right;
}
.right {
  background-color: blue;
  margin-right: 300px;
}
```

### 浮动+BFC

```html
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
</div>
```

```css
.left {
  width: 300px;
  background-color: yellow;
  float: left;
}
.right {
  background-color: blue;
  /*触发BFC*/
  overflow: hidden;
}
```

如果是右列定宽，左列自适应,则同理

```css
.left {
  width: 300px;
  background-color: yellow;
  float: right;
}
.right {
  background-color: blue;
  /*触发BFC*/
  overflow: hidden;
}
```

### 定位

```html
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
</div>
```

```css
.container {
  position: relative;
}
.left {
  position: absolute;
  width: 300px;
  left: 0;
  background-color: yellow;
}
.right {
  margin-left: 300px;
  background-color: blue;
}
/*或者*/
.right {
  position: absolute;
  left: 300px;
  right: 0;
  background-color: blue;
}
```

如果是右列定宽，左列自适应,则同理

```css
.container {
  position: relative;
}
.left {
  position: absolute;
  width: 300px;
  right: 0;
  background-color: yellow;
}
.right {
  margin-right: 300px;
  background-color: blue;
}
/*或者*/
.right {
  position: absolute;
  right: 300px;
  left: 0;
  background-color: blue;
}
```

### flex

```html
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
</div>
```

```css
.container {
  display: flex;
}
.left {
  width: 300px;
  background-color: yellow;
}
.right {
  flex: 1;
  background-color: blue;
}
```

如果是右列定宽，左列自适应,则同理

```css
.container {
  display: flex;
}
.left {
  background-color: yellow;
  flex: 1;
}
.right {
  width: 300px;
  background-color: blue;
}
```

### 浮动+负外边距

```html
<div class="container">
  <div class="left"></div>
  <div class="right">
    <div class="content"></div>
  </div>
</div>
```

```css
.left {
  width: 300px;
  background-color: yellow;
  float: left;
  margin-right: -100%;
}
.right {
  width: 100%;
  float: left;
}
.content {
  margin-left: 300px;
  background-color: blue;
}
/*另一种方法*/
.left {
  float: left;
  width: 300px;
  /*定位使得.left在最上面*/
  position: relative;
  background-color: yellow;
}
.right {
  margin-left: 300px;
  background-color: blue;
}
.content {
  float: right;
  width: 100%;
  margin-left: -300px;
}
```

如果是右列定宽，左列自适应,则同理

```css
.left {
  width: 300px;
  background-color: yellow;
  float: right;
  margin-left: -100%;
}
.right {
  width: 100%;
  float: right;
}
.content {
  margin-right: 300px;
  background-color: blue;
}
/*另一种方法*/
.left {
  float: right;
  width: 300px;
  position: relative;
  background-color: yellow;
}
.content {
  float: left;
  position: relative;
}
.right {
  margin-right: 300px;
  background-color: blue;
}
```

### table 布局

```html
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
</div>
```

```css
.container {
  width: 100%;
  display: table;
  table-layout: fixed;
}
.left {
  display: table-cell;
  width: 300px;
  background-color: yellow;
}
.right {
  display: table-cell;
  background-color: blue;
}
```

如果是右列定宽，左列自适应,则同理

```css
.container {
  width: 100%;
  display: table;
  table-layout: fixed;
}
.left {
  display: table-cell;
  background-color: yellow;
}
.right {
  width: 300px;
  display: table-cell;
  background-color: blue;
}
```

## 左列不定宽，右列自适应

### 浮动+BFC

```html
<div class="container">
  <div class="left">
    不再设置宽度，由自身的内容撑起来
  </div>
  <div class="right"></div>
</div>
```

```css
.left {
  background-color: yellow;
  float: left;
}
.right {
  background-color: blue;
  /*触发BFC*/
  overflow: hidden;
}
```

如果是右列定宽，左列自适应,则同理

```css
.left {
  background-color: yellow;
  float: right;
}
.right {
  background-color: blue;
  /*触发BFC*/
  overflow: hidden;
}
```

### flex

```html
<div class="container">
  <div class="left">
    不再设置宽度，由自身的内容撑起来
  </div>
  <div class="right"></div>
</div>
```

```css
.container {
  display: flex;
}
.left {
  background-color: yellow;
}
.right {
  flex: 1;
  background-color: blue;
}
```

如果是右列定宽，左列自适应,则同理

```css
.container {
  display: flex;
}
.left {
  background-color: yellow;
  flex: 1;
}
.right {
  background-color: blue;
}
```
