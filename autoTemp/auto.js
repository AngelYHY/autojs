"auto";

auto.waitFor();
var Maid = require("./MyMaid.js");
var maid = new Maid();

// log("didi")
// app.launchApp("Soul")
// sleep(5000);
// app.launchApp("微信")
// setScreenMetrics(1080,1920);

// click(100,150);

// sleep(1000);

//  var name =getPackageName("支付宝");

// alert("获取 app 名称", name);
// log(name);
// app.openAppSetting("com.tencent.mm");

// app.launch(name);
// var name=device.width+device.height;
// // name+=device.height;
// alert(name, name);
// console.log('count:', name);
// var width=device.width;



// const count = 5;
// console.log('count: %d', count);

// notifications()


// if (!requestScreenCapture(false)) {
//     toastLog("请求截图失败");
//     exit();
// }else{
//     console.log("请求截图成功");
// }

// app.launchApp("支付宝")
// sleep(2000);
// // threads.start(function () {
// //     var beginBtn;
// //     if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
// //         log("立即开始");
// //         beginBtn.click();
// //     }
// // });
// log("执行")
// if (!requestScreenCapture(false)) {
//     log("请求截图失败");
//     exit();
// } else {
//     log("请求权限");
//     //截图
//     var im = captureScreen();
//     var path = "/sdcard/照片/screenshot.png";
//     //保存图片
//     im.saveTo(path);
//     //把图片加入相册
//     media.scanFile(path);
//     log("请求截图成功");
// }



log("请求截图")

// 截图权限申请
threads.start(function () {
    var beginBtn;
    if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
        beginBtn.click();
    }
});
// sleep(1000);

if (!requestScreenCapture(false)) {
    log("请求截图失败");
    exit();
} else {
    log("成功")
    app.launchApp("支付宝")
    // var btn=id("collect_layout").findOne(10000);
    // maid.clickCenter(btn);
    // var btn = text("收钱").findOne(10000);
    sleep(2000)
    var btn = text("收钱").findOne(10000);
    log(btn)
    log(maid.clickCenter(btn))
    sleep(2000)
    var im = captureScreen();
    var path = "/sdcard/照片/screenshot.png";
    try {
        //保存图片
        im.saveTo(path);
        //把图片加入相册
        media.scanFile(path);
        log("加入成功")
    } catch (e) {
        log("异常" + e);
        kill();
    }
}
threads.shutDownAll();//停止所有通过threads.start()启动的子线程



// app.launchApp("微信");
// sleep(5000);
// // 截图权限申请
// threads.start(function () {
//     var beginBtn;
//     if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
//         console.log("立即开始");
//         beginBtn.click();
//     }
// });
// console.log("sleep 前");
// sleep(1000);
// console.log("sleep 后");
// if (!requestScreenCapture(false)) {
//     toastLog("请求截图失败");
//     exit();
// } else {
//     console.log("请求权限");
//     //截图
//     var im = captureScreen();
//     var path = "/sdcard/照片/screenshot.png";
//     try{
//   //保存图片
//   im.saveTo(path);
//   //把图片加入相册
//   media.scanFile(path);
//     }catch(e){
//         log("异常"+e);
//         kill();
//     }

//     console.log("请求截图结束了");
// }
// threads.shutDownAll();//停止所有通过threads.start()启动的子线程

// function kill() {
//     let packageName = "com.tencent.mm";
//     log(packageName);
//     let setting=app.openAppSetting(packageName);
//     log(setting);
//     text(app.getAppName(packageName)).waitFor();  
//     let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
//     if (is_sure.enabled()) {
//         log(app.getAppName(packageName) + "应用 enabled ");
//         textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
//         textMatches(/(.*确.*|.*定.*)/).findOne().click();
//         log(app.getAppName(packageName) + "应用已被关闭");
//         sleep(1000);
//         back();
//     } else {
//         log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
//         back();
//     }
// }