"auto.js"

auto.waitFor();
var Maid = require("./MyMaid.js");
var maid = new Maid();

sign()

function sign() {
    var b = id("com.alipay.mobile.bill.list:id/bill_list_statistic").findOne(5000)
    if (!b) {
        go();
    } else {
        swipe(device.width / 2, device.height / 4,
            device.width / 2, device.height, 300)
    }
    var vs = id("com.alipay.mobile.bill.list:id/listItem").find()
    if (vs.empty()) {
        log("没找到╭(╯^╰)╮")
    } else {
        log("找到啦")
        let arr = []
        vs.forEach(element => {
            var str = element.findOne(id("com.alipay.mobile.bill.list:id/timeInfo1")).text()
                + "," + element.findOne(id("com.alipay.mobile.bill.list:id/timeInfo2")).text();
            arr.push({
                content: element.findOne(id("com.alipay.mobile.bill.list:id/billAmount")).text(),
                date: str,
            });
        });

        log(arr)

        var file = "/sdcard/AutoFile/alipay.txt";
        files.createWithDirs(file)
        files.write(file, JSON.stringify(arr));

        // //用其他应用查看文件
        // app.viewFile(file);

        // var url = "http://192.168.31.166:8080/msg/add";
        // r = http.postJson(url, {
        //     msg: arr
        // });
        // log(r.body.string());
    }
}

function go() {
    maid.resetOpenAuto()
    log("我要开始执行了 这是更新版本哦")

    log(launchApp("支付宝"));

    var t = id("com.alipay.android.phone.wealth.home:id/sigle_tab_bg").findOne(5000)
    t.click();
    sleep(3000)
    var b = id("com.alipay.mobile.antui:id/list_layout").find()
    b = b[2];
    // sleep(3000)
    log(b);
    maid.clickCenter(b)
    sleep(3000)
}

// function reset() {
//     maid.reset();
//     sign()
// }




 // var vs = id("com.alipay.mobile.socialwidget:id/content_layout").find();
    // // log(cl[0])
    // count = 0;
    // while (vs.empty()) {
    //     t.click();
    //     maid.clickCenter(t)
    //     sleep(3000)
    //     vs = id("com.alipay.mobile.socialwidget:id/content_layout").find();
    //     if (count > 5) {
    //         exit()
    //     }
    //     count++;
    // }

    // // var vs = id("com.alipay.mobile.socialwidget:id/item_memo").find();

    // if (vs.empty()) {
    //     log("没找到╭(╯^╰)╮")
    // } else {

    //     log("找到啦")
    //     let arr = []
    //     vs.forEach(element => {
    //         arr.push({
    //             content: element.findOne(id("com.alipay.mobile.socialwidget:id/item_memo")).text(),
    //             date: element.findOne(id("com.alipay.mobile.socialwidget:id/item_date")).text(),
    //         });
    //     });

    //     log(arr)

    //     var file = "/sdcard/AutoFile/alipay.txt";
    //     files.createWithDirs(file)
    //     files.append(file, JSON.stringify(arr));

    //     // //用其他应用查看文件
    //     // app.viewFile(file);

    //     // var url = "http://192.168.31.166:8080/msg/add";
    //     // r = http.postJson(url, {
    //     //     msg: arr
    //     // });
    //     // log(r.body.string());
    // }