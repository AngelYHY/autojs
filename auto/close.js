auto.waitFor();


var Maid = require("./MyMaid.js");
var maid = new Maid();

let swid = 540;
let shei = 1800;
let ewid = 540;
let ehei = 1600;


let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");


// log(text("点击领取").findOne("2000"));
// swipe(swid, shei, ewid, ehei, 300);
// sleep(1000);
// let rvs = id("rv_predict_list").find();
// r = rvs.get(0);
// log(r.childCount());
// r.child(15).click();

// let str="23,43.32".replace(/,/g, "");
// log(parseInt(str));

// let b = id("sv_layout").findOne(2000);
// let ah = b.findOne(className("TextView"));
// log(ah);
// log(ah.text());
// log(ah.drawingOrder());

// let b = id("tv_option").findOne(2000);
// let arr = b.text().replace(/ /g, "").split("-");
// log((parseInt(arr[0]) + parseInt(arr[1])));

// let l = ["11", 222, 233];


// waitForAndClickAction(id("tv_icon3"), 4e3, 80);

// l.forEach(function (value, index) {
//     if (value == 11) {
//         continue;
//     }
//     log(value);
// })


// for (let index = 0; index < l.length; index++) {
//     let value = l[index];
//     if (value == 11) {
//         continue;
//     }
//     log(value);
// }
// for (let index = 0; index < array.length; index++) {
//     let element = array[index];

// }

// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];

//     }
// }

// for (let value of l) {
//     if (value == 11) {
//         continue;
//     }
//     log(value);
// }

// l.map(function(value,index,l){
//     if (value == 11) {
//         continue;
//     }
//     log(value);
// })

// let buy = "";
// let rv = id("rv_billReceiptList").findOne(4000)

// rv.children().forEach(element => {
//     let txt = element.findOne(id("tv_group1")).text();
//     log(txt);
//     buy += txt;
// });
// log(buy);
// var name = "TG";
// killThisApp(name)
// launchApp(name);

// let trade=text("市场列表").findOne(2000);
// log(trade);

// maid.clickCenter(trade);

// setScreenMetrics(1080, 2340);

// let width = device.width;
// let height = device.height;

// log(width + "---" + height)
// log((width / 5 + 100) + "--" + (height - 100));
// click(width / 5 + 100, height - 100);


// var obj = new Date();
// var hour = obj.getHours();
// // alert(hour);
// log(hour)

// let int = 15;
// log(Math.abs(hour - int))
// // log(hour - int)


// log(Math.abs(hour - int))


// function getAbs(now, other) {
//     if (now == 23 && other == 0) {
//         return 1;
//     }
// }

// let width = device.width;
// let height = device.height;
// var ra = new RootAutomator();
// ra.tap(50, height - 50, 1);

// ra.swipe(width/2,width/2,height/2,height/2-200,3000)
// ra.swipe(width/2,height/2,width/2,height/2-200,300)
// click(50,height-50)


// let rv=id("rv_predict_list").find();
// log(rv.size())
// let r=rv.get(1);
// let ll=id("linearLayout19").find()
// log(ll.size());
// let r = className("androidx.recyclerview.widget.RecyclerView").findOne(2000)
// let zeroZero = r.child(0).findOne(id("tv_profit")).text().replace(/%/g, "");

// let t=text("0 - 0").findOne(2000).parent
// id("tv_profit").find(2000)
// log("半场0.0 水位" + zeroZero)

// let str="09-07 01:00";
// str=str.slice(-5,-3)
// log(parseInt(str))


// var btn=id("com.dotcore.yypay:id/qrcode_img").findOne(2000)
// var btn=id("com.taobao.etao:id/home_views_circle_nav_item_image").findOne(2000)
// .find(className("android.widget.ImageView"))
// // .className("android.widget.ImageView")
// // .findOne(2000)
// log(btn)

// shell("screencap /sdcard/照片/screen.png");

// requestScreenCapture();
// captureScreen("/sdcard/照片/" + new Date().getTime() + ".png");

