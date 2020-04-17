"auto";


let current_e_id = engines.myEngine().id;

var sum = "14.6";
var chararray = sum.split("");
var name = "com.chinaums.onlineservice";


var res = launch(name);
log(res);
// sleep(20000);

text("精选").waitFor();
log("ok");
sleep(1000);
// descEndsWith("首页").find().forEach(function (pos) {
//     var posb = pos.bounds();
//     click(posb.centerX(), posb.centerY() - 80);
//     sleep(1500);
//     log("执行一个");
// });

var w = text("首页").findOne(5000);
log(current_e_id);

//如果找到控件则点击
if (w != null) {
    var sy = click("首页");
    log(w + sy);

    var sk = text("收款").waitFor();

    var sy = click("收款");

    // sleep(5000);
    // log("2秒 结束");
    // var sk = text("收款码").waitFor();
    // log(sk);
    // var sy = click("收款码");

    sleep(2000);
    text("￥0.00").waitFor();
    // id("sum").findOne().waitFor()

    log(chararray);


    for (var e in chararray) {
        var c = chararray[e];
        var w;
        if (c == ".") {
            w = className("android.view.View").clickable(true).depth(10).findOne().parent();
        } else {
            w = className("android.view.View").desc(c).findOne();
        }

        if (w != null) {
            log(c);
            log("dianji");
            w.click();
        }

    }

    log(desc("收款码").click())

    while (getQMZC() == null) {
        log("dskm" + desc("收款码").click())
    }

    sleep(2000);
    jt();

    //     log("yaoshui");
    //     sleep(1000);
    // }

    // var b = w.bounds()
    // log("执行点击" + b.centerX() + "==" + b.centerY());
    // w.set
    // var r = w.select();
    // log("选中结果" + r);
    // log("是否选中" + w.isSelected());
} else {
    //否则提示没有找到
    log("没有找到日志图标");
}

function getQMZC() {
    return className("android.view.View").desc("全面支持").findOne(2000);
}

function cl(text) {
    return click(text);
}

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