var Maid = require("./MyMaid.js");
var maid = new Maid();

var MyUrl = require("./MyUrl.js");
var myUrl = new MyUrl();
var file = myUrl.file;
var name = "快保";

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

    waitForAndClickAction(textContains("跳过"), 15e3, 80)
    waitForAndClickAction(id("com.DaTong.InsuranceForAndroid:id/img_close"), 8e3, 80)
    waitForAndClickAction(id("com.DaTong.InsuranceForAndroid:id/imagebutton_signin"), 5e3, 80)
    sleep(4000)
    text("签到成功").findOne(10000);
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

function kb() {
    sign();
}

module.exports = {
    kb: kb
}