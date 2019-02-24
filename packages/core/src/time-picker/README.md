TimePicker 时间选择器
===

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

```jsx
import { TimePicker } from 'uiw';
```

## 基础用法

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Row gutter={10} style={{ maxWidth: 360 }}>
    <Col fixed>
      <TimePicker />
    </Col>
  </Row>
)
```
<!--End-->

## 禁用

可以使用 `disabledHours` `disabledMinutes` `disabledSeconds` 禁用部分时间选择。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Row gutter={10} style={{ maxWidth: 360 }}>
    <Col fixed>
      <TimePicker
        disabledHours={(hour, date) => {
          if (hour < 3) {
            return true;
          }
        }}
      />
    </Col>
    <Col>
      <TimePicker disabled />
    </Col>
  </Row>
)
```
<!--End-->

## 不显示禁用

可以使用 `hideDisabled` 将禁用的部分时间隐藏。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Row gutter={10} style={{ maxWidth: 360 }}>
    <Col fixed>
      <TimePicker
        hideDisabled
        disabledHours={(hour, date) => {
          if (hour < 3) {
            return true;
          }
        }}
      />
    </Col>
  </Row>
)
```
<!--End-->

## 间隔时间

可以使用 `hideDisabled` 将禁用的部分时间隐藏。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Row gutter={10} style={{ maxWidth: 360 }}>
    <Col fixed>
      <TimePicker
        hideDisabled
        disabledMinutes={(minute, date) => {
          if (minute % 15 !== 0) {
            return true;
          }
        }}
        disabledSeconds={(second, date) => {
          if (second % 15 !== 0) {
            return true;
          }
        }}
      />
    </Col>
  </Row>
)
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 初始时间值 | Date | - |
| placeholder | 输入框提示文字 | String | - |
| format | 禁止选择部分秒选项 | Function | `HH:mm:ss` |
| disabled | 禁用全部操作 | Boolean | `false` |
| disabledHours | 禁止选择部分小时选项 | Function(hour, selectedDate) | - |
| disabledMinutes | 禁止选择部分分钟选项 | Function(minute, selectedDate) | - |
| disabledSeconds | 禁止选择部分秒选项 | Function(second, selectedDate) | - |
| hideDisabled | 不可选择的项隐藏 | Boolean | `false` |
| onChange | 时间发生变化的回调 | Function | - |

## Props.inputProps

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| inputProps | 将参数传递给 [`<Input>`](#/components/input) 组件 | `Object` | - |

## Props.popoverProps

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| popoverProps | 将参数传递给 [`<Popover>`](#/components/popover) 组件 | `Object` | - |