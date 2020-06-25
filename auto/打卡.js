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
unlock.unlock();

let name = "多多爱运动";
launchThisApp(name);
waitForAction(id("mine"));

let btns = textEndsWith("领现金").find();

btns.forEach(element => {
    sign(element)
});

killThisApp(name)


name = "睡宝";

launchThisApp(name);
waitForAction(id("mine"));
btns = textEndsWith("领现金").find();
btns.forEach(element => {
    sign(element)
});

killThisApp(name)

maid.clear();

function sign(element) {
    maid.clickCenter(element);
    waitForAndClickAction(id("btnClose"), 4e3, 80)
    
    // let bs = textStartsWith("分享到").findOne(2000)
    // if (bs) {
    //     waitForAndClickAction(textStartsWith("分享到"), 5e3, 80)
    //     // maid.clickCenter(bs);
    //     sleep(4000);
    //     back()
    //     if (bs.text().indexOf("微信群") > 0) {
    //         log("这里" + bs)
    //         waitForAndClickAction(id("cancel"), 5e3, 80)
    //     } else {
    //         log("哪里")
    //         if (waitForAndClickAction(id("com.tencent.mm:id/dom"), 5e3, 80)) {
    //             waitForAndClickAction(id("cancel"), 5e3, 80)
    //         }

    //     }
    //     // sleep(4000);
    //     waitForAndClickAction(id("btnClose"), 8e3, 80)
    //     waitForAndClickAction(id("btnClose"), 4e3, 80)
    //     back()
    // }
}