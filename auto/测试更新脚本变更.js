"auto";

// swipe(device.width / 2, device.height / 4,
//     device.width / 2, device.height, 300);

// log("重新开始执行了")
// var count=0;
// log(count)

// sleep(2000)
// count++;
// log(count)
// sleep(5000)
// log("ayaha")
// id("as_inner_list_view").findOne().children().forEach(child => {
//     var target = child.findOne(id("timeInfo2"));
//     log(target)
//     });

// var b = id("com.alipay.mobile.bill.list:id/billAmount").findOne(2000)
// log(b)
// b = b.parent()
// log(b)
// b = b.parent()
// log(b)
// b = b.parent()
// log(b)
// b = b.parent()
// log(b)

// var b=id("com.alipay.mobile.bill.list:id/timeInfoContainer").find()
// // log(b)
// vs=b;
// if (!vs && vs.empty()) {
//     log(vs.length)
//     vs.forEach(element => {
//         log(element)
//         log(element.findOne(id("com.alipay.mobile.bill.list:id/billAmount").text()))
//         log(element.findOne(id("com.alipay.mobile.bill.list:id/timeInfo1").text()))
//         log(element.findOne(id("com.alipay.mobile.bill.list:id/timeInfo2").text()))
//         b = element.parent()
//         log(b)
//     });
// }else{
//     log("没有")
// }



// var vs = id("com.alipay.mobile.bill.list:id/listItem").find()
// if (!vs && vs.empty()) {
//     log("没有")
// } else {
//     vs.forEach(element => {
//         log(element)
//         log(element.findOne(id("com.alipay.mobile.bill.list:id/billAmount")).text())
//         log(element.findOne(id("com.alipay.mobile.bill.list:id/timeInfo1")).text())
//         log(element.findOne(id("com.alipay.mobile.bill.list:id/timeInfo2")).text())
//         var text = element.findOne(id("com.alipay.mobile.bill.list:id/timeInfo1")).text()
//             + "," + element.findOne(id("com.alipay.mobile.bill.list:id/timeInfo2")).text();
//         log(text);
//     });
// }

// com.alipay.mobile.bill.list:id/as_inner_list_view
// var bs=id("as_inner_list_view").findOne().children()
// log(bs.length)

// var cl=id("com.alipay.mobile.socialwidget:id/content_layout").find();
// log(cl[0])
// var con=cl[0];
// log(con.findOne(id("com.alipay.mobile.socialwidget:id/item_memo")))
// log(con.findOne(id("com.alipay.mobile.socialwidget:id/item_date")))


// var vs = id("com.alipay.mobile.socialwidget:id/item_memo").find();
// var b=vs[0].parent().parent()
// log(b)
// log(b.parent())