"auto";

// var name = getPackageName("银联商务");
// log(name);




var name = "com.chinaums.onlineservice";



var res=launch(name);
log(res);
sleep(5000);
// 截图权限申请
threads.start(function () {
    var beginBtn;
    if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
        console.log("立即开始");
        beginBtn.click();
    }
});
console.log("sleep 前");
sleep(1000);
console.log("sleep 后");
if (!requestScreenCapture(false)) {
    toastLog("请求截图失败");
    exit();
} else {
    console.log("请求权限");
    //截图
    var im = captureScreen();
    var path = "/sdcard/照片/screenshot.png";
    try {
        //保存图片
        im.saveTo(path);
        //把图片加入相册
        media.scanFile(path);
    } catch (e) {
        log("异常" + e);
        kill();
    }

    console.log("请求截图结束了");
}
threads.shutDownAll();//停止所有通过 threads.start()启动的子线程

function kill() {
    let packageName = name;
    log(packageName);
    let setting = app.openAppSetting(packageName);
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