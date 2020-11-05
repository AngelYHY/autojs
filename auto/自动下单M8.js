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
    myCaptureScreen,
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
let ehei = 1550;

let width = device.width;
let height = device.height;

let level;
let arr = [];
var name = "TG";
let betNum = 0;
let teamName;

var reg = /超|甲|国联/g;
// var scoreReg = /3 - 0|0 - 3|3 - 3/g;

var scoreReg = /3 - 2|2 - 3|3 - 0|0 - 3/g;

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

    while (1) {
        xunhuan();
        swipe(swid, shei, ewid, ehei, 300);
        swipe(swid, shei, ewid, ehei, 300);
        swipe(swid, shei, ewid, ehei, 300);
        swipe(swid, shei, ewid, ehei, 300);
        swipe(swid, shei, ewid, ehei, 300);
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

function xunhuan() {
    let rv = id("tg333.net:id/rv_game_list").findOne(4000);
    log("来到 rv");
    let cou = rv.childCount() - 1;
    let sss = 0;
    if (cou < 0) {
        over(0);
    }
    for (let element of rv.children()) {
        if (sss == cou) {
            return;
        }
        sss++;
        // let type = element.findOne(id("tg333.net:id/tv_game_type")).text();
        // if (type.match(reg) == null) {
        //     log("类型不对");
        //     continue;
        // }

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
            over(1);
        }
        maid.clickCenter(element);

        // let btn = id("tg333.net:id/iv_analyticsBar").findOne(20e3);
        // centx = btn.bounds().centerX();
        // centY = btn.bounds().centerY();

        // waitForAndClickAction(text("半场波胆"), 10e3, 80);
        // sleep(2000);
        // go(1);
        // waitForAndClickAction(text("波胆"), 10e3, 80);
        // sleep(2000);
        go(0);
        back()
        sleep(1000);
    }
}

function start() {
    log("执行 start");
    killThisApp(name);
    launchApp(name);
    if (waitForAction(text("请选择要使用的应用"))) {
        click(300, 1800);
    };
    waitForAndClickAction(text("确定"), 2e3, 80)
    waitForAndClickAction(id("close_btn"), 2e3, 80);
    click(width / 2, height - 100);
    sleep(3000);
    log("跳过 确定");
    let money = id("tv_quote").findOne(2000);
    if (money) {
        log("不为空。。。");
        if (parseInt(money.text().replace(/,/g, "")) < 100) {
            log("钱不多");
            over(1);
        }
    } else {
        over(0);
    }
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
    // killThisApp(name, {
    //     debug_info_flag: "forcible",
    // });

    log("退出这个 js");
    exit();
}


function go(half) {
    arr = [];
    if (half) {
        halfLevel = 0;
        // click(centx, centY);
        sleep(2000);
        log("进入半场");
    } else {
        // click(centx, centY);
        sleep(2000);
        log("进入全场");
    }
    // let b = id("sv_layout").findOne(3000);
    // if (half) {
    //     let zeroTwo = b.findOne(drawingOrder(22));
    //     let num = zeroTwo.text().replace(/,/g, "");
    //     if (num > 100000) {
    //         level = num / 100000;
    //         arr.push(new ProfitInfo(2, level));
    //     }
    //     let twoZero = b.findOne(drawingOrder(26));
    //     num = twoZero.text().replace(/,/g, "");
    //     if (num > 100000) {
    //         level = num / 100000;
    //         arr.push(new ProfitInfo(6, level));
    //     }
    // }

    sleep(1000);

    let rvs = id("rv_predict_list").find();
    r = rvs.get(half);

    let zeroZero = r.child(0).findOne(id("tv_profit")).text().replace(/%/g, "");

    log(arr + "数组");
    // back();
    if (half == 0) {
        log("滑动---");
        sleep(1000);
        swipe(swid, shei, ewid, ehei, 300);
    }
    let r = null;
    sleep(2000)


    // arr.forEach(element => {
    //     log(element + "==" + element.size)
    //     if (half) {
    //         if (element.size != 2 || element.size != 6) {
    //             return;
    //         }
    //     }
    //     let profit = r.child(element.size).findOne(id("tv_profit")).text().replace(/%/g, "");
    //     log(profit);
    //     if (profit > 2) {
    //         if (element.size != 0) {
    //             log(r.child(element.size) + "---free")
    //             maid.clickCenter(r.child(element.size));
    //             sleep(2000)
    //             bet(element);
    //         }
    //     }

    // });
    if (half == 0) {
        log("freestar=00=" + zeroZero);
        let zeroOne = r.child(1).findOne(id("tv_profit")).text().replace(/%/g, "");
        let oneZero = r.child(4).findOne(id("tv_profit")).text().replace(/%/g, "");
        log("判断倍数");
        // 0-0 < 5 判定为大球
        if (zeroZero < 5) {  // 大球  买小球
            // 0-1 > 1.5倍 1-0   买3-0
            if (zeroOne > 1.2 * oneZero) {

                // // 3-0
                let threeZero = r.child(12).findOne(id("tv_profit")).text().replace(/%/g, "");
                // if (threeZero > 1) {
                //     maid.clickCenter(r.child(12));
                //     sleep(2000);
                //     let pi = new ProfitInfo(12, 5);
                //     bet(pi);
                // }

                // // 3-2
                let threeTwo = r.child(14).findOne(id("tv_profit")).text().replace(/%/g, "");
                // if (threeTwo > 1) {
                //     maid.clickCenter(r.child(14));
                //     sleep(2000);
                //     let pi = new ProfitInfo(14, 5);
                //     bet(pi);
                // }

                // if (threeZero > threeTwo && threeZero > 1.3) {
                if (threeZero > 1.2) {
                    maid.clickCenter(r.child(12));
                    sleep(2000);
                    let pi = new ProfitInfo(12, 5);
                    bet(pi);
                }

                // } else if (threeTwo > threeZero && threeTwo > 1.3) {
                //     maid.clickCenter(r.child(14));
                //     sleep(2000);
                //     let pi = new ProfitInfo(14, 5);
                //     bet(pi);
                // }

            }
        } else { // 小球买 买 大球
            // 1-0 > 1.5 倍 0-1 买 0-3
            if (oneZero > 1.2 * zeroOne) {
                // // 0-3
                let zeroThree = r.child(3).findOne(id("tv_profit")).text().replace(/%/g, "");
                // if (zeroThree > 1) {
                //     maid.clickCenter(r.child(3));
                //     sleep(2000);
                //     let pi = new ProfitInfo(3, 5);
                //     bet(pi);
                // }

                // // 2-3
                let twoThree = r.child(11).findOne(id("tv_profit")).text().replace(/%/g, "");
                // if (twoThree > 1) {
                //     maid.clickCenter(r.child(11));
                //     sleep(2000);
                //     let pi = new ProfitInfo(11, 5);
                //     bet(pi);
                // }

                // if (zeroThree > twoThree && zeroThree > 1.3) {
                //     maid.clickCenter(r.child(3));
                //     sleep(2000);
                //     let pi = new ProfitInfo(3, 5);
                //     bet(pi);
                // } else if (twoThree > zeroThree && twoThree > 1.3) {
                    
                if (twoThree > 1.2) {
                    maid.clickCenter(r.child(11));
                    sleep(2000);
                    let pi = new ProfitInfo(11, 5);
                    bet(pi);
                }

                // }

            }
        }


        // 相差 1.3 倍就买 3-3
        // if (zeroOne > 1.3 * oneZero || oneZero > 1.3 * zeroOne) {
        //     let threeThree = r.child(15).findOne(id("tv_profit")).text().replace(/%/g, "");
        //     if (threeThree > 1) {
        //         maid.clickCenter(r.child(15));
        //         sleep(2000);
        //         let pi = new ProfitInfo(15, 9);
        //         bet(pi);
        //     }
        // }

    }
}

function ProfitInfo(size, level) {
    this.size = size;
    this.level = level;
}

function bet(element) {
    // 比分检查
    let score = id("tg333.net:id/tv_score").findOne(2000);
    if (score.text().match(scoreReg) == null) {
        back();
        sleep(1000);
        return;
    }

    // 赔率检查
    let profit = id("tg333.net:id/tv_profit").findOne(2000);
    if (profit.text().replace(/%/g, "") > 3) {
        back();
        sleep(1000);
        return;
    }

    let money = id("tv_quote").findOne(2000);
    if (money) {
        log("不为空。。。");
        if (parseInt(money.text().replace(/,/g, "")) < 100) {
            log("钱不多");
            over(1);
        }
    }
    log("钱够了");
    let le = element.level;
    let count = 0;
    // 根据等级设置金额
    while (count < le) {
        waitForAndClickAction(id("btn0"), 20e3, 80);
        count++;
    }
    log("提交订单");
    // 提交订单
    waitForAndClickAction(id("btn_send"), 20e3, 80);
    // 确认订单
    waitForAndClickAction(text("确定"), 5e3, 80);
    waitForAndClickAction(text("确定"), 5e3, 80);
    sleep(1000);
    let suc = text("前往交易明细").findOne(2000);
    if (suc) {
        let txt = id("tg333.net:id/tv_resultGameTitle").findOne(2000).text();
        log(txt);
        buy += txt + ",";
        betNum++;
        if (betNum > 10) {
            over(1);
        }
    }
    // 退出支付页面
    back();
    sleep(12000);
    myCaptureScreen();
    sleep(3000);
}

function getAbs(other) {
    log(hour + "==" + other)
    if (hour == 23 && other == 0) {
        return 1;
    } else {
        return Math.abs(other - hour);
    }
}