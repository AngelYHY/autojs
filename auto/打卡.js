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
    maid.clickCenter(element);
    let bs = textStartsWith("分享到").findOne(2000)
    if(bs){
        maid.clickCenter(bs);
        sleep(2000);
        back();
        if (bs.text().indexOf("微信群") > 0) {
            waitForAndClickAction(id("cancel"), 5e3, 80)
        } else {
            if (waitForAndClickAction(id("com.tencent.mm:id/dom"), 5e3, 80)) {
                waitForAndClickAction(id("cancel"), 5e3, 80)
            }
    
        }
        sleep(2000);
        back();
        sleep(2000);
    }

});



// killThisApp(name)


// name = "睡宝";

// launchThisApp(name);
// waitForAction(id("mine"));
// btns = textEndsWith("领现金").find();
// btns.forEach(element => {
//     maid.clickCenter(element);
//     if (waitForAndClickAction(textStartsWith("分享到"), 5e3, 80)) {
//         if (waitForAndClickAction(id("com.tencent.mm:id/ch"), 5e3, 80)) {
//             if (waitForAndClickAction(id("com.tencent.mm:id/dom"), 5e3, 80)) {
//                 waitForAndClickAction(id("cancel"), 5e3, 80)
//             }
//         }
//     }
// });

// killThisApp(name)

maid.clear();