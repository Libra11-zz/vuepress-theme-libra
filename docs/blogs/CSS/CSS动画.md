---
title: CSS动画
category: csssdljfslf
desc: CSS动画详解
tag:
  - cssskdjfskdfjsld
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/CSS%E5%8A%A8%E7%94%BB.png
date: "2020-11-24"
---

`CSS` 动画已经出现好久了，但是至今对它掌握的很熟练的朋友并不多，可能是工作用不到，也肯能是兼容性等原因，但是作为一个前端程序员，个人认为动画这方面的东西还是要掌握的，因为随着老旧浏览器的逐渐淘汰兼容性的问题，我们已经可以慢慢忽略，所以这时，让我们的网页‘动起来’似乎变成一个异常有意思的事情了。

## 简介

`CSS`动画，也称**关键帧动画**。通过 `@keyframes` 来定义关键帧。
在视频领域，电影、电视、数字视频等可视为随时间连续变换的许多张画面，其中**帧**是指每一张画面。
在 `CSS` 动画中，我们不需要定义每一帧的动画，只需要定义关键帧的动画，这也是为什么称之为关键帧动画的原因。

## 定义关键帧

上面说过，我们通过 `@keyframes` 来定义关键帧，它的基本结构如下：

```css
@keyframes 关键帧名称 {
  from {
  }
  to {
  }
}
/*或者*/
@keyframes 关键帧名称 {
  0% {
  }
  100% {
  }
}
```

`from` 表示最开始的那一帧，`to` 表示结束时的那一帧。
`CSS` 动画用百分比来刻画一个动画周期，`from` 其实是 0% 的别称，`to` 是 100% 的别称

比如下面这个简单的动画：

```css
@keyframes move {
  from {
    transform: translate(0px);
  }
  to {
    transform: translate(100px);
  }
}
```

我们定义了一个名为 `move` 的动画，这个动画的效果就是将某个元素从横轴 0px 移动到横轴 100px 的位置。

## 使用动画 `animation`

我们已经定义好了关键帧动画，那么我们如何使用它呢，我们如何将它作用在某个具体的元素上呢？那就要使用到 `animation` 这个属性了，在使用它之前，我们先简单定义一个 `DOM` 结构：

```html
<div class="ball"></div>
```

然后定义如下 `CSS`

```css
.ball {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: red;
}
@keyframes move {
  from {
    transform: translate(0px);
  }
  to {
    transform: translate(100px);
  }
}
```

上面我们定义了一个 300\*300 的圆球，并定义了一个 `move` 动画，要想使用这个动画，我们只需要在 `ball` 里加上 `animation` 属性即可

```css
.ball {
  ... animation: move 2s;
}
```

最终效果如下图所示：
![animation-move](https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-move.gif)

而上面的代码是和下面这段代码等效的

```css
.ball {
  ... animation: move 2s;
}
/*等效于*/
.ball {
  ... animation-name: move;
  animation-duration: 2s;
}
```

通过 `animation-name` 来指定动画使用的关键帧，这个是必须的,通过`animation-duration` 指定了动画运行的时间为 2`s`

仔细观察的话，我们会发现，小球的运动并不是匀速的，这就引出了第三个属性 `animation-timing-function`, 默认值是 `ease`，即先快后慢。它有许多预设值：`linear`、`ease`、`ease-in`、`ease-out`、`ease-in-out`。这些值其实都是 `cubic-bezier(n,n,n,n)` 的特例。它们被称为贝塞尔曲线,所以我们可以通过贝塞尔曲线自定义我们的运动方式。如果我们想要小球匀速运动，那么只需要使用 `linear` 这个值即可，代码如下所示：

```css
.ball {
  ... animation: move 2s linear;
}
/*等效于*/
.ball {
  ... animation-name: move;
  animation-duration: 2s;
  animation-timing-function: linear;
}
```

通过上面的设置，我们就可以发现，小球此时就是匀速运动了：

![animation-move-linear](https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-move-linear.gif)

> 这里就不放 `gif` 图了，因为 `gif` 会重复播放，导致和上面的图片没啥区别,大家明白原理就好。

说外上面的属性，我们接着来引出下一个属性，如果我们想要动画延迟加载，就需要用到这个属性了： `animation-delay`,它的值就是我们要延迟的时间，

> 延迟时间可以是负值，如果设置延迟为 -1s。动画会从 50% 加载到 100%。

```css
.ball {
  ... animation: move 2s linear 3s;
}
/*等效于*/
.ball {
  ... animation-name: move;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 3s;
}
```

上面定义了动画延迟 3`s` 执行：

![animation-delay](https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-delay.gif)

接下来我们来看下一个属性 `animation-iteration-count`, 这个属性是控制动画的执行次数的，他有两个取值：

- `n`: 一个数字，定义应该播放多少次动画
- `infinite`: 指定动画应该播放无限次（永远）

这个很好理解，代码如下：

```css
.ball {
  ... animation: move 2s linear 3s infinite;
}
/*等效于*/
.ball {
  ... animation-name: move;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 3s;
  animation-iteration-count: infinite;
}
```

> 上面的代码会使动画无限次的播放

接下来，我们来看下一个属性 `animation-direction`, 这个属性定义了是否循环交替反向播放动画，它有如下属性值：

- `normal`:默认值。动画按正常播放
- `reverse`: 动画反向播放
- `alternate`: 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
- `alternate-reverse`: 动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。

所以如果我们想要动画反向播放，加入如下代码即可：

```css
.ball {
  ... animation: move 2s linear 3s infinite reverse;
}
/*等效于*/
.ball {
  ... animation-name: move;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
}
```

效果如下

![animation-direction](https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/animation-reverse.gif)

然后我们再观察，小球从开始运动到结束位置之后，又立刻回到了初始位置，那么有没有办法让小球停止在结束位置或者别的其他的状态呢？

这就引出了我们的下一个属性 `animation-fill-mode`,它用于定义动画开始前或者动画结束后的元素所处的状态。它有四个取值：

- `none`: 默认值。
- `forwards`：表示动画完成后，元素状态保持为最后一帧的状态。
- `backwards`：表示有动画延迟时，动画开始前，元素状态保持为第一帧的状态。
- `both`：表示上述二者效果都有。

所以如果想让小球停止在结束位置，我们只需要将这个属性设置为 `forwards` 即可：

```css
.ball {
  ... animation: move 2s linear 3s infinite reverse forwards;
}
/*等效于*/
.ball {
  ... animation-name: move;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-fill-mode: forwards;
}
```

接下来我们来看最后一个属性 `animation-play-state`, 这个属性的作用是控制动画的播放和暂停的，所以它有两个值：

- `paused`: 指定暂停动画
- `running`: 指定正在运行的动画（默认值）

至此，`animation`的所有属性就介绍完成了，另外值得一提的是，这些属性是支持多个值的，只需要通过逗号进行隔开即可完成多段动画。
