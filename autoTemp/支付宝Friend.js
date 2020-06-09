"auto.js"

auto.waitFor();
var Maid = require("./MyMaid.js");
var maid = new Maid();

var MyUrl = require("./MyUrl.js");
var myUrl = new MyUrl();

var storage = storages.create(myUrl.msgKey);

var accKey = "accountInfo";

var accountInfo = storage.get(accKey, "-1");

var friendId = "com.alipay.mobile.socialwidget:id/contact_button";
var accountId = "com.alipay.android.phone.wealth.home:id/userinfo_view";

sign()

function sign() {
    var b = id(friendId).findOne(2000)
    if (!b) {
        go();
    }
    var vs = id("com.alipay.mobile.socialwidget:id/content_layout").find();
    if (vs.empty()) {
        log("没找到╭(╯^╰)╮")
    } else {
        let arr = []
        vs.forEach(element => {
            arr.push({
                content: element.findOne(id("com.alipay.mobile.socialwidget:id/item_memo")).text(),
                date: element.findOne(id("com.alipay.mobile.socialwidget:id/item_date")).text(),
                from: element.findOne(id("com.alipay.mobile.socialwidget:id/item_name")).text()
            });
        });
        // log(arr)
        var info;
        if (accountInfo == "-1") {
            info = getAccount()
        } else {
            var data = JSON.parse(accountInfo)
            log("保存的时间----" + data.time)
            if (new Date().getTime() - data.time > 60000) {
                info = getAccount()
            } else {
                info = data.account;
            }
        }
        if (info) {
            var ob = {
                info: info,
                list: arr,
                imei: device.getAndroidId()
            }
            storage.put(myUrl.msgContentKey, ob)
        }

    }

}


function getAccount() {
    var t = id("com.alipay.android.phone.wealth.home:id/sigle_tab_bg").findOne(500)
    maid.clickCenter(t)
    sleep(2000);
    var t = id(accountId).findOne(4000);
    var accInfo;
    if (t) {
        accInfo = {
            name: t.findOne(id("com.alipay.android.phone.wealth.home:id/user_name_left")).text(),
            phone: t.findOne(id("com.alipay.android.phone.wealth.home:id/user_account")).text()
        }
        var o = {
            time: new Date().getTime(),
            account: accInfo
        }
        storage.put(accKey, JSON.stringify(o))
        var t = id("com.alipay.mobile.socialwidget:id/social_bottom_tab").findOne(5000)
        t.click();
        return accInfo;
    }

}

function go() {
    maid.resetOpenAuto()
    log("我要开始执行了 这是更新版本哦")

    log(launchApp("支付宝"));

    var t = id("com.alipay.mobile.socialwidget:id/social_bottom_tab").findOne(5000)
    t.click();
    sleep(2000)
}