"auto";

// 此代码由飞云脚本圈www.feiyunjs.com整理提供
var 时 = 11, 分 = 05, 秒 = 0;

while (true) {
    var myDate = new Date();
    // log(myDate.getMinutes()+"---"+myDate.getSeconds());
    if (myDate.getSeconds() % 5 == 0) {
        // if (myDate.getSeconds() % 55 == 0) {
        //     break;
        // } else {
            log(myDate.getMinutes() + "---" + myDate.getSeconds());
        // }

        // break;
    }
    sleep(1000);
}

print("时间到");



function 替换一个(str, stra, strb) {
    return str.replace(stra, strb)
}

function 全部替换(str, stra, strb) {
    return eval("str.replace(/" + stra + "/g,'" + strb + "')")
}

function 查找(str, stra) {
    return str.search(stra)
}

function 取左边(str, stra) {
    return str.substr(0, str.indexOf(stra));
}

function 取中间(str, stra, strb) {
    return str.substring(str.indexOf(stra) + 1, str.lastIndexOf(strb));
}

function 截取(str, inta, intb) {
    if (intb) {
        return str.substr(inta, intb)
    } else {
        return str.substr(inta)
    }
}





