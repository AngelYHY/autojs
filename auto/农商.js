var Maid = require("./MyMaid.js");
var maid = new Maid();

var MyUrl = require("./MyUrl.js");
var myUrl = new MyUrl();

var storage = storages.create(myUrl.nongshang);

let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, restartThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");

let name = "com.softbank.flybank.rest.xy.zyczyh";

ns();

function ns() {
    let b = text("订单列表").findOne(2000);
    log(b);
    if (!b) {
        restartThisApp(name, { debug_info_flag: "forcible", });
        log("重启好了")
        var info = id("com.softbank.flybank.rest.xy.zyczyh:id/toolbar_title").findOne(2000)
        if (info.text()=="商户端登录") {
            log("客户端被退出登陆了")
            storage.put(myUrl.alive, 0)
            exit();
        }
        log("到了首页哦")
        
        if (info) {
            log(info.text())
            storage.put(myUrl.accountName, info.text())
        }

        waitForAndClickAction(text("订单管理"), 10e3, 80)
        // sleep(2000);
        waitForAndClickAction(text("订单查询").clickable(true), 10e3, 80)
    }
    b = text("筛选").findOne(2000);
    log(b)
    maid.clickCenter(b);
    waitForAndClickAction(text("查询"), 10e3, 80)
    let bs = textStartsWith("聚合支付").find();
    let arr = []
    bs.forEach(element => {
        log(element.text())
        arr.push(element.text())
    });
    storage.put(myUrl.alive, 1)
    var da = {
        imei: device.getAndroidId(),
        accountName: storage.get(myUrl.accountName),
        msg: arr
    }
    var url = myUrl.nongshangUrl + "payOrder/notify";
    try {
        r = http.postJson(url, da)
    } catch (e) {
        log(e)
    }
    log(r.body.json())

}