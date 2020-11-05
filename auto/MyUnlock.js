
require("./EXT_TIMERS").load();

function MyUnlock() {
    this.unlock = function () {
        let eng = engines.all();

        if (eng.length > 1) {
            log("个数：000")
            let eng = engines.myEngine();
            let engStr = eng.getSource().toString();
            // 五分钟 300s
            let _ts = Date.now() + 300e3;
            let _par = { path: engines.myEngine().getSource().toString(), date: _ts };
            timers.addDisposableTask(_par);
            // 结束正在运行的脚本
            engines.stopAll();
        }
        if (device.isScreenOn()) {
            return;
        }
        log("需要亮屏");
        //点亮屏幕Í
        device.wakeUp();
        sleep(700);

        //miui锁屏滑动不能唤出密码输入 通过下拉通知栏点击时间进入密码解锁
        swipe(500, 30, 500, 1000, 300);
        sleep(400);

        //点击“时间”
        click(100, 200);
        sleep(1000);

        //解锁 密码 0529
        desc(0).findOne().click();
        desc(5).findOne().click();
        desc(2).findOne().click();
        desc(9).findOne().click();

        sleep(2000);
        //等待解锁完成，返回并退出
        home();
    }
}


module.exports = MyUnlock;