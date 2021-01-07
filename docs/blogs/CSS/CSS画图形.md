---
title: CSS画图形
category: cssdsfjsldfjsldf
desc: CSS画图形
tag:
  - csssdfkjsdljfsldjf
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/CSS%E7%94%BB%E5%9B%BE%E5%BD%A2.png
date: "2020-11-27"
---

关于 `CSS` 的面试中，我们经常遇到面试官问我们如何使用 `CSS` 来画圆形和三角形，今天这篇文章就给大家简单介绍一下画基本图形的一些方法。

## 一般画法

### 圆形

最常用的就是使用 `border-radius` 来实现，来看下面的 `DOM` 结构：

```html
<div class="circle"></div>
```

```css
.circle {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

我们定义了一个 100\*100 的 `div`, 背景色为红色，如果我们想要它变成一个圆形，我们只需要使用 `border-radius` 属性即可，而这个属性的值可以是具体数值，也可以是百分比，但要保证一点，这个数值的大小要大于或者等于 `div` 宽或者高的一半，比如：

```css
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: red;
}
```

![circle]()

> 上面的值取 50`%` 100`%` 100`px` 等等都是可以的，只要满足条件即可

### 三角形

三角形并不像圆形那样可以通过一个属性来实现，但可以通过 `border` 一种取巧的方式来实现，先上代码：

```html
<div class="triangle"></div>
```

```css
.triangle {
  width: 0;
  border-top: 50px solid red;
  border-bottom: 50px solid blue;
  border-left: 50px solid green;
  border-right: 50px solid yellow;
}
```

上面的代码中，我们分别给 `div` 定义了上下左右各 50`px` 的 `border`,并给定了不同的颜色，在浏览器中，我们观察到如下图所示:

![triangle-div]()

四个边框以三角形的形式组成了整个 `div`,那么我们思考，如果我们把其他边框颜色变成透明，只留一个边框，不就可以实现三角形的效果了吗？于是修改代码：

```css
.triangle {
  width: 0;
  border-top: 50px solid red;
  border-bottom: 50px solid transparent;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}
```

最终如下所示：

![triangle]()

## 通过 `clip-path` 来实现

### 圆形

通过 `clip-path` 我们可以非常简单的实现一个圆形，只需要添加一行代码 `clip-path: circle(50%)`即可， 代码如下：

```html
<div class="circle"></div>
```

```css
.circle {
  width: 100px;
  height: 100px;
  clip-path: circle(50%);
  background-color: red;
}
```

同样也可以达到圆形的效果

![circle]()

### 三角形

`clip-path`除了 `circle` 这个取值外，还有一个叫 `polygon` 的取值，这个值得作用是我们通过定义多个点，最后再闭合，可以形成任意形状的图形，而这些点的取值可以是固定值，也可以是百分比，点的数量也是不固定的，我们看代码：

```html
<div class="triangle"></div>
```

```css
.triangle {
  width: 100px;
  height: 100px;
  clip-path: polygon(0% 0%, 100% 0%, 50% 50%);
  background-color: red;
}
```

![triangle]()

上面我们就是通过百分比，分别定义了三个点，这三个点闭合后就形成了我们最终要实现的三角形，通过这个值，我们可以定义我们任何想要实现的图形。
