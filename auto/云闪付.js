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
    maid.clickCenter(btn);

    sleep(1000);
    home()
}

function reset() {
    maid.reset();
    sign()
}