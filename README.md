# heart-shaped fireworks

需要在 html 中引入 style.css 和 animate.js

```js
 new CreatePattern(页面中的 DOM, X 坐标, Y 坐标, [配置])
```

```ts
type config = {
    type: string // 创建的 class属性名
    quantity: number // 生成的数量 默认10
    distanceMax: number // 移动的最大距离px
    distanceMin: number // 移动最小距离px
    palette: string[] // 创建的元素背景颜色 使用十六进制数值 不加#
}
```
