auto.waitFor();
var Maid = require("./MyMaid.js");
var maid = new Maid();
var Unlock = require("./MyUnlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
var count = 0;
sign()

function sign() {
    count++;
    maid.resetOpenAuto()
    log("我要开始执行了 这是更新版本哦")

    log(launchApp("支付宝"));

    var t = id("com.alipay.mobile.socialwidget:id/social_bottom_tab").findOne(5000)
    if (!t) {
        if (count > 5) {
            exit();
        }
        reset()
        exit();
    }
    sleep(1000)
    t.click();
    maid.clickCenter(t)
    sleep(3000)

    log("点击成功")

    var b = id("com.alipay.mobile.socialwidget:id/contact_button").findOne(2000)
    log(t)
    log(b);
    while (!b) {
        log("没找到")
        maid.clickCenter(t)
        sleep(1000)
    }

    log("找到了 ")

    var vs = id("com.alipay.mobile.socialwidget:id/content_layout").find();
    // log(cl[0])
    count = 0;
    while (vs.empty()) {
        t.click();
        maid.clickCenter(t)
        sleep(3000)
        vs = id("com.alipay.mobile.socialwidget:id/content_layout").find();
        if (count > 5) {
            exit()
        }
        count++;
    }

    // var vs = id("com.alipay.mobile.socialwidget:id/item_memo").find();

    if (vs.empty()) {
        log("没找到╭(╯^╰)╮")
    } else {

        log("找到啦")
        let arr = []
        vs.forEach(element => {
            arr.push({
                content: element.findOne(id("com.alipay.mobile.socialwidget:id/item_memo")).text(),
                date: element.findOne(id("com.alipay.mobile.socialwidget:id/item_date")).text(),
            });
        });

        log(arr)

        var file = "/sdcard/AutoFile/alipay.txt";
        files.createWithDirs(file)
        files.append(file, JSON.stringify(arr));

        // //用其他应用查看文件
        // app.viewFile(file);

        // var url = "http://192.168.31.166:8080/msg/add";
        // r = http.postJson(url, {
        //     msg: arr
        // });
        // log(r.body.string());
    }
    home();
}

function reset() {
    maid.reset();
    sign()
}