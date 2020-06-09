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

var Unlock = require("./MyUnlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();

let name="多多爱运动";
launchThisApp(name);

if (waitForAndClickAction(id("com.xiaofish.lovesport:id/collect_energy_image"), 10e3, 80)) {
    let b = null;
    while ((b = text("小能量").findOne("2000")) != null) {
        maid.clickCenter(b);
        waitForAndClickAction(id("btnClose"), 10e3, 80)
        if (id("btnClose").findOne(1000) != null) {
            waitForAndClickAction(id("btnClose"), 8e3, 80)
        }

    }

    while ((b = text("大能量").findOne("2000")) != null) {
        maid.clickCenter(b);

        waitForAndClickAction(id("tt_video_ad_close_layout"), 60e3, 80)
        waitForAndClickAction(id("btnClose"), 5e3, 80)
        waitForAndClickAction(id("btnClose"), 8e3, 80)
    }

}
killThisApp(name)

name="睡宝";

launchThisApp(name);

if (waitForAndClickAction(id("com.ffyq.sleepdaka:id/tab_sleep"), 10e3, 80)) {
    let b = null;
    while ((b = text("小能量").findOne("2000")) != null) {
        maid.clickCenter(b);
        waitForAndClickAction(id("btnClose"), 10e3, 80)
        if (id("btnClose").findOne(1000) != null) {
            waitForAndClickAction(id("btnClose"), 8e3, 80)
        }

    }

    while ((b = text("大能量").findOne("2000")) != null) {
        maid.clickCenter(b);

        waitForAndClickAction(id("tt_video_ad_close_layout"), 60e3, 80)
        waitForAndClickAction(id("btnClose"), 5e3, 80)
        waitForAndClickAction(id("btnClose"), 8e3, 80)
    }

}
killThisApp(name)
maid.clear();