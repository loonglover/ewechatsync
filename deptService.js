// var http = require('https');
var httpclient = require('./httpclient');

exports.getToken = (corpid, secretid) => {
    return new Promise((resolve, reject) => {
        var param = {
            corpid: corpid,
            corpsecret: secretid,
        }
        httpclient.get("gettoken", param, (message) => {
            accessToken = message.access_token;
            resolve(accessToken);
        });
    });
};

exports.create = function (token, dept) {
    var param = {
        access_token: token,
    }

    httpclient.post("department/create", param, dept, (message) => {
        console.log("department " + JSON.stringify(dept) + " created ");
    });
}

exports.list = function (token, parentDeptId) {
    return new Promise((resolve, reject) => {
        var param = {
            access_token: token,
            id: parentDeptId,
        }
        httpclient.get("department/list", param, (message) => {
            // return message.department;
            resolve(message.department);
        })
    });
}

exports.delete = function (token, deptId) {
    var param = {
        access_token: token,
        id: deptId,
    }
    httpclient.get("department/delete", param, (message) => {
        console.log("department id=" + param.id + " " + message.errmsg);
    });
}

exports.update = function (token, dept) {
    var param = {
        access_token: token,
    }
    httpclient.post("department/update", param, dept, (message) => {
        console.log("department " + JSON.stringify(dept) + " updated ");
    });
}
