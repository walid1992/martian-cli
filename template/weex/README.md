# {{ name }}

> {{ description }}


## 项目启动

1. cd {{name}}
2. 安装weexpack

```
npm install -g weexpack
```

3. npm install
4. 执行 ./start
5. 设置调试环境

```
// 调试本地serve
npm run init serve
// 调试assets或者jsbundle文件
npm run init local
```

### android 启动

1. 打开andorid studio
2. File -> New -> Import Project -> {{name}}/platforms/android -> 启动

或者：

```
weexpack run android
```

### iOS 启动

1. cd {{name}}/platforms/android
2. pod install (未安装pod，请先安装)
3. open WeexFrame.xcworkspace

或者：

```
weexpack run ios
```

### h5 启动方式

打开 [http://localhost:8080/web/index.html?page=./dist/web/App.js](http://localhost:8080/web/index.html?page=./dist/web/App.js)

或者：

```
weexpack run web
```