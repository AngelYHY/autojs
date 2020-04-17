"auto";

var interval = 1000 * 60 * 1;
// setInterval(sign,interval);

auto.waitFor();
var Maid = require("./MyMaid.js");
var maid = new Maid();
var Unlock = require("./MyUnlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();

// var btn=text("收钱").findOne(10000);
// log(maid.clickCenter(btn))

// maid.getThreeImg()
sign()
// maid.getCaptureImg()

// gestures([350, [300, 400], [300, 1400]],[350, [600, 400], [600, 1400]],[350, [900, 400], [900, 1400]]);
// sleep(1000)
// back();

function sign() {
    maid.openAuto()
    log("我要开始执行了")
    launchApp("Soul");

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

    sleep(2000);
    click(900, 1050)

    maid.sleepOpenAuto()

    launchApp("云闪付")

    var sign = id("frog_float_notgif").findOne(8000);
    maid.clickCenter(sign);

    var btn = className("android.widget.TextView").text("签到").findOne(3000);
    if(!btn){
        var btn = className("android.widget.TextView").text("今日已签到").findOne(3000);
        if(!btn){
            reset();
            exit();
        }
        
    }
    maid.clickPointRight(btn);

    maid.sleepOpenAuto()
    maid.clear()
    home()
}

function reset() {
    maid.reset();
    sign()
}