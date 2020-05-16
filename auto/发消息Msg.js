"auto"

var MyUrl = require("./MyUrl.js");
var myUrl = new MyUrl();

var url = myUrl.baseUrl + "receiptMsg/add";
var storage = storages.create(myUrl.msgKey);

var data = storage.get(myUrl.msgContentKey, "-1");
var da = data;
if (data == "-1") {
    da = {
        imei: device.getAndroidId(),
        flag: false,
    }
}
log(da)
try {
    r = http.postJson(url, da)
} catch (e) {
    log(e)
}