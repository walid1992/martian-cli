package com.siyuan.index.ui.page;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.siyuan.index.R;
import com.siyuan.index.index.constants.Constants;
import com.taobao.index.WXSDKInstance;
import com.taobao.index.common.WXRenderStrategy;
import com.taobao.index.utils.WXFileUtils;

import java.util.HashMap;
import java.util.Map;

/**
 * @Author : walid
 * @Data : 2017-02-20  15:27
 * @Describe : Weex 入口
 */

public class WxIndexActivity extends WXBaseActivity {

    private WXSDKInstance mWXSDKInstance;
    private FrameLayout mContainer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_wxindex);
        mContainer = (FrameLayout) findViewById(R.id.container);
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
        Map<String, Object> options = new HashMap<>();
        // 判断加载本地还是serve
        String indexUrl = Constants.INDEX_URL;
        if (indexUrl.startsWith("file://assets/")) {
            options.put(WXSDKInstance.BUNDLE_URL, indexUrl);
            String jsPath = indexUrl.replace("file://assets/", "");
            Log.e("TAG", jsPath);
            mWXSDKInstance.render("WxIndex", WXFileUtils.loadAsset(jsPath, WxIndexActivity.this), options, null, WXRenderStrategy.APPEND_ASYNC);
        } else {
            options.put(WXSDKInstance.BUNDLE_URL, indexUrl);
            mWXSDKInstance.renderByUrl("WxIndex", indexUrl, options, null, WXRenderStrategy.APPEND_ASYNC);
        }
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStart();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityDestroy();
        }
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        if (view.getParent() != null) {
            ((ViewGroup) view.getParent()).removeView(view);
        }
        mContainer.addView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {

    }
}
