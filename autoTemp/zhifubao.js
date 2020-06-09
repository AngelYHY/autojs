"auto";
let an=app.getPackageName("支付宝");
log(an);
// var myEnergeType = ["线下支付", "行走", "共享单车", "地铁购票", "网络购票", "网购火车票", "生活缴费", "ETC缴费", "电子发票", "绿色办公", "咸鱼交易", "预约挂号"];

// launchApp("支付宝");

// tLog("等待支付宝启动");
// sleep(2000)
// click("蚂蚁森林");
// sleep(3000)
// var uc = className("TextView").find();
// if (uc.size() > 0) {
//     uc.forEach(function (tv) {
//         if(tv.text() != ""){
//             log(tv.text());
//         }
//     })
// }else{
//     log("没有找到")
// }

// descEndsWith("通知").find().forEach(function (pos) {
//     // var posb = pos.bounds();
//     // click(posb.centerX(), posb.centerY() - 80);
//     // sleep(1500);
//     tLog("执行一个");
// });

// var c = descEndsWith("文件").find();
// if (c.empty()) {
//     toast("没找到╭(╯^╰)╮");
// } else {
//     toast("找到啦~");
//     c.forEach(function (pos) {
//         var posb = pos.bounds();
//         var x = posb.centerX;
//         var y = posb.centerY;
//         // var msg=posb.centerX;
//         var msg = x + y;
//         log(msg);
//         log("11");
//     })
// }

// className("TextView").find().forEach(function(tv){
//     if(tv.text() != ""){
//         log(tv.text());
//     }
// });

function tLog(msg) {
    toast(msg);
    console.log(msg)
}

/**
 * 根据能量类型数组生成我的能量类型正则查找字符串
 * @returns {string}
 */
function generateCollectionType() {
    var regex = "/";
    myEnergeType.forEach(function (t, num) {
        if (num == 0) {
            regex += "(\\s*" + t + "$)";
        } else {
            regex += "|(\\s*" + t + "$)";
        }
    });
    regex += "/";
    return regex;
}
