auto.waitFor();
var Maid = require("./MyMaid.js");
var maid = new Maid();
var Unlock = require("./MyUnlock.js");
var unlock = new Unlock();

let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");

maid.before();
unlock.unlock();


launchThisApp("小米金融")

log("1")
if (waitForAndClickAction(text("每日签到"), 10e3, 80)) {
    sleep(2000);
    log("2")
    log(waitForAndClickAction(text("每日签到"), 10e3, 80))
    sleep(2000);
    var b=text("明日签到").findOne();
    if(!b){
        waitForAndClickAction(text("签到"), 10e3, 80)
    }else{
        log("直接结束咯")
    }
}

killThisApp("小米金融",{debug_info_flag: "forcible"});

