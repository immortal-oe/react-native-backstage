package com.backstage;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.app.Activity;

public class RNBackstageModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RNBackstageModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNBackstage";
    }

    @ReactMethod
    public void MoveTaskToBack(Callback onSuccess) {
        Activity activity = getReactApplicationContext().getCurrentActivity();
        boolean wasMoved = activity.moveTaskToBack(true);
        if (wasMoved) {
        onSuccess.invoke(true);
        } else {
        onSuccess.invoke(false);
        }
    }
}
