auto.waitFor();

var name = "手机淘宝";

let width = device.width;
let height = device.height;

let swid = width / 2 + 50;
let shei = height / 2 + 100;
let ewid = width / 2 - 50;
let ehei = height / 2 - 100;

let {
    clickAction,
    swipeAndShow,
    setIntervalBySetTimeout,
    keycode,
    getSelector,
    equalObjects,
    waitForAndClickAction,
    runJsFile,
    messageAction,
    debugInfo,
    killThisApp,
    clickActionsPipeline,
    waitForAction,
    baiduOcr,
    launchThisApp,
    observeToastMessage,
    showSplitLine,
    classof,
    timeRecorder,
    surroundWith,
    restartThisApp,
} = require("./MODULE_MONSTER_FUNC");
var Maid = require("./MyMaid.js");
var maid = new Maid();

var Unlock = require("./MyUnlock.js");
var unlock = new Unlock();
unlock.unlock();

restartThisApp(name);
sleep(3000);

waitForAction(id("com.taobao.taobao:id/rv_main_container"), 4e3);

let rv = id("com.taobao.taobao:id/rv_main_container").findOne(3000);

if (rv) {
    maid.clickCenter(rv.child(3));
    let up = textMatches(/(.*每次消耗.*)/).findOne(4000);
    if (!up) {
        over(0);
    }
    maid.clickCenter(up);
    sleep(1000);
    let b;
    while (text("领取奖励").findOne(5000)) {
        b = text("领取奖励").findOne(2000);
        maid.clickCenter(b);
        sleep(2000);
    }

    while (text("去浏览").findOne(5000)) {
        b = text("去浏览").findOne(2000);
        maid.clickCenter(b);
        sleep(2000);
        look();
    }

    while (text("去搜索").findOne(5000)) {
        b = text("去搜索").findOne(2000);
        maid.clickCenter(b);
        sleep(2000);
        look();
    }

    // while (textStartsWith("逛一逛").findOne(5000)) {
    //     b = textStartsWith("逛一逛").findOne(2000);
    //     maid.clickCenter(b);
    //     sleep(2000);
    //     look();
    // }

    over(1);
} else {
    over(0);
}


function look() {
    for (let index = 0; index < 3; index++) {
        swipe(swid, shei, ewid, ehei, 300);
        log("滑动" + swid + "==" + shei + "==" + ewid + "==" + ehei);
        sleep(7000);
    }
    let up = textStartsWith("喂猫升级").findOne(2000);
    if (!up) {
        back();
    }

    sleep(2000);
}


function over(flag) {
    let _ts = Date.now() + 120e3;
    if (flag) {
        log("长时退出");
        _ts = Date.now() + 1800e3;
    }
    let _par = { path: engines.myEngine().getSource().toString(), date: _ts };
    timers.addDisposableTask(_par);

    exit();
}