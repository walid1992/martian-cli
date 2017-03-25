[![npm](https://img.shields.io/npm/v/martian-cli.svg) ![npm](https://img.shields.io/npm/dm/martian-cli.svg)](https://www.npmjs.com/package/martian-cli)
[![GitHub release](https://img.shields.io/github/release/osmartian/martian-cli.svg)](https://github.com/osmartian/martian-cli/releases)  [![GitHub issues](https://img.shields.io/github/issues/osmartian/martian-cli.svg)](https://github.com/osmartian/martian-cli/issues)
![Node Version](https://img.shields.io/node/v/martian-cli.svg "Node Version")


# Martian Template

Frame template for [martian-cli](https://github.com/osmartian/martian-cli.git).


# Install

```
$ npm install -g martian-cli
```

# Usage 

## init weex

```
Usage: martian init:weex [projectName]
```

### 项目结构

```
weex-frame
├── android (android项目)
│       
├── ios （ios项目代码）
│
├── src （weex模块）
│      ├── api (api模块)
│      ├── components（组件模块） 
│      ├── constants（常量配置）   
│      ├── utils （工具模块）   
│      └── views（视图模块）  
│
└── dist （build输出模块）
       ├── weex (native使用jsbundle)
       └── web（web使用jsbundle） 
```

### 项目启动

```
./start
```

1、 android 启动

* 打开andorid studio
* File -> New -> Import Project -> {{name}}/android -> 启动

或者：

```
// 设置 android 从服务器端去读数据项目
npm run dev:android
// 设置 android 从本地去读数据项目（copy jsbundle 至assets）
npm run dev:android-local
```

2、 iOS 启动

* cd ios
* pod install (未安装pod，请先安装)
* open WeexFrame.xcworkspace

3、 h5 启动方式

* 打开 [http://localhost:12580/weex.html](http://localhost:12580/weex.html)