"auto";

// app.openAppSetting("com.tencent.mm")
// log("结束");
launchApp("微信");
sleep(5000);
// app.openAppSetting("com.tencent.tim");
// let setting=app.openAppSetting("com.eg.android.AlipayGphone");
// let setting=app.openAppSetting("com.tencent.mm");

//     log(setting);
// sleep(2500);
kill();
//此代码由飞云脚本圈整理提供（www.feiyunjs.com）
function kill() {
    let packageName = currentPackage();
    log(packageName);
    let setting=app.openAppSetting(packageName);
    log(setting);
    text(app.getAppName(packageName)).waitFor();  
    let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
    if (is_sure.enabled()) {
        log(app.getAppName(packageName) + "应用 enabled ");
        textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
        textMatches(/(.*确.*|.*定.*)/).findOne().click();
        log(app.getAppName(packageName) + "应用已被关闭");
        sleep(1000);
        back();
    } else {
        log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
        back();
    }
}

// exit-app.js

// 执行退出当前应用的动作
// require('./exit-app-action').exitApp();