"auto";

var thread = threads.start(function(){
    //在子线程执行的定时器
    setInterval(function(){
        log("子线程:" + threads.currentThread());
    }, 1000);
});

log("当前线程为主线程:" + threads.currentThread());

//等待子线程启动
thread.waitFor();
//在子线程执行的定时器
thread.setTimeout(function(){
    //这段代码会在子线程执行
    log("当前线程为子线程:" + threads.currentThread());
}, 2000);

sleep(30 * 1000);
thread.interrupt();