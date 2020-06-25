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
require("./EXT_TIMERS").load();
var Unlock = require("./MyUnlock.js");
var unlock = new Unlock();
// maid.before();
unlock.unlock();

maid.showDialog();

let name = "多多爱运动";
launchThisApp(name);

if (waitForAndClickAction(id("com.xiaofish.lovesport:id/collect_energy_image"), 10e3, 80)) {
    sign()
}
killThisApp(name)

name = "睡宝";

launchThisApp(name);

if (waitForAndClickAction(id("com.ffyq.sleepdaka:id/tab_sleep"), 10e3, 80)) {
    sign()
}
killThisApp(name)

maid.clear();

let _ts = Date.now() + 4000e3;
let _par = { path: engines.myEngine().getSource().toString(), date: _ts };
timers.addDisposableTask(_par);


function sign() {
    sleep(1000);
    let b = null;
    while ((b = text("小能量").findOne("2000")) != null) {
        b = b.parent()
        maid.clickCenter(b);
        log("小能量")

        waitForAndClickAction(id("btnClose"), 10e3, 80)
        // if (id("btnClose").findOne(1000) != null) {
        waitForAndClickAction(id("btnClose"), 8e3, 80)
        waitForAndClickAction(id("btnClose"), 5e3, 80)
        // }

    }

    while ((b = text("大能量").findOne("2000")) != null) {
        b = b.parent()
        maid.clickCenter(b);
        log("大能量")
        waitForAndClickAction(id("tt_video_ad_close_layout"), 60e3, 80)
        waitForAndClickAction(id("btnClose"), 5e3, 80)
        waitForAndClickAction(id("btnClose"), 8e3, 80)
    }

}