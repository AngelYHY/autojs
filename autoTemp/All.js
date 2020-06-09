auto.waitFor();

var Maid = require("./MyMaid.js");
var maid = new Maid();
var Unlock = require("./MyUnlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
var MyUrl = require("./MyUrl.js");
var myUrl = new MyUrl();
var file = myUrl.file;
files.createWithDirs(file)
files.write(file,"");

let {
    ysf
} = require("./云闪付");

let {
    fjdzz
} = require("./黄金大作战");

let {
    soul
} = require("./soul");

let {
    yitao
} = require("./一淘sign");

ysf();
soul();
yitao();
fjdzz();

log("还会执行吗？")
