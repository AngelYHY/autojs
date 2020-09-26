
var Maid = require("./MyMaid.js");
var maid = new Maid();

var MyUrl = require("./MyUrl.js");
var myUrl = new MyUrl();
var file = myUrl.file;

let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");

var name = "Soul";
var count = 0;

// sign()

function sign() {
    home();
    launchThisApp(name)

    waitForAndClickAction(text("自己"), 10e3, 80)

    sleep(1000);

    if (!waitForAndClickAction(id("tv_soul_coin_center"), 10e3, 80)) {
        reset()
        return;
    }

    sleep(5000)
    let b = className("android.view.View").text("每日签到").findOne(10000).parent();
    maid.clickCenter(b.child(1))

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

function soul() {
    sign();
}

module.exports = {
    soul: soul
}