auto.waitFor();

var name = "TG";

let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");
var Maid = require("./MyMaid.js");
var maid = new Maid();

let swid = 540;
let shei = 1800;
let ewid = 540;
let ehei = 1300;
let team = "";
let count = 0;

let flag = true;

let arr = [];
// killThisApp(name);
// launchApp(name);

// waitForAndClickAction(text("取消"), 20e3, 80)
// id("tg333.net:id/PW_textView").findOne(2000).setText("1314ANtong")
// sleep(1000)
// swipe(180, 1370, 1000, 1470, 1000);
// sleep(5000)

// waitForAndClickAction(text("确定"), 10e3, 80)
// sleep(1000)
// waitForAndClickAction(id("tv_icon3"), 4e3, 80);
// log("点击了历史")
// waitForAndClickAction(text("上周"), 20e3, 80)
// sleep(4000)
let allRv = id("tg333.net:id/rv_money_sub").find();
let rv = allRv.get(1);
let size = rv.childCount() - 2;
log(rv)
while (size > -1) {
    let element = rv.child(size);
    size--;
    // log(element.findOne(id("money_sub_main_item_layout")));
    let be = element.findOne(id("money_sub_money_tv"));
    // let be = element.findOne(id("money_sub_date_tv"));
    log("be--" + size + "==" + be);
    let money = be.text();
    log(parseInt(money))
    if (parseInt(money) == 0) {
        log("int 0 ")
        continue;
    }
    let inn = element.bounds()
    let out = element.boundsInParent()
    log(element)
    click(500, inn.centerY())
    log(out.right + "---" + inn.centerY())
    log(inn.centerX() + "---" + inn.centerY())
    sleep(2000);
    expand()

}
// rv.children().forEach(element => {
//     let inn = element.bounds()
//     let out = element.boundsInParent()
//     click(out.right, inn.centerY())
//     log(out.right+"---"+ inn.centerY())
//     sleep(2000);
//     expand()
// });

log(arr);

function expand() {
    while (1) {
        let rv = id("tg333.net:id/money_sub_detail_rv").findOne(10000);

        let element = rv.child(0);
        let t = element.findOne(id("tg333.net:id/tv_money_detail_main_team1"))
        if (t.text() != team) {
            count = 0;
            team = t.text();
            element.click();
            sleep(1000)
            element = rv.child(0)
            add(element);
        } else {
            swipe(swid, shei, ewid, ehei, 300);
            count++;
            log(team + "===" + count)
            if (count > 5) {
                let size = rv.childCount() - 1;
                while (size > 0) {
                    element = rv.child(size);
                    element.click();
                    sleep(1000)
                    element = rv.child(size);
                    add(element);
                    size--;
                }
                log(arr);
                back();
                sleep(1000)
                return;
            }
        }
    }
}

function go() {
    let rv = id("tg333.net:id/money_sub_detail_rv").findOne(5000);

    while (flag) {
        // // maid.clickCenter(rv.child(0));
        // rv.child(0).click()
        sleep(1000)
        let element = rv.child(0);
        let t = element.findOne(id("tg333.net:id/tv_money_detail_main_team1"))
        log(t.text())
        if (t.text() != team) {
            team = t.text();
            rv.child(0).click();
            count = 0;
            sleep(1000)
            element = rv.child(0)
            add(element);
        } else {
            swipe(swid, shei, ewid, ehei, 300);
            count++;
            log("进入相等的" + count)
            if (count > 2) {
                let size = 0;
                rv.children().forEach(element => {
                    element.click()
                    sleep(1000)
                    element = rv.child(size);
                    log(size)
                    size++;
                    sleep(1000)
                    let num = element.find(id("tg333.net:id/tv_detail_expand_number"))
                    log(num.size())
                    num.forEach(element => {
                        log(element.text())
                        arrNotRepeat(element.text());
                    });
                });
                // back();
                count == 0;
                log(arr)
                return;
            }
        }
    }

}

function add(element) {
    let num = element.find(id("tg333.net:id/tv_detail_expand_number"))
    num.forEach(element => {
        log(num.size() + "==" + element.text())
        arrNotRepeat(element.text());
    });
}



// rv.children().forEach(element => {
//    let num= element.find(id("tg333.net:id/tv_detail_expand_number"))
//     log(num.size())
//     let t=element.findOne(id("tg333.net:id/tv_money_detail_main_team1"))
//     log(t.text())
//     num.forEach(element => {
//         log(element.text())
//         arrNotRepeat(element.text());
//     });
//     exit()
// });



function arrNotRepeat(str) {
    if (arr.indexOf(str) == -1) {
        log(team + "==" + str)
        arr.push(str);
    }
}