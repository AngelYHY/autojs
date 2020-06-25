require("./EXT_TIMERS").load();
require("./Ant_Forest/Modules/EXT_DIALOGS").load();
require("./Ant_Forest/Modules/EXT_THREADS").load();

function MyMaid(packageName) {

    this.showDialog = function showDialog() {

        let _sec = 5;
        let _diag = _promptSetter();
        let _action = _actionSetter();
        let _thd_et = threads.starts(_thdEt);

        _diag.show();
        _action.wait();

        // tool function(s) //

        function _promptSetter() {
            let _btnMsg = (btn_name) => {
                let _btn = _diag_prompt.getActionButton(btn_name);
                let _regexp = / *\[ *\d+ *] */;
                log('用户点击"' + btn_name + _btn.replace(_regexp, "") + '"按钮')
                debugInfo('用户点击"' + _btn.replace(_regexp, "") + '"按钮');
            };
            let _diag_prompt = dialogs.builds([
                "运行提示", "\n即将在 " + _sec + " 秒内运行任务\n",
                ["结束", "warn_btn_color"],
                ["推迟5分钟运行", "caution_btn_color"],
                ["立即开始  [ " + _sec + " ]", "attraction_btn_color"],
                1,
            ]).on("positive", (d) => {
                _btnMsg("positive");
                _action.posBtn(d);
            }).on("negative", (d) => {
                _btnMsg("negative");
                _action.negBtn(d);
            }).on("neutral", (d) => {
                _btnMsg("neutral");
                _action.neuBtn(d);
            });

            return dialogs.disableBack(_diag_prompt, () => _action.pause(100));
        }

        function _actionSetter() {
            return {
                posBtn(d) {
                    this._sgn_move_on = true;
                    this.pause(100);
                    d.dismiss();
                },
                negBtn(d) {
                    this._sgn_move_on = true;
                    this.pause(100);
                    d.dismiss();

                    let _ts = Date.now() + 300e3;
                    let _par = { path: engines.myEngine().getSource().toString(), date: _ts };
                    timers.addDisposableTask(_par);

                    exit();


                    // tool function(s) //

                    function getBuildsParam() {
                        let _task_len = timers.queryTimedTasks({
                            path: $$app.cwp,
                        }).length;
                        let _task_str = $$app.task_name + "定时任务";
                        let _title = ["注意", "title_caution_color"];
                        let _pref = "当前未设置任何" + _task_str + "\n\n";
                        let _main = "确认要放弃本次任务吗";
                        let _cnt = [_pref + _main, "content_warn_color"];
                        let _pos_btn = ["确认放弃任务", "caution_btn_color"];
                        if (_task_len) {
                            _title = ["提示", "title_default_color"];
                            _cnt = [_main, "content_default_color"];
                        }
                        return [_title, _cnt, 0, "返回", _pos_btn, 1];
                    }
                },
                neuBtn(d) {
                    this._sgn_move_on = true;
                    this.pause(100);
                    d.dismiss();
                    exit();
                },
                pause(interval) {
                    _thd_et.interrupt();
                    setTimeout(function () {
                        let _cont = dialogs.getContentText(_diag);
                        let _cont_txt = _cont.replace(
                            /.*(".+".*任务).*/, "请选择$1运行选项"
                        );
                        _diag.setContent(_cont_txt);
                        let _pos = _diag.getActionButton("positive");
                        let _pos_txt = _pos.replace(/ *\[ *\d+ *]$/, "");
                        _diag.setActionButton("positive", _pos_txt);
                    }, interval || 800);
                },
                wait() {
                    if (!waitForAction(() => this._sgn_move_on, 5 * 60e3)) {
                        _diag.dismiss();
                        _thd_et = _diag = null;
                        messageAction("强制结束脚本", 4, 0, 0, -1);
                        messageAction("等待运行提示对话框操作超时", 9, 1, 0, 1);
                    }
                },
            };
        }

        // thread function(s) //

        function _thdEt() {
            while (--_sec) {
                let _cont = dialogs.getContentText(_diag);
                _diag.setContent(_cont.replace(/\d+/, _sec));
                let _pos = _diag.getActionButton("positive");
                let _pos_str = _pos.replace(/ *\[ *\d+ *]$/, "");
                let _pos_txt = _pos_str + "  [ " + _sec + " ]";
                _diag.setActionButton("positive", _pos_txt);
                sleep(1e3);
            }
            debugInfo(["运行提示计时器超时", "任务自动继续"]);
            _action.posBtn(_diag);
        }
    }

    this.packageName = packageName;
    if (packageName && !getAppName(packageName)) {
        toast("找不到此应用, 无法提供服务");
        this.sleep(1000);
        exit();
    }

    this.clickPointRight = function clickPointRight(widget) {
        if (!widget)
            return false;
        var b = widget.bounds();
        return click(b.right - 20, b.centerY());
    }

    this.getThreeImg = function () {
        gestures([350, [300, 400], [300, 1400]],
            [350, [600, 400], [600, 1400]],
            [350, [900, 400], [900, 1400]]);

        sleep(3000)

    };

    this.clickPointLeft = function clickPointLeft(widget) {
        if (!widget)
            return false;
        var b = widget.bounds();
        return click(b.left + 20, b.centerY());
    }

    this.click = function (x, y) {
        return click(x, y);
    };
    this.clickCenter = function (widget) {
        if (!widget)
            return false;
        let rect = widget.bounds();
        log(widget + "++clickCenter")
        return click(rect.centerX(), rect.centerY());
    };

    this.clickSelectorCenter = function (selector) {
        if (!selector)
            return false;
        let widget = selector.findOne(2000);
        return this.clickCenter(widget);
    };

    this.clickMulti = function (points, interval) {
        points.forEach(function (point) {
            this.click(point[0], point[1]);
            this.sleep(interval);
        }.bind(this));
    };

    this.clickMultiCenter = function (widgets) {
        if (!widgets || widgets.length == 0)
            return;

        var points = [];
        widgets.forEach(function (widget) {
            var rect = widget.bounds();
            points.push([rect.centerX(), rect.centerY()]);
        });
        this.clickMulti(points);
    };
    this.clickIdCenter = function (idStr) {
        if (!idStr)
            return false;
        return this.clickSelectorCenter(id(idStr));
    };
    this.clickTextCenter = function (str) {
        if (!str)
            return false;
        return this.clickSelectorCenter(text(str));
    };
    this.clickRegTextCenter = function (str) {
        if (!str)
            return false;
        return this.clickSelectorCenter(textMatches(str));
    };
    this.clickDescCenter = function (str) {
        if (!str)
            return false;
        return this.clickSelectorCenter(desc(str));
    };
    this.clickRegDescCenter = function (str) {
        if (!str)
            return false;
        return this.clickSelectorCenter(descMatches(str));
    };

    this.clickClassCenter = function (classNameStr) {
        if (!className)
            return false;
        return this.clickSelectorCenter(className(classNameStr));
    };


    // index表示第几个文字, 从1开始
    this.clickNTextCenter = function (str, index) {
        if (!str)
            return false;
        let widgets = text(str).find();
        if (!widgets)
            return false;

        index--
        for (let i = 0; i < widgets.length; i++) {
            let widget = widgets[i];
            if (i == index)
                return this.clickCenter(widget);
            else
                continue;
        }
        return false;
    };


    this.pageUp = (counter, time) => {
        if (counter && time) {
            for (let i = 0; i < counter; i++) {
                scrollUp();
                this.sleep(time);
            }
        } else {
            scrollUp();
        }
    };
    this.pageDown = (counter, time) => {
        if (counter && time) {
            for (let i = 0; i < counter; i++) {
                scrollDown();
                this.sleep(time);
            }
        } else {
            scrollDown();
        }
    };
    this.swipe = function (x1, y1, x2, y2, duration) {
        swipe(x1, y1, x2, y2, duration);
    };
    this.sleep = (second) => {
        sleep(second * 1000);
    };
    this.back = function () {
        back();
    };
    this.home = function () {
        home();
    };
    this.shell = function (command) {
        shell(command, true);
    };
    this.launch = function () {
        launch(this.packageName);
    };
    this.waitForActivity = function (activityName) {
        waitForActivity(activityName);
    };
    this.launchActivity = function (activityName) {
        shell("am start -n " + this.packageName + "/" + activityName, true);
        waitForActivity(activityName);
    };
    this.kill = function () {
        shell("am force-stop " + this.packageName, true);
    };
    this.before = function (ignoreSleep) {
        let source = engines.myEngine().source.toString();
        source = source.replace("/storage/emulated/0/脚本/", "");
        toast("开始执行[" + source + "]...");

        const WIDTH = Math.min(device.width, device.height);
        const HEIGHT = Math.max(device.width, device.height);
        setScreenMetrics(WIDTH, HEIGHT);
        if (!ignoreSleep)
            this.sleep(random() * 10); //随机睡眠[0-10]秒, 使签到\打卡时间不固定
    };
    this.after = function () {
        let source = engines.myEngine().source.toString();
        source = source.replace("/storage/emulated/0/脚本/", "");
        toast("结束执行[" + source + "]...");
        exit();
    };

    this.getCaptureImg = () => {
        var img = captureScreen();
        if (!img || typeof (img) == "undifined") {
            console.log("截图失败,退出脚本");
            exit();
        } else {
            return img;
        }
    };

    // this.openAuto = function openAuto(count) {
    //     recents()
    //     var t = text("Auto.js").findOne(5000);
    //     if (!this.clickCenter(t)) {
    //         var widget = descContains("Auto").findOne(5000);
    //         log(this.clickCenter(widget) + "+++")
    //     };
    //     // if(count==1){
    //     //     var widget = descContains("Auto").findOne(5000);
    //     //     this.clickCenter(widget)
    //     // }else{
    //     //     var widget = text("Auto.js").findOne(5000);
    //     //     this.clickCenter(widget)
    //     // }
    //     log(t);
    //     sleep(2000);
    //     log("睡觉结束")

    //     recents()
    //     launchApp("Auto.js")
    //     var b = id("action_log");
    //     if (!b.findOne(2000)) {
    //         this.openAuto()
    //     }
    //     if (!b.findOne(2000)) {
    //         log("没有打开成功")
    //         exit();
    //     }
    // }

    this.openAuto = function openAuto() {
        launchApp("Auto.js")
        sleep(2000);
        var b = id("action_log");
        if (!b.findOne(2000)) {
            recents()
            var t = text("Auto.js").findOne(5000);
            if (!this.clickCenter(t)) {
                var widget = descContains("Auto").findOne(5000);
                log(this.clickCenter(widget) + "+++")
            };
            sleep(2000);
            if (!b.findOne(2000)) {
                log("没有打开成功")
                exit();
            }
        }
    }

    this.recentOpenAuto = function recentOpenAuto() {
        recents()
        var t = text("Auto.js").findOne(5000);
        if (!this.clickCenter(t)) {
            var widget = descContains("Auto").findOne(5000);
            log(this.clickCenter(widget) + "+++")
        };
        sleep(2000);
        var b = id("action_log");
        if (!b.findOne(2000)) {
            launchApp("Auto.js")
            sleep(2000);
            if (!b.findOne(2000)) {
                log("没有打开成功")
                exit();
            }
        }
    }

    this.sleepOpenAuto = function sleepOpenAuto() {
        sleep(1000);
        launchApp("Auto.js")
        sleep(1000);
    }

    this.resetOpenAuto = function resetOpenAuto() {
        sleep(1000);
        this.recentOpenAuto()
        this.clear();
        // sleep(10000);
        // launchApp("Auto.js")
        this.openAuto()
        sleep(1000);
    }

    this.clear = function clear() {
        recents()
        sleep(1000);
        var cav = id("com.android.systemui:id/clearAnimView").findOne(5000);
        this.clickCenter(cav);
        sleep(1000);
    }

    this.reset = function reset() {
        sleep(1000);
        this.openAuto()
        this.clear();
        home()
    }

    this.openAutoCheck = function openAutoCheck() {
        launchApp("Auto.js")
        var b = id("action_log");
        if (!b.findOne(2000)) {
            this.openAuto()
        }
        if (!b.findOne(2000)) {
            log("没有打开成功")
            exit();
        }
    }

    this.getImg = function getImg(path) {
        try {
            var im = captureScreen();
            im.saveTo(path);
            return true;
        } catch (e) {
            log(e);
            return false;
        }

    }

    this.reqCapture = function reqCapture() {
        // this.sleepOpenAuto()
        // var b = id("action_log");
        // while (!b.findOne(2000)) {
        //     log("一直在点")
        //     this.sleepOpenAuto()
        // }
        this.openAutoCheck()
        // 截图权限申请
        threads.start(function () {
            var beginBtn;
            if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
                beginBtn.click();
            }
        });
        if (!requestScreenCapture(false)) {
            log("请求截图失败");
            exit();
        }
        sleep(2000)
    }

    this.remind = function remind() {
        var d = dialogs.build({
            title: "即将开始autojs定时任务, 请放下设备等待处理!",
            canceledOnTouchOutside: false
        }).show();

        setTimeout(() => {
            d.dismiss();
        }, 1000);
        log("睡觉咯")
        sleep(3000);
    }


}

module.exports = MyMaid;