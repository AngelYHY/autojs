var Maid = require("./MyMaid.js");
var maid = new Maid();

var MyUrl = require("./MyUrl.js");
var myUrl = new MyUrl();
var file = myUrl.file;
var name = "植物大战僵尸2";

let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");

var count = 0;

sign()

function sign() {
    // home();
    launchThisApp(name)
    sleep(10000)
    waitForAndClickAction(id("com.popcap.pvz2cthdxm:id/tw_offline_login"), 20e3, 80)
    log("点击了登录")
    sleep(20000)
    click(1200, 990)
    sleep(2000)
    // sleep(4000)
    // waitForAndClickAction(text("跳过"), 15e3, 80)
    click(1460, 920)
    sleep(10000)
    click(1800,85)
    sleep(2000)
    let count=0;
    while(count<40){
        click(2070,190)
        sleep(35000)
        back()
        sleep(2000)
        click(1220,840)
        count++;
        sleep(1000);
        log(count);
    }
    
    // waitForAndClickAction(id("com.DaTong.InsuranceForAndroid:id/img_close"), 8e3, 80)
    // waitForAndClickAction(id("com.DaTong.InsuranceForAndroid:id/imagebutton_signin"), 5e3, 80)
    // sleep(4000)
    // text("签到成功").findOne(10000);
    // killThisApp(name, { debug_info_flag: "forcible", })

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

// function kb() {
//     sign();
// }

// module.exports = {
//     kb: kb
// }