package com.siyuan.index.index.https;

public interface WXRequestListener {

    void onSuccess(WXHttpTask task);

    void onError(WXHttpTask task);
}
