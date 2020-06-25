"auto";
let {
    clickAction, swipeAndShow, setIntervalBySetTimeout, keycode,
    getSelector, equalObjects, waitForAndClickAction, runJsFile,
    messageAction, debugInfo, killThisApp, clickActionsPipeline,
    waitForAction, baiduOcr, launchThisApp, restartThisApp, observeToastMessage,
    showSplitLine, classof, timeRecorder, surroundWith,
} = require("./MODULE_MONSTER_FUNC");

require("./EXT_TIMERS").load();
require("./Ant_Forest/Modules/EXT_DIALOGS").load();
require("./Ant_Forest/Modules/EXT_THREADS").load();

var Maid = require("./MyMaid.js");
var maid = new Maid();

// let _sec = 5;
// let _diag = _promptSetter();
// let _action = _actionSetter();
// let _thd_et = threads.starts(_thdEt);

// _diag.show();
// _action.wait();

// // tool function(s) //

// function _promptSetter() {
//     let _btnMsg = (btn_name) => {
//         let _btn = _diag_prompt.getActionButton(btn_name);
//         let _regexp = / *\[ *\d+ *] */;
//         log('用户点击"' + btn_name + _btn.replace(_regexp, "") + '"按钮')
//         debugInfo('用户点击"' + _btn.replace(_regexp, "") + '"按钮');
//     };
//     let _diag_prompt = dialogs.builds([
//         "运行提示", "\n即将在 " + _sec + " 秒内运行任务\n",
//         ["", "warn_btn_color"],
//         ["推迟5分钟运行", "caution_btn_color"],
//         ["立即开始  [ " + _sec + " ]", "attraction_btn_color"],
//         1,
//     ]).on("positive", (d) => {
//         _btnMsg("positive");
//         _action.posBtn(d);
//     }).on("negative", (d) => {
//         _btnMsg("negative");
//         _action.negBtn(d);
//     })
//     .on("neutral", (d) => {
//         _btnMsg("neutral");
//         _action.neuBtn(d);
//     })
//     ;

//     return dialogs.disableBack(_diag_prompt, () => _action.pause(100));
// }

// function _actionSetter() {
//     return {
//         posBtn(d) {
//             this._sgn_move_on = true;
//             this.pause(100);
//             d.dismiss();
//         },
//         negBtn(d) {
//             let _d = dialogs.builds(getBuildsParam());
//             this.pause(300);

//             _d.on("negative", (d_self) => {
//                 dialogs.dismiss(d_self);
//             }).on("positive", (d_self) => {
//                 dialogs.dismiss(d_self, d);
//                 messageAction("放弃" + $$app.task_name + "任务", 1, 1, 0, "both");
//                 exit();
//             }).show();

//             // tool function(s) //

//             function getBuildsParam() {
//                 let _task_len = timers.queryTimedTasks({
//                     path: $$app.cwp,
//                 }).length;
//                 let _task_str = $$app.task_name + "定时任务";
//                 let _title = ["注意", "title_caution_color"];
//                 let _pref = "当前未设置任何" + _task_str + "\n\n";
//                 let _main = "确认要放弃本次任务吗";
//                 let _cnt = [_pref + _main, "content_warn_color"];
//                 let _pos_btn = ["确认放弃任务", "caution_btn_color"];
//                 if (_task_len) {
//                     _title = ["提示", "title_default_color"];
//                     _cnt = [_main, "content_default_color"];
//                 }
//                 return [_title, _cnt, 0, "返回", _pos_btn, 1];
//             }
//         },
//         neuBtn(d) {
//             this.pause(300);

//             let _cfg = {
//                 get key_prefix() {
//                     return "prompt_before_running_postponed_minutes";
//                 },
//                 get sto_min() {
//                     return $$cfg[this.key_prefix].toString();
//                 },
//                 set sto_min(v) {
//                     let _new = {};
//                     _new[this.key_prefix] = +v;
//                     $$sto.af_cfg.put("config", _new);
//                     Object.assign($$cfg, _new);
//                 },
//                 get def_choices() {
//                     let _src = $$cfg[this.key_prefix + "_map"];
//                     let _res = {};
//                     _src.forEach(_num => _res[_num] = _num + " min");
//                     return _res;
//                 },
//                 get user_min() {
//                     return $$cfg[this.key_prefix + "_user"].toString();
//                 },
//                 set user_min(v) {
//                     let _new = {};
//                     _new[this.key_prefix + "_user"] = +v;
//                     $$sto.af_cfg.put("config", _new);
//                     Object.assign($$cfg, _new);
//                 }
//             };

//             if (+_cfg.sto_min) {
//                 d.dismiss();
//                 return $$app.setPostponedTask(_cfg.sto_min);
//             }

//             let _map = _cfg.def_choices; // ["1 min", "5 min"...]
//             let _map_keys = Object.keys(_map); // [1, 2, 5, 10...]

//             dialogs.builds([
//                 "设置任务推迟时间", "",
//                 0, "返回", ["确定", "warn_btn_color"],
//                 1, "记住设置且不再提示",
//             ], {
//                 items: _map_keys.map(v => _map[v]),
//                 itemsSelectMode: "single",
//                 itemsSelectedIndex: _map_keys.indexOf((_cfg.user_min)),
//             }).on("negative", (d_self) => {
//                 d_self.dismiss();
//             }).on("positive", (d_self) => {
//                 dialogs.dismiss(d_self, d);
//                 _cfg.user_min = _map_keys[d_self.getSelectedIndex()];
//                 if (d_self.promptCheckBoxChecked) _cfg.sto_min = _cfg.user_min;
//                 $$app.setPostponedTask(_cfg.user_min);
//             }).show();
//         },
//         pause(interval) {
//             _thd_et.interrupt();
//             setTimeout(function () {
//                 let _cont = dialogs.getContentText(_diag);
//                 let _cont_txt = _cont.replace(
//                     /.*(".+".*任务).*/, "请选择$1运行选项"
//                 );
//                 _diag.setContent(_cont_txt);
//                 let _pos = _diag.getActionButton("positive");
//                 let _pos_txt = _pos.replace(/ *\[ *\d+ *]$/, "");
//                 _diag.setActionButton("positive", _pos_txt);
//             }, interval || 800);
//         },
//         wait() {
//             if (!waitForAction(() => this._sgn_move_on, 5 * 60e3)) {
//                 _diag.dismiss();
//                 _thd_et = _diag = null;
//                 messageAction("强制结束脚本", 4, 0, 0, -1);
//                 messageAction("等待运行提示对话框操作超时", 9, 1, 0, 1);
//             }
//         },
//     };
// }

// // thread function(s) //

// function _thdEt() {
//     while (--_sec) {
//         let _cont = dialogs.getContentText(_diag);
//         _diag.setContent(_cont.replace(/\d+/, _sec));
//         let _pos = _diag.getActionButton("positive");
//         let _pos_str = _pos.replace(/ *\[ *\d+ *]$/, "");
//         let _pos_txt = _pos_str + "  [ " + _sec + " ]";
//         _diag.setActionButton("positive", _pos_txt);
//         sleep(1e3);
//     }
//     debugInfo(["运行提示计时器超时", "任务自动继续"]);
//     _action.posBtn(_diag);
// }



// setInterval(function go(){
//     engines.execScriptFile("/storage/emulated/0/脚本/蚂蚁森林.js")
// }, 30000)
// threads.start(function () {
//     let _ts = Date.now() + 2 * 60e3;
//     let _par = { path: "/storage/emulated/0/脚本/蚂蚁森林.js", date: _ts };
//     timers.addDisposableTask(_par);
// })
// setTimeout(

// )


// let eng=engines.myEngine()
// let engStr=eng.cwd().toString()+eng.getSource().toString();
// log(eng.getSource().toString())
// log(eng.getSource().toString())
// log(engStr)

// while(1){
//     sleep(2000);
//     waitForAndClickAction(id("btnClose"), 2e3, 80)
// }

// let b = null;
// while ((b = text("小能量").findOne("2000")) != null) {
//     maid.clickCenter(b);
//     waitForAndClickAction(id("btnClose"), 10e3, 80)
//     if(id("btnClose").findOne(1000)!=null){
//         waitForAndClickAction(id("btnClose"), 8e3, 80)
//     }

// }

// while ((b = text("大能量").findOne("2000")) != null) {
//     maid.clickCenter(b);

//     waitForAndClickAction(id("tt_video_ad_close_layout"), 60e3, 80)
//     waitForAndClickAction(id("btnClose"), 5e3, 80)
//     waitForAndClickAction(id("btnClose"), 8e3, 80)
// }

// launchThisApp("快看点")
// sleep(5000)
// let btn=id("com.yuncheapp.android.pearl:id/normal_icon_container").find()
// if(null!=btn){
//     maid.clickCenter(btn[4]);

//     waitForAndClickAction(text("大转盘"), 3e3, 80)

//     while (textEndsWith("可继续").findOne(2000) == null) {
//         let b = className("android.widget.ListView").findOne(2000);
//         log(b)
//         let cj = b.children()[4];
//         log(cj)
//         maid.clickCenter(cj)
//         b = text("收入囊中").findOne(3000);
//         if (b == null) {
//             waitForAndClickAction(className("android.widget.ImageView"), 60e3, 80)
//         } else {
//             waitForAndClickAction(text("收入囊中"), 5e3, 80)
//         }
//         sleep(2000);
//     }
// }




// var btn=textStartsWith("家庭积分").findOne(2000)
// log(btn)

// waitForAndClickAction(textStartsWith("家庭积分"), 10e3, 80)

// waitForAndClickAction(id("com.softbank.flybank.rest.xy.zyczyh:id/iv"), 10e3, 80)
// // sleep(2000);
// waitForAndClickAction(desc("订单查询 ").clickable(true), 10e3, 80)

// b = desc("筛选 ").findOne(2000);
// log(b)
// maid.clickCenter(b);
// waitForAndClickAction(desc("查询 "), 10e3, 80)
// if (descContains("已失效").findOne(2000)) {
//     killThisApp(name, { debug_info_flag: "forcible", })
//     closeHeartAndExit()
// }
// let bs = descStartsWith("聚合支付").find();
// let arr = []
// bs.forEach(element => {
//     log(element.desc())
//     arr.push(element.desc())
// });


// // let arr=desc("订单查询").clickable(true).findOne(2000);
// let arr=className("android.view.View").desc("订单查询 ").findOne()
// // let arr=id("merchOrderManagerPage").findOne(2000);

// log(arr);

// let name = "com.softbank.flybank.rest.xy.zyczyh";
// launch(name);

// let name = "com.softbank.flybank.rest.xy.zyczyh";

// let b=id("J_barrier_free").findOne(2000)

// log(b)

// close(name);

// function close(packageName) {
//     var name = getPackageName(packageName);
//     if (!name) {
//         if (getAppName(packageName)) {
//             name = packageName;
//         } else {
//             return false;
//         }
//     }
//     app.openAppSetting(name);
//     text(app.getAppName(name)).waitFor();
//     let is_sure = textMatches(/(.*强制.*|.*停止.*|.*结束.*|.*运行.*)/).findOne(2000);

//     if (is_sure.enabled()) {
//         is_sure.click()
//         textMatches(/(.*确.*|.*定.*)/).findOne().click();
//         log(app.getAppName(name) + "应用已被关闭");
//         sleep(1000);
//         back();
//     } else {
//         log(app.getAppName(name) + "应用不能被正常关闭或不在后台运行");
//         back();
//     }
// }


// launchThisApp("我的小程序")

// log(80e3)

// let b=textStartsWith("+").find();
// b.forEach(element => {
//     // log(element)
//     element.click()
//     sleep(4)
// });

// let b=id("J_openBox").findOne(2000)
// log(b)

// while(1){
//     swipe(device.width / 2, device.height-500,
//         device.width / 2, device.height/4, 300);
// }


// let rv=id("android:id/list").findOne(2000)
// log(rv.childCount())


// let b=className("android.widget.TextView").textEndsWith("签到").find();
// log(b[0])
// b.forEach(element => {
//     log(element)
// });


// var url = "http://192.168.1.166:7070/wep/api/systemUser/login";
// r = http.postJson(url, {
//     "password": "string",
//     "username": "string"
//   });
// toastLog(r.body.string());
// let current_e_id = engines.myEngine().id;
// if (!requestScreenCapture(false)) {
//   log("请求截图失败");
//   exit();
// } else {
//   console.log("请求权限");
//   //截图
//   var im = captureScreen();
//   var path = "/sdcard/照片/screenshot.png";
//   im.saveTo(path);
//   // try {
//   //   //保存图片
//   //   im.saveTo(path);
//   //   //把图片加入相册
//   //   media.scanFile(path);
//   // } catch (e) {
//   //   log(current_e_id);
//   //   log("异常freestar--" + e);
//   //   // kill();
//   // }

//   log("请求截图结束了");
// }


// auto.waitFor();
// log("通过了")

// var sign = id("frog_float_notgif")
// // .className("android.widget.ImageView").clickable(true).depth(6).
// .findOne(2000);
// if (sign != null) {
//     log("click")
//     clickPointRight(sign);
// } else {
//     log("null")
// }



// function clickPointRight(btn) {
//     log(btn);
//     var b = btn.bounds();
//     log(b);
//     log(b.centerX() + "--" + b.centerY())
//     click(b.right-20, b.centerY());
// }