"auto";

// app.launchApp("支付宝");

// text("蚂蚁森林").waitFor();
// // sleep(1000)
// click("蚂蚁森林");

// var btn=textStartsWith("收集能量").find()
// btn.forEach(element => {
//     log(element)
//     var b=element.bounds()
//     log(click(b.centerX(), b.centerY()))
// });

// text("查看更多动态").waitFor()
// sleep(4000)

// // while(text("查看更多好友")){
//     swipe(540,1900,540,400,500);
// }

// click("查看更多好友")
var count=0;

var btn = textEndsWith("kg").find();
var more=text("查看更多动态").bounds()
log(more.left+"--"+more.right+"--"+more.top+"--"+more.bottom)
// btn.forEach(element => {
//     var b = element.bounds()
//     log(element);
//     log(b.left+"--"+b.right+"--"+b.top+"--"+b.bottom)
//     // swipe(540,1900, b.centerX(), b.centerY(), 500)
//     // log(click(b.centerX(), b.centerY()))
//     // sleep(2000);
//     // collect();
//     // sleep(1000);
// });


function collect() {
    var b=text("你收取TA").findOne(2000);
    if(b==null){
        log("Kong")
    }else{
        // log("不");
        // back();
        colt()
    }
    count+=1;
    log(count);
}

function colt() {
    var btn = textStartsWith("收集能量").find()
    log(btn.size());
    sleep(1000);
    btn.forEach(element => {
        log(element)
        var b = element.bounds()
        swipe(0, 0, b.centerX(), b.centerY(), duration)
        // log(click(b.centerX(), b.centerY()))
    });
    back();
}

// jt()


// if (!requestScreenCapture(false)) {
//     toastLog("请求截图失败");
//     exit();
// } else {
//     console.log("请求权限");
// }


function jt() {
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
        sleep(1000);
        //截图
        var im = captureScreen();
        var path = "/sdcard/"+new Date().getTime()+".png";
        try {
            //保存图片
            im.saveTo(path);
            //把图片加入相册
            media.scanFile(path);
        } catch (e) {
            log("异常" + e);
            
        }
        kill();
        console.log("请求截图结束了");
    }
    threads.shutDownAll();//停止所有通过threads.start()启动的子线程
}

function kill() {
    let packageName = name;
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