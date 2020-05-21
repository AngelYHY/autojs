var Maid = require("./MyMaid.js");
var maid = new Maid();

var MyUrl = require("./MyUrl.js");
var myUrl = new MyUrl();
var file = myUrl.file;

let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, restartThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");

var count = 0;
let name = "支付宝";

sign();

function sign() {
    home();
    launchThisApp(name, {
        debug_info_flag: "forcible",
        condition_launch: () => id("com.alipay.android.widget.fortunehome:id/tab_description").findOne(2000)
    })
    sleep(2000)
    waitForAndClickAction(text("我的小程序"), 10e3, 80)
    sleep(2000)
    waitForAndClickAction(text("发现"), 10e3, 80)
    sleep(2000)

    let b = null;
    while ((b = textStartsWith("+").findOne("2000")) != null) {
        maid.clickCenter(b);
        sleep(4000)
        waitForAndClickAction(text("立即领取"), 10e3, 80)
        back();
        sleep(1000)
    }

    // let b = textStartsWith("+").find();
    // log(b.size())
    // b.forEach(element => {
    //     log(element)
    //     maid.clickCenter(element);
    //     sleep(4000)
    //     waitForAndClickAction(text("立即领取"), 10e3, 80)
    //     back();
    //     sleep(1000)
    // });

    restartThisApp(name)
    waitForAndClickAction(id("com.alipay.android.widget.fortunehome:id/tab_description"), 10e3, 80)
    log("1")
    waitForAndClickAction(text("黄金大作战"), 10e3, 80)
    log("2")
    sleep(2000)

    back();
    waitForAndClickAction(id("com.alipay.android.phone.wealth.home:id/tab_description"), 10e3, 80)
    waitForAndClickAction(text("支付宝会员"), 10e3, 80)
    waitForAndClickAction(text("领积分"), 10e3, 80)
    b = null;
    while ((b = text("点击领取").findOne("2000")) != null) {
        maid.clickCenter(b);
        sleep(2000)
    }

    killThisApp(name, { debug_info_flag: "forcible", });

}

function reset() {

    killThisApp(name)
    if (count > 4) {
        files.createWithDirs(file)
        files.append(file, name + " 失败");
        return;
    }
    count++;
    sign()
}

function fjdzz() {
    sign();
}

module.exports = {
    fjdzz: fjdzz
}