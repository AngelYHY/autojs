
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
var name = "一淘";


// sign()

function sign() {
    home();
    launchThisApp(name)
    sleep(4000);
    var close = id("com.taobao.etao:id/home_market_close").findOne(2000);
    if (close) {
        maid.clickCenter(close);
    }

    waitForAndClickAction(id("com.taobao.etao:id/is_status_loading_image_view"), 10e3, 80)

    sleep(2000)
    var b = text("邀请赚集分宝").findOne(2000);
    if (!b) {
        waitForAndClickAction(text("点我签到领钱"), 10e3, 80)
        // var btn = text("点我签到领钱").findOne(2000);
        // if (btn) {
        //     maid.clickCenter(btn);
        // }
        sleep(1000)
    }
    let bx=text("点我开宝箱").findOne(2000)
    if(bx){
        maid.clickCenter(bx);
        sleep(1000)
        click(500,1200)
        sleep(1000)
    }
    var b = text("邀请赚集分宝").findOne(2000);
    if(!b){
        reset()
        return;
    }
    // }

    killThisApp(name, { debug_info_flag: "forcible", });

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

function yitao() {
    sign();
}

module.exports = {
    yitao: yitao
}