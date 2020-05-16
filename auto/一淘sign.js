"auto"

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

sign()
function sign() {

    launchThisApp("一淘")
    sleep(2000);
    var close = id("com.taobao.etao:id/home_market_close").findOne(2000);
    if (close) {
        maid.clickCenter(close);
    }

    var btn = id("com.taobao.etao:id/is_status_loading_image_view").findOne(20000);
    log(btn)
    if (btn) {
        log("click")
        sleep(1000)
        maid.clickCenter(btn);
        sleep(2000)
        var b = text("邀请赚集分宝").findOne(2000);
        if (!b) {
            var btn = text("点我签到领钱").findOne(2000);
            if (btn) {
                maid.clickCenter(btn);
            }
        } else {
            log("结束 null")
        }

    }

    killThisApp("一淘");

}