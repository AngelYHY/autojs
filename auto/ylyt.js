var Maid = require("./MyMaid.js");
var maid = new Maid();

maid.openAuto()
maid.remind();
log("啦啦啦")
maid.reqCapture();
qrcode()

function qrcode() {
    maid.sleepOpenAuto();
    log("打开支付宝")
    launchApp("支付宝")
    var btn = text("收钱").findOne(10000);
    log(maid.clickCenter(btn))
    var tt = desc("收款二维码").findOne(5000);
    if (!tt) {
        log("没找到 收款二维码")
        reset();
        exit();
    }
    tt.wait()
    if (!maid.getImg("/sdcard/照片/screenshot.png")) {
        log("结束了")
        exit();
    }
    maid.sleepOpenAuto();
    launchApp("Listening")
    log(maid.clickTextCenter("识别"))

}

function reset() {
    maid.reset();
    qrcode()
}