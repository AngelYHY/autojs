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

launchThisApp("小米商城")
var my = id("com.xiaomi.shop.plugin.homepage:id/main_bottom_mine").findOne(2000);
if (my) {
    maid.clickCenter(my);
    var btn = id("com.xiaomi.shop.plugin.homepage:id/usercentral_listheader_point_layout").findOne(5000);
    if(btn){
        maid.clickCenter(btn);
    }
}