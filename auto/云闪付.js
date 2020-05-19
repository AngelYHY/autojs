
var Maid = require("./MyMaid.js");
var maid = new Maid();

var MyUrl = require("./MyUrl.js");
var myUrl = new MyUrl();
var file = myUrl.file;
var name = "云闪付";

let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");

var count = 0;

// sign()

function sign() {
    home();
    launchThisApp(name)

    waitForAndClickAction(id("frog_float_notgif"), 10e3, 80)
    sleep(2000);
    let b = textEndsWith("签到").find();
    let btn = b[0];
    log(btn)
    if (btn.text() == "立即签到" || btn.text() == "签到") {
        maid.clickCenter(btn);
        sleep(1000);
    }
    b = text("已签到").findOne(3000);
    if (!b) {
        reset();
        return;
    }
    // var btn = className("android.widget.TextView").text("签到").findOne(3000);
    // if (!btn) {
    //     var btn = className("android.widget.TextView").text("已签到").findOne(3000);
    //     if (!btn) {
    //         reset();
    //         return;
    //     }

    // }

    // maid.clickCenter(btn);

    sleep(1000);
    killThisApp(name, { debug_info_flag: "forcible", })

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

function ysf() {
    sign();
}

module.exports = {
    ysf: ysf
}