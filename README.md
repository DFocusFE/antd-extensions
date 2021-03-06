# antd-extensions

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
![][david-url]
![][dt-url]
![][license-url]

## Test

```bash
npm test
```

采用[Jest](https://jestjs.io/en/) + [Enzyme](https://airbnb.io/enzyme/)进行单元测试

目前单元测试还在补充，望有志之士一起加入。
单测在组件目录下的**tests**中，写单测时请尽量保证覆盖率 > 95% 并考虑边界情况，如果不能做到测试用例全覆盖，优先覆盖底层逻辑。

## Install

```bash
npm install --save antd-extensions
```

[ant-design](https://ant.design/)的 DFocus 扩展组件库，帮助开发者选择需要的组件，并迅速进入角色。

完整 API 使用文档，请[这边走](https://DFocusGroup.github.io/antd-extensions)

## Usage

```jsx
// 日期区间选择器
import React, { Component } from 'react'
import { TimeRangePicker } from 'antd-extensions'

class Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: {
        type: 'CUSTOMIZE',
        ranges: [1533081600000, 1534377600000]
      }
    }
  }

  _handleChange = value => {
    console.log(`You're selection is ${JSON.stringify(value)}`)
    this.setState({
      value
    })
  }

  render() {
    return (
      <TimeRangePicker
        value={this.state.value}
        onChange={this._handleChange}
        labels={{
          BTN_ALL: 'All',
          BTN_LAST_WEEK: 'Last week',
          BTN_LAST_MONTH: 'Last month',
          BTN_CUSTOMIZE: 'Customize',
          PLACEHOLDER_START: 'Start',
          PLACEHOLDER_END: 'End'
        }}
        disabledDate={current =>
          current &&
          current >
            moment()
              .endOf('day')
              .subtract(1, 'days')
        }
      />
    )
  }
}
```

## LICENSE

[MIT License](https://raw.githubusercontent.com/DFocusGroup/antd-extensions/master/LICENSE)

[npm-url]: https://npmjs.org/package/antd-extensions
[npm-image]: https://badge.fury.io/js/antd-extensions.png
[david-url]: https://david-dm.org/DFocusGroup/antd-extensions.png
[travis-image]: https://api.travis-ci.com/DFocusGroup/antd-extensions.svg?branch=master
[travis-url]: https://travis-ci.com/DFocusGroup/antd-extensions
[coverage-image]: https://coveralls.io/repos/github/DFocusGroup/antd-extensions/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/DFocusGroup/antd-extensions
[dt-url]: https://img.shields.io/npm/dt/antd-extensions.svg
[license-url]: https://img.shields.io/npm/l/antd-extensions.svg
