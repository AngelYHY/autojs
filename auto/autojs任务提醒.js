// auto.waitFor();
// var Maid = require("./MyMaid.js");
// var maid = new Maid();
// var Unlock = require("./MyUnlock.js");
// var unlock = new Unlock();
// maid.before();

// unlock.unlock();
// maid.sleep(2);
// device.vibrate(2000);
// for(let i = 0; i < 3; i++){
//     toast("即将开始autojs定时任务, 请放下设备等待处理!");
// }
// maid.after();

var d = dialogs.build({
    title: "5s 后将开始autojs定时任务, 请放下设备等待处理!",
    canceledOnTouchOutside: false
}).show();

// setTimeout(()=>{
//     d.dismiss();
// }, 5000);