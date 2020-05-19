auto.waitFor();
var Maid = require("./MyMaid.js");
var maid = new Maid();

let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");

var sum = "210.02";
var chararray = sum.split("");

for (var i = 0; i < 2; i++) {
    var btn = id("com.dotcore.yypay:id/zfb_zf").findOne(2000)
    if (!btn) {
        open();
    }
    start();
}


function start() {
    for (var e in chararray) {
        var c = chararray[e];
        var w;
        if (c == ".") {
            w = id("com.dotcore.yypay:id/btnPoint").findOne();
        } else {
            w = id("com.dotcore.yypay:id/btn" + c).findOne();
        }
        w.click();
    }

    waitForAndClickAction(id("com.dotcore.yypay:id/zfb_zf"), 10e3, 80);
    waitForAndClickAction(id("com.dotcore.yypay:id/mydialog_rela_zfb"), 10e3, 80);

    sleep(2000);
    waitForAndClickAction(id("com.dotcore.yypay:id/btn_cancel"), 10e3, 80);
    waitForAndClickAction(id("android:id/button1"), 10e3, 80);
}



function open() {
    launchThisApp("钱e付")

    waitForAndClickAction(id("com.dotcore.yypay:id/btn_login"), 10e3, 80);
}