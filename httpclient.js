var http = require('https');
var querystring = require('querystring');
/**
 * 参考微信文章：http://work.weixin.qq.com/api/do：
 * path: department/list 类似，department|user/updateget,create,delete,batchdelete,simplelist,list
 * param：
 * callback: callbackfunction(returnMsg)
 */
exports.get = function (path, param, callback) {

    var path = "/cgi-bin/" + path + "?" + querystring.stringify(param);
    // console.log(path);

    // 用于请求的选项  
    var options = {
        hostname: 'qyapi.weixin.qq.com',
        // port: 443,
        method: 'GET',
        path: path
    };

    var req = http.request(options, (res) => {
        var buffer = '';
        res.on('data', (d) => {
            buffer += d;
        });
        res.on('end', () => {
            var returnMsg = JSON.parse(buffer);
            callback(returnMsg);
        });
    });
    req.on('error', (e) => {
        console.error(e);
        throw e;
    });
    req.end();
}


exports.post = function (path, param, postObj, callback) {

    var path = "/cgi-bin/" + path + "?" + querystring.stringify(param);
    // console.log(path);

    const postData = JSON.stringify(postObj)
    console.log("postData:" + postData);

    const options = {
        hostname: 'qyapi.weixin.qq.com',
        // port: 80,
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData),
        }
    };

    var req = http.request(options, (res) => {
        //@todo, now data is posted by one buffer.
        res.on('data', (d) => {
            var returnMsg = JSON.parse(d);

            if (returnMsg.errcode == 0) {
                callback(returnMsg);
            } else {
                console.error("[Error Message][" + returnMsg.errcode + "]" + returnMsg.errmsg);
            }
        });
    });
    req.on('error', (e) => {
        console.error(e);
        throw e;
    });
    // 写入数据到请求主体
    req.write(postData);
    req.end();
}