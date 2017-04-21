/**
 * Created by admin on 2017/4/21.
 */
var fs = require("fs");
var http = require("http");

function Response(filepath,res){
    var data = "";
    // res.writeHead(200,{"Content-Type":"text/html,charset=utf8"});
    // fs.readFile(filepath,function(err,stat){
    //     data = stat.toString();
    //     res.end(data);
    // });
}
module.exports = Response;