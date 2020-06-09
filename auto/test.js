"auto";
let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, restartThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");
var Maid = require("./MyMaid.js");
var maid = new Maid();


// while(1){
//     sleep(2000);
//     waitForAndClickAction(id("btnClose"), 2e3, 80)
// }

let b = null;
while ((b = text("小能量").findOne("2000")) != null) {
    maid.clickCenter(b);
    waitForAndClickAction(id("btnClose"), 10e3, 80)
    if(id("btnClose").findOne(1000)!=null){
        waitForAndClickAction(id("btnClose"), 8e3, 80)
    }
    
}

// while ((b = text("大能量").findOne("2000")) != null) {
//     maid.clickCenter(b);

//     waitForAndClickAction(id("tt_video_ad_close_layout"), 60e3, 80)
//     waitForAndClickAction(id("btnClose"), 5e3, 80)
//     waitForAndClickAction(id("btnClose"), 8e3, 80)
// }

// while (textEndsWith("可继续").findOne(2000) == null) {
//     let b = className("android.widget.ListView").findOne(2000);
//     log(b)
//     let cj = b.children()[4];
//     log(cj)
//     maid.clickCenter(cj)
//     b = text("收入囊中").findOne(3000);
//     if (b == null) {
//         waitForAndClickAction(className("android.widget.ImageView"), 60e3, 80)
//     } else {
//         waitForAndClickAction(text("收入囊中"), 5e3, 80)
//     }
//     sleep(2000);
// }



// var btn=textStartsWith("家庭积分").findOne(2000)
// log(btn)

// waitForAndClickAction(textStartsWith("家庭积分"), 10e3, 80)

// waitForAndClickAction(id("com.softbank.flybank.rest.xy.zyczyh:id/iv"), 10e3, 80)
// // sleep(2000);
// waitForAndClickAction(desc("订单查询 ").clickable(true), 10e3, 80)

// b = desc("筛选 ").findOne(2000);
// log(b)
// maid.clickCenter(b);
// waitForAndClickAction(desc("查询 "), 10e3, 80)
// if (descContains("已失效").findOne(2000)) {
//     killThisApp(name, { debug_info_flag: "forcible", })
//     closeHeartAndExit()
// }
// let bs = descStartsWith("聚合支付").find();
// let arr = []
// bs.forEach(element => {
//     log(element.desc())
//     arr.push(element.desc())
// });


// // let arr=desc("订单查询").clickable(true).findOne(2000);
// let arr=className("android.view.View").desc("订单查询 ").findOne()
// // let arr=id("merchOrderManagerPage").findOne(2000);

// log(arr);

// let name = "com.softbank.flybank.rest.xy.zyczyh";
// launch(name);

// let name = "com.softbank.flybank.rest.xy.zyczyh";

// let b=id("J_barrier_free").findOne(2000)

// log(b)

// close(name);

// function close(packageName) {
//     var name = getPackageName(packageName);
//     if (!name) {
//         if (getAppName(packageName)) {
//             name = packageName;
//         } else {
//             return false;
//         }
//     }
//     app.openAppSetting(name);
//     text(app.getAppName(name)).waitFor();
//     let is_sure = textMatches(/(.*强制.*|.*停止.*|.*结束.*|.*运行.*)/).findOne(2000);

//     if (is_sure.enabled()) {
//         is_sure.click()
//         textMatches(/(.*确.*|.*定.*)/).findOne().click();
//         log(app.getAppName(name) + "应用已被关闭");
//         sleep(1000);
//         back();
//     } else {
//         log(app.getAppName(name) + "应用不能被正常关闭或不在后台运行");
//         back();
//     }
// }


// launchThisApp("我的小程序")

// log(80e3)

// let b=textStartsWith("+").find();
// b.forEach(element => {
//     // log(element)
//     element.click()
//     sleep(4)
// });

// let b=id("J_openBox").findOne(2000)
// log(b)

// while(1){
//     swipe(device.width / 2, device.height-500,
//         device.width / 2, device.height/4, 300);
// }


// let rv=id("android:id/list").findOne(2000)
// log(rv.childCount())


// let b=className("android.widget.TextView").textEndsWith("签到").find();
// log(b[0])
// b.forEach(element => {
//     log(element)
// });


// var url = "http://192.168.1.166:7070/wep/api/systemUser/login";
// r = http.postJson(url, {
//     "password": "string",
//     "username": "string"
//   });
// toastLog(r.body.string());
// let current_e_id = engines.myEngine().id;
// if (!requestScreenCapture(false)) {
//   log("请求截图失败");
//   exit();
// } else {
//   console.log("请求权限");
//   //截图
//   var im = captureScreen();
//   var path = "/sdcard/照片/screenshot.png";
//   im.saveTo(path);
//   // try {
//   //   //保存图片
//   //   im.saveTo(path);
//   //   //把图片加入相册
//   //   media.scanFile(path);
//   // } catch (e) {
//   //   log(current_e_id);
//   //   log("异常freestar--" + e);
//   //   // kill();
//   // }

//   log("请求截图结束了");
// }


// auto.waitFor();
// log("通过了")

// var sign = id("frog_float_notgif")
// // .className("android.widget.ImageView").clickable(true).depth(6).
// .findOne(2000);
// if (sign != null) {
//     log("click")
//     clickPointRight(sign);
// } else {
//     log("null")
// }



// function clickPointRight(btn) {
//     log(btn);
//     var b = btn.bounds();
//     log(b);
//     log(b.centerX() + "--" + b.centerY())
//     click(b.right-20, b.centerY());
// }