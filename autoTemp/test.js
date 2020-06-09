"auto";
let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, restartThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");

log(engines.all()[0].getSource().);


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