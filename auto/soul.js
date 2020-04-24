auto.waitFor();
var Maid = require("./MyMaid.js");
var maid = new Maid();
var Unlock = require("./MyUnlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();

sign()

function sign() {
    maid.resetOpenAuto()
    log("我要开始执行了")

    log(launchApp("Soul"));

    var t = text("自己").findOne(10000);

    if (!maid.clickCenter(t)) {
        reset()
        exit();
    }

    sleep(1000);

    var t = id("tv_soul_coin_center").findOne(10000);
    if (!maid.clickCenter(t)) {
        reset()
        exit();
    }

    sleep(5000);
    click(900, 1050)
    sleep(1000);
    home()
}

function reset() {
    maid.reset();
    sign()
}