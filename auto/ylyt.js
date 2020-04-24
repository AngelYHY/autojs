var Maid = require("./MyMaid.js");
var maid = new Maid();

maid.resetOpenAuto()
maid.openAutoCheck()
maid.remind();
log("啦啦啦")
maid.reqCapture();
qrcode()

function qrcode() {
    maid.sleepOpenAuto();
    maid.openAutoCheck()
    log("打开支付宝")
    launchApp("支付宝")
    var btn = text("收钱").findOne(5000);
    log(maid.clickCenter(btn))
    var tt = desc("收款二维码").findOne(5000);
    if (!tt) {
        log("没找到 收款二维码")
        reset();
        exit();
    }
    sleep(2000);
    if (!maid.getImg("/sdcard/照片/screenshot.png")) {
        log("结束了")
        exit();
    }
    home()
    maid.sleepOpenAuto();
    maid.openAutoCheck()
    sleep(1000)
    launchApp("Listening")
    log(maid.clickTextCenter("识别"))

}

function reset() {
    maid.reset();
    qrcode()
}