var MyUrl = require("./MyUrl.js");
var myUrl = new MyUrl();
let {
    hex_md5
} = require("./md5");

var storage = storages.create(myUrl.nongshang);

var accountName = storage.get(myUrl.accountName)
log("运行")
let flag = storage.get(myUrl.alive, 1)
if (flag == 1) {
    var timestamp = new Date().getTime();
    let sign = hex_md5(timestamp + device.getAndroidId());
    log(sign + "--" + timestamp + "--" + device.getAndroidId())
    var url = myUrl.nongshangUrl + "baseDevice/monitorHeart?imei="
        + device.getAndroidId() + "&accountName=" + accountName
        + "&time=" + timestamp
        + "&sign=" + sign
        ;
    var r = http.get(url)
    try {
        let str = r.body.json();
        log(str)
        if (str.status == '200') {
            if (str.data.open == 1) {
                engines.execScriptFile("/sdcard/脚本/农商.js");
            }
        }
    } catch (e) {
        log(e)
    }
} else {
    storage.put(myUrl.alive, 1)
    exit();
}

