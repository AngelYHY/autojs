"auto"


var MyUrl = require("./MyUrl.js");
var myUrl = new MyUrl();

var date=new Date("2020-02-03 11:20:00")
log(date)

// var url = myUrl.baseUrl + "receiptMsg/add";

// var date = new Date();
// date.setDate(date.getDate() + 5)
// log(date.getDate());

// var dat = date.getDate();
// if (dat < 10) {
//     dat = "0" + dat;
// }
// var mon = date.getMonth();
// if (mon < 10) {
//     mon = "0" + mon;
// }

// var minu = date.getMinutes()
// if (minu == 0) {
//     minu = 60;
// }
// var minu = date.getHours()

// log(date.getMinutes());

// var file = "/sdcard/AutoFile/alipay.txt";
// var arr = files.read(file)
// arr = JSON.parse(arr)
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     element = arr[i];
//     log(element)
//     if (element.content < 0) {
//         log("xiaoyu 0")
//     }
//     var day = element.date.split(",")
//     log(day[0])
//     var time = day[1].split(":")[1];
//     log(time)
//     if (minu - time < 2) {
//         break;
//     }
//     newArr.push({
//         amount: element.content,
//         time: element.date,
//     })

// }
// if (newArr.length > 0) {
//     var lo={
//         imei: device.getAndroidId(),
//         list: newArr,
//     }
//     log(lo);
//     // r = http.postJson(url, lo)
// }

// let date = new Date();
// date.setMinutes(date.getMinutes() - date.getTimezoneOffset()); // toJSON 的时区补偿
// date.toJSON().substr(0, 13).replace(/[-T]/g, ''); //2017021822


function format(date) {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset()); // toJSON 的时区补偿
    return date.toJSON().substr(0, 13).replace(/[-T]/g, '');
}
function getyyyyMMdd(d) {
    // var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    String(curr_month).length < 2 ? (curr_month = "0" + curr_month) : curr_month;
    String(curr_date).length < 2 ? (curr_date = "0" + curr_date) : curr_date;
    var yyyyMMdd = curr_year + "" + curr_month + "" + curr_date;
    return yyyyMMdd;
}    