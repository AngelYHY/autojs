auto.waitFor();

var name = "TG";

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
} = require("./MODULE_MONSTER_FUNC");
var Maid = require("./MyMaid.js");
var maid = new Maid();

var Unlock = require("./MyUnlock.js");
var unlock = new Unlock();
unlock.unlock();

let swid = 540;
let shei = 1800;
let ewid = 540;
let ehei = 1600;

let level;
let arr = [];
var name = "TG";
let betNum = 0;
let teamName;

// setScreenMetrics(1080, 2340);

let centx;
let centY;
let retry = 0;

var obj = new Date();
var hour = obj.getHours();
let buy = "";
let halfLevel;

try {
    try {
        start();
        log("执行 start");
    } catch (e) {
        if (retry < 5) {
            log("重试次数：" + retry);
            retry++;
            start();
        } else {
            log("结束了");
            over(0);
        }

    }
    let rv = id("tg333.net:id/rv_game_list").findOne(4000);
    log("来到 rv");

    for (let element of rv.children()) {

        let txt = element.findOne(id("tv_group1")).text();
        if (buy.indexOf(txt) > -1) {
            log("跳过 " + txt);
            continue;
        }
        let str = element.findOne(id("tg333.net:id/tv_date")).text();
        log(rv.childCount());
        log(str + "----" + parseInt(str.slice(-5, -3)));
        let time = parseInt(str.slice(-5, -3));
        // 判断间隔时间是否在2小时之内
        if (getAbs(time) > 1) {
            log("时间过长");
            continue;
        }
        maid.clickCenter(element);

        let btn = id("tg333.net:id/iv_analyticsBar").findOne(20e3);
        centx = btn.bounds().centerX();
        centY = btn.bounds().centerY();

        waitForAndClickAction(text("半场波胆"), 10e3, 80);
        sleep(2000);
        go(1);
        waitForAndClickAction(text("波胆"), 10e3, 80);
        sleep(2000);
        go(0);
        back()
        sleep(1000);
    }
    log("循环跳过");
    over(1);
} catch (e) {
    log(e);
    if (text("今日头条").findOne(2000)) {
        log("跳到了首页结束");
        over(1);
    } else {
        over(0);
    }

}
log("执行了 over 意外");


function start() {
    log("执行 start");
    killThisApp(name);
    launchApp(name);
    if (waitForAction(text("请选择要使用的应用"))) {
        click(300, 1800);
    };
    // waitForAndClickAction(text("确定"), 8e3, 80)
    // waitForAndClickAction(id("close_btn"), 4e3, 80);
    sleep(3000);
    log("跳过 确定");
    waitForAndClickAction(id("close_btn"), 4e3, 80);
    waitForAndClickAction(text("交易明细"), 4e3, 80);
    sleep(2000);
    let rv = id("rv_billReceiptList").findOne(4000)
    rv.children().forEach(element => {
        let txt = element.findOne(id("tv_group1")).text();
        log(txt);
        buy += txt + ",";
    });
    waitForAndClickAction(text("市场列表"), 4e3, 80);
    waitForAction(id("tv_tab_title"), 10e3, 80);
    back();
    sleep(1000);

}

function over(flag) {
    let _ts = Date.now() + 120e3;
    if (flag) {
        log("长时退出");
        _ts = Date.now() + 1800e3;
    }
    let _par = { path: engines.myEngine().getSource().toString(), date: _ts };
    timers.addDisposableTask(_par);

    log("强制关闭前  js");
    killThisApp(name, {
        debug_info_flag: "forcible",
    });

    log("退出这个 js");
    exit();
}


function go(half) {
    arr = [];
    if (half) {
        halfLevel = 0;
        click(centx, centY);
        sleep(2000);
        log("进入半场");
    } else {
        // let btn = id("tg333.net:id/iv_analyticsBar").findOne(20e3);
        // centx = btn.bounds().centerX();
        // centY = btn.bounds().centerY();
        // maid.clickCenter(btn);
        click(centx, centY);
        sleep(2000);
        log("进入全场");
    }

    let q = id("tg333.net:id/quantity_layout").findOne(3000)
    if (!q) {
        return;
    }
    let zeroMoney = q.child(0).text().replace(/,/g, "");
    sleep(1000)
    let size = 0;
    q.children().forEach(element => {
        let num = element.text().replace(/,/g, "");
        if (num > 1000000) {
            level = num / 1000000;
            log(size + "---" + level + 2);
            arr.push(new ProfitInfo(size, level));
        }
        // else if (num > 400000) {
        //     arr.push(new ProfitInfo(size, 2));
        // }
        size++;
    });
    log(arr);
    back();
    if (half == 0) {
        log("滑动---");
        sleep(1000);
        swipe(swid, shei, ewid, ehei, 300);
    }
    let r = null;
    sleep(2000)
    let rvs = id("rv_predict_list").find()
    r = rvs.get(half);

    arr.forEach(element => {
        log(element + "==" + element.size)

        let profit = r.child(element.size).findOne(id("tv_profit")).text().replace(/%/g, "");
        log(profit);
        if (profit > 3) {
            if (element.size != 0) {
                log(r.child(element.size) + "---free")
                maid.clickCenter(r.child(element.size));
                sleep(2000)
                bet(element);
            }
        }

    });
    if (half) {
        let zeroZero = r.child(0).findOne(id("tv_profit")).text().replace(/%/g, "");
        if (zeroZero > 15) {
            if (zeroMoney > 100000) {
                halfLevel = 1 + zeroMoney / 200000;
            }
        }
        // if (zeroMoney > 100000 && zeroZero > 15) {
        //     log("半场 0.0 符合条件");
        //     maid.clickCenter(r.child(0));
        //     sleep(2000)
        //     let pi = new ProfitInfo(0, 1);
        //     bet(pi);
        // }
    } else {
        let zeroOne = r.child(1).findOne(id("tv_profit")).text().replace(/%/g, "");
        let oneZero = r.child(4).findOne(id("tv_profit")).text().replace(/%/g, "");
        // 判断倍数
        log("2.2 判断倍数");
        if (zeroOne > 2 * oneZero || oneZero > 2 * zeroOne) {
            let twoTwo = r.child(10).findOne(id("tv_profit")).text().replace(/%/g, "");
            if (twoTwo > 4) {
                maid.clickCenter(r.child(10));
                sleep(2000);
                let pi = new ProfitInfo(10, 2);
                bet(pi);
            }
        }
        if (halfLevel > 0) {
            let zz = r.child(0).findOne(id("tv_profit")).text().replace(/%/g, "");
            if (zz > 2) {
                log("半场转全场下单");
                maid.clickCenter(r.child(0));
                sleep(2000);
                let pi = new ProfitInfo(10, halfLevel);
                bet(pi);
            }
        }
    }
}




function ProfitInfo(size, level) {
    this.size = size;
    this.level = level;
}

function bet(element) {
    let le = element.level;
    let count = 0;
    // 根据等级设置金额
    while (count < le) {
        waitForAndClickAction(id("btn0"), 20e3, 80);
        count++;
    }
    // 提交订单
    waitForAndClickAction(id("btn_send"), 20e3, 80);
    // 确认订单
    waitForAndClickAction(text("确定"), 5e3, 80);
    waitForAndClickAction(text("确定"), 5e3, 80);
    sleep(1000);
    let suc = text("前往交易明细").findOne(2000);
    if (suc) {
        betNum++;
        if (betNum > 8) {
            over();
        }
    }
    // 退出支付页面
    back();
    sleep(15000);
}

function getAbs(other) {
    if (hour == 23 && other == 0) {
        return 1;
    } else {
        return other - hour;
    }
}