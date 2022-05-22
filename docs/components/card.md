# Card
卡片组件

### 示例：
<card-test/>

### 代码：

```html
<template>
  <div>
    <Card imgSrc="python.png">
      <span>程序员理财课 spanython量化交易系统实战</span>
    </Card>
  </div>
</template>
```

## Attributes
|  参数  |  说明  |  类型  |  是否必要  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| width  | 卡片宽度 | Number |  false  | 0 |
| imgSrc  | 卡片图片地址 | String | true | - |
| imgHeight  | 卡片图片高度 | Number | false | 0 |
| content  | 卡片内容 | String/Slot | false | - |
| footer  | 卡片页脚 | Slot | - |