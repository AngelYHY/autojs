auto.waitFor();

var name = "支付宝";

let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");
var Maid = require("./MyMaid.js");
var maid = new Maid();

var Unlock = require("./MyUnlock.js");
var unlock = new Unlock();
unlock.unlock();

launchApp(name);
sleep(2000);
click(300, 1000);

waitForAndClickAction(text("蚂蚁森林"), 20e3, 80);

// waitForAndClickAction(textStartsWith("收集能量"), 5e3, 80)
let total = 0;
while (total < 8) {
    collect();
}

var obj = new Date();
var hour = obj.getHours();
log(hour);
if (hour == 7) {
    let _ts = Date.now() + 300e3;
    let _par = { path: engines.myEngine().getSource().toString(), date: _ts };
    timers.addDisposableTask(_par);
}
killThisApp(name, { debug_info_flag: "forcible", });

function collect() {
    let count = 0;
    let flag = 1;

    while (flag) {
        if (waitForAndClickAction(textStartsWith("收集能量"), 5e3, 80)) {
            total = 0;
            count++;
            if (count > 8) {
                flag = 0;
            }
        } else {
            if (count == 0) {
                total++;
            }
            flag = 0;
        }
    }
    click(1040, 1600);
    sleep(1000);
}
