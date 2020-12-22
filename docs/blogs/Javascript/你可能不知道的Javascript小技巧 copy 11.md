---
title: 你可能不知道的Javascript小技巧第二期
category: javascript
desc: 你可能不知道的Javascript小技巧第二期
tag:
  - javascript
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/Javascript%E5%B0%8F%E6%8A%80%E5%B7%A7.png
date: "2020-12-12"
---

## 函数必传参数

我们都知道 `Javascript` 是没有必传参数这一选项的，那么，有什么方式可以实现类似的效果呢？答案是我们可以通过 `ES6` 的参数默认值来实现。我们看下面的代码：

```javascript
let required = () => {
  throw new Error("param is required");
};

let test = (param = required()) => {
  console.log(param);
};
```

我们在代码中定义了一个名为 `required` 的函数，这个函数唯一的作用就是抛出一个错误，要实现必传参数，我们只需要将这个函数赋值给那个必传参数即可。这样，如果我们调用这个函数，但是没有传递参数的话，就会抛出错误：

```javascript
let required = () => {
  throw new Error("param is required");
};

let test = (param = required()) => {
  console.log(param);
};
// 没传递参数，param默认就会抛出一个错误，就会报错
test();
```

![required](https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/required%20param.png)

## 数字千分位格式化

什么是数字千分位格式化呢，就是我们经常看到的，数字每隔三位就要加一个逗号来分割，那么有没有什么简单的方法来实现呢？我们可以通过 `num.toLocaleString("en-US")`来实现，使用也很简单，如下代码所示：

```javascript
let num = 1234;
let formatNum = num.toLocaleString("en-US");
console.log(formatNum); // 1,234
```

我们把 `num` 换成小数看看

```javascript
let num = 12345.6789;
let formatNum = num.toLocaleString("en-US");
console.log(formatNum); // 12，345.679
```

可以发现，并没有正常输出，小数后面只输出了三位，最后还四舍五入了，这是因为这个函数有一个属性 `minimumFractionDigits`, 它默认取 `minimumfractiondigits` 和 3 中大的那一个值，这里我们没有设置，就默认取 3，所以如果我们想取小数点后五位，就需要将它的值设置为 5

```javascript
let num = 12345.6789;
let formatNum = num.toLocaleString("en-US", {
  minimumFractionDigits: 5,
});
console.log(formatNum); // 12,345.67890
```

## 数组清洗

数组清洗，要清洗什么呢？这里是把像 `false`, `undefined`, `null`和 0 这样的值从数组中移除，更清晰一些就是把 `Boolean(value)===false` 的 `value` 值从数组中移除。只需要使用到数组的 `filter` 方法即可。

```javascript
let arr = [1, 4, "Libra", "7", false, undefined, null, 0];
let res = arr.filter(Boolean);
console.log(res); // [1, 4, "Libra", "7"]
```

## 十进制与二进制互转

### 十进制转二进制

我们可以通过 `toString()` 方法将十进制的数字转换成二进制，参数传 2 就可以了

```javascript
let num = 10;
// 十进制转二进制
console.log(num.toString(2)); // 1010
```

> 同样我们也可以转换成八进制以及十六进制，只需要传入 8 和 16 即可

### 二进制转十进制

我们可以通过 `parseInt()` 方法将二进制转换为十进制，这个方法接受两个参数，第一个参数就是我们要转换的数值，第二个参数就是 2-36 之间的整数，表示被解析字符串的基数。

```javascript
let num = 1010101;
// 二进制转十进制
console.log(parseInt(num, 2)); // 85
```

> 如果我们不传第二个参数，默认就是十进制，但是如果我们在数字前面加上 0x，那么默认就是十六进制了。

## 伪数组转数组

在介绍伪数组转数组转数组的方法之前呢，首先简单介绍一下伪数组，下面这两个是 `Javascript` 中常见的伪数组：

- `arguments`
- `DOM`对象列表

那么伪数组和数组之间有什么区别呢？

我们都知道，数组是有长度的，也就是有 `length` 这个属性，另外，数组还内置了很多方法供我们调用，比如 `includes`、`findIndex` 等等，而伪数组其实和数组一样也是有 `length` 属性的，但是他却没有数组的方法。比如看下面的代码

```javascript
let arr = ["Libra", "Tom", "John"];
console.log(arr);
```

![数组](https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/%E6%95%B0%E7%BB%84.png)

```html
<ul class="list">
  <li></li>
  <li></li>
  <li></li>
</ul>
```

```javascript
let li = document.querySelectorAll(".list > li");
console.log(li);
```

![伪数组](https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/%E4%BC%AA%E6%95%B0%E7%BB%84.png)

从这两段代码运行结果来看，可以很容易看到上面所说的两者之间的区别，那么有什么方法可以将伪数组转为数组呢，因为毕竟我们有时候得到了伪数组但却要使用数组的一些方法，我们可以通过一下两种方法来实现：

```javascript
let li = document.querySelectorAll('.list > li’)
let res = Array.prototype.slice.call(li)
console.log(res)
```

```javascript
let li = document.querySelectorAll(".list > li");
let res = Array.from(li);
console.log(res);
```

![伪数组转数组](https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/%E4%BC%AA%E6%95%B0%E7%BB%84%E8%BD%AC%E6%95%B0%E7%BB%84.png)

可以看到，最终伪数组都拥有了数组的方法，由此实现了伪数组转换成数组功能。
