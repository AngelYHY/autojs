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

var count = 0;
let name = "支付宝";

// sign();

function sign() {
    home();
    launchThisApp(name)

    waitForAndClickAction(id("com.alipay.android.widget.fortunehome:id/tab_description"), 10e3, 80)
    log("1")
    waitForAndClickAction(text("黄金大作战"), 10e3, 80)
    log("2")
    sleep(2000)

    killThisApp(name);

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