package com.siyuan.index.app;


import android.app.Application;

import com.siyuan.index.index.ImageAdapter;
import com.taobao.index.InitConfig;
import com.taobao.index.WXSDKEngine;

/**
 * @Author : Walid
 * @Data : 2017-2-20  15:01
 * @Describe :
 */
public class App extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this, config);
    }
}

