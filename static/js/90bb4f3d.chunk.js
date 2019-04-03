(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{694:function(n,e){n.exports='Loader 加载器\n===\n\n用于页面和区块的加载中状态。\n\n```jsx\nimport { Loader } from \'uiw\';\n```\n\n### 基础实例\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Loader } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Loader size="small" />\n    <Loader />\n    <Loader size="large" />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n\n### 警告提示中加载\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Loader, Row, Col, Message, Icon } from \'uiw\';\n\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      loading:true\n    }\n  }\n  render() {\n    return (\n      <div>\n        <Row gutter={10}>\n          <Col>\n            <Button\n              style={{ marginBottom: 10 }}\n              size="small"\n              onClick={()=>{\n                this.setState({\n                  loading: !this.state.loading,\n                });\n              }}\n            >点击切换加载状态</Button>\n          </Col>\n        </Row>\n        <Row gutter={10}>\n          <Col fixed>\n            <Loader loading={this.state.loading}>\n              <Message\n                type="success"\n                title="成功提示标题"\n                description={\n                  <span>\n                    <Icon type="uiw" verticalAlign="baseline" style={{ fill: \'#009688\' }} />\n                    这里是成功提示详情描述。\n                  </span>\n                } />\n            </Loader>\n          </Col>\n          <Col fixed>\n            <Loader loading={this.state.loading}>\n              <Message type="warning" title="成功提示标题" description="这里是成功提示详情描述。" />\n            </Loader>\n          </Col>\n        </Row>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 卡片加载中\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Loader, Card, Col, Row } from \'uiw\';\n\nReactDOM.render(\n  <Row gutter={10}>\n    <Col fixed>\n      <Card title="图标与文字一行显示" extra={<a href="#">更多</a>} style={{ minWidth: 230 }}>\n        <Loader color="red" tip="加载中..." style={{ width: \'100%\' }}>\n          <div>\n            卡片内容<br/>\n            卡片内容<br/>\n            卡片内容<br/>\n          </div>\n        </Loader>\n      </Card>\n    </Col>\n    <Col fixed>\n      <Card title="图标与文字垂直显示" extra={<a href="#">更多</a>} style={{ minWidth: 230 }}>\n        <Loader tip="loading..." vertical style={{ width: \'100%\' }}>\n          <div>\n            卡片内容<br/>\n            卡片内容<br/>\n            卡片内容<br/>\n          </div>\n        </Loader>\n      </Card>\n    </Col>\n    <Col fixed>\n      <Card title="自定义背景颜色" extra={<a href="#">更多</a>} style={{ minWidth: 230 }}>\n        <Loader bgColor="rgba(0, 0, 0, 0.4)" color="#fff" tip="loading..." vertical style={{ width: \'100%\' }}>\n          <div>\n            卡片内容<br/>\n            卡片内容<br/>\n            卡片内容<br/>\n          </div>\n        </Loader>\n      </Card>\n    </Col>\n  </Row>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 自定义加载图标动画\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Loader, Card, Icon } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Card title="Card标题" extra={<a href="#">更多</a>} style={{ width: 300 }}>\n      <Loader\n        tip="加载中..."\n        color="red"\n        indicator={<Icon type="loading" spin={true} style={{ verticalAlign: \'text-top\' }} />}\n        style={{ width: \'100%\' }}\n      >\n        <div>\n          卡片内容<br/>\n          卡片内容<br/>\n          卡片内容<br/>\n        </div>\n      </Loader>\n    </Card>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 整页加载\n\n页面数据加载时显示。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Loader, Icon, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      fullscreen: false,\n    }\n  }\n  render() {\n    return (\n      <div>\n        <Button\n          style={{ marginBottom: 10 }}\n          type="primary"\n          onClick={()=>{\n            this.setState({\n              fullscreen: !this.state.fullscreen,\n            }, () => {\n              setTimeout(() => {\n                this.setState({\n                  fullscreen: !this.state.fullscreen,\n                })\n              }, 3000);\n            });\n          }}\n        >\n          显示整页加载，3 秒后消失\n        </Button>\n        {this.state.fullscreen && (\n          <Loader\n            tip="加载中..."\n            size="large"\n            bgColor="rgba(255, 255, 255, 0.9)"\n            fullscreen={this.state.fullscreen}\n          />\n        )}\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| size | 尺寸 | Enum{`small`, `default`, `large`} | `default` |\n| loading | 是否旋转 | Boolean | `true` |\n| indicator | 加载指示符，可以加载一个 Icon 动画 | ReactNode | - |\n| tip | 当作为包裹元素时，可以自定义描述文案 | String | - |\n| color | 设置图标与文字的颜色 | String | - |\n| bgColor | 自定义背景颜色 | String | - |\n| vertical | 图标与文字垂直显示 | Boolean | - |\n| fullscreen | 是否全屏显示 | Boolean | `false` |\n\n'}}]);