// //循环找色，找到红色(#ff0000)时停止并报告坐标
// // while(true){
//     // var img = captureScreen("/sdcard/"+new Date().getTime()+".png");
//     var img = images.read("/sdcard/照片/1.png");
//     var point = findColor(img, "#ceff5f");
//     if(point){
//         toast("找到红色，坐标为(" + point.x + ", " + point.y + ")");
//         log("找到红色，坐标为(" + point.x + ", " + point.y + ")")
//     }else{
//         log("没找到")
//     }
// // }

// log(5e3)

// var btn =text("点我签到领钱").findOne(2000);
// log(btn)

// log(launchApp("Soul"))

// killThisApp("一淘", {
//     shell_acceptable: false,
//     debug_info_flag: "forcible",
// });

// killThisApp("支付宝")

// var btn =id("com.taobao.etao:id/is_status_loading_image_view").findOne(1000);
// log(btn)
// maid.clickCenter(btn);
// sleep(5000)
// var vs = textStartsWith("收集能量").find();
// log(vs.length)
// vs.forEach(element => {
//     log(element)
//     maid.clickCenter(element);
// });

// var url="https://render.alipay.com/p/s/i?scheme=alipays://platformapi/startapp?appId=2018100961599704&page=pages/transfer/transfer?amount=100&chInfo=moneyBox&frontBizNo=&remark=2020dd04346509910&uid=2088802152486721";
// log(encodeURIComponent(encodeURIComponent(url)));

// var b=desc("朋友").findOne(4000);
// log(b.selected());

// var vs=id("com.alipay.mobile.socialwidget:id/recent_list").findOne(2000)
// var vs = id("com.alipay.mobile.socialwidget:id/item_memo").find();
// if(vs){
//     log(vs.length);
// }else{
//     log("null")
// }
// if (!vs&&vs.empty()) {
//     log("没找到╭(╯^╰)╮")
// } else {
//     log("找到啦")
//     log(vs.length());
//     // vs.forEach(element => {
//     //     log(element)
//     // });
// }
// launchApp("Soul");

// var tt = desc("收款二维码").findOne(5000);
// if (!tt) {
//     // reset();
//     // exit();
//     log("没有")
// }else{
//     log("有哦")
// }

// log("开始");
// var result = shell("am force-stop com.tencent.mm", true);
// log(result+"111");
// console.show();
// if(result.code == 0){
//   toast("执行成功");
//   log("执行成功");
// }else{
//   toast("执行失败！请到控制台查看错误信息");
//   log("执行失败！请到控制台查看错误信息");
// }

// let current_e_id = engines.myEngine().id;
// log(current_e_id);
// log(engines.all());

// log(engines.myEngine().getSource());

// var es = engines.all();

// es.forEach(element => {
//     log(element);
//     if (element.getSource().indexOf("all")) {
//         element.forceStop()
//         log("结束了");
//         // break;
//         // return;
//     }
// });

// for (var element in es) {
//     log(element);
//     if (element.getSource().indexOf("all")) {
//         element.forceStop()
//         log("结束了");
//         break;
//         // return;
//     }
// }

// var w = boundsInside(0, 0, device.width, device.height / 2).find();
// log(w.text());

// var w = boundsContains(500, 300, device.width - 500, device.height - 300).clickable().findOne();
// // w.click();
// log(w.text());


// var sum = "14.6";
// var chararray = sum.split("");

// var views=className("android.view.View").clickable(true).find();

// for (var i in views) {

//    var v=views[i];
//     log(v);
// }

// for (var e in chararray) {
//     var c = chararray[e];
//     var w;
//     if (c=="."){
//         w= className("android.view.View").clickable(true).depth(10).findOne().parent();
//     }else{
//         w= className("android.view.View").desc(c).findOne();
//     }

//     if (w != null) {
//         log(c);
//         log("dianji");
//         w.click();
//     }

// }

// var w =className("android.view.View").desc("5").findOne();
// log(w);
// if(w!=null){
//     log("dianji");
//     w.click();
// }