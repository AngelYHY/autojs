
function MyUnlock() {
    this.unlock = function () {
        if (device.isScreenOn()) {
            return;
        }

        //点亮屏幕
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

        //等待解锁完成，返回并退出
        back();
    }
}


module.exports = MyUnlock;