# {{ name }}

> {{ description }}


## 项目启动

```
./start
```

### android 启动

1. 打开andorid studio
2. File -> New -> Import Project -> {{name}}/android -> 启动

或者：

```
// 设置 android 从服务器端去读数据项目
npm run dev:android
// 设置 android 从本地去读数据项目（copy jsbundle 至assets）
npm run dev:android-local
```

### iOS 启动

1. cd ios
2. pod install (未安装pod，请先安装)
3. open WeexFrame.xcworkspace

### h5 启动方式

 打开 [http://localhost:12580/weex.html](http://localhost:12580/weex.html)