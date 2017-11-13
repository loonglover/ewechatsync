// var http = require('https');
var httpclient = require('./httpclient');


exports.create = function (token, user) {
    var param = {
        access_token: token,
    }

    httpclient.post("user/create", param, user, (message) => {
        console.log("user " + JSON.stringify(user) + " created ");
    });
}

exports.get = function (token, userid) {
    return new Promise( (resolve, reject) => {
        var param = {
            access_token: token,
            userid:userid
        }

        httpclient.post("user/get", param, user, (message) => {
            var user=message;
            console.log("get a user " + JSON.stringify(user) );
            resolve(user);
        });
    });
}

exports.list = function (token, parentDeptId,fetchChild) {
    return new Promise((resolve, reject) => {
        var param = {
            access_token: token,
            department_id: parentDeptId,
            fetch_child: fetchChild
        }
        httpclient.get("user/list", param, (message) => {
            // return message.user;
            resolve(message.userlist);
        })
    });
}

exports.simplelist = function (token, parentDeptId,fetchChild) {
    return new Promise((resolve, reject) => {

        var param = {
            access_token: token,
            department_id: parentDeptId,
            fetch_child: fetchChild
        }
        httpclient.get("user/simplelist", param, (message) => {
            // return message.user;
            resolve(message.userlist);
        })
    });
}

exports.delete = function (token, userId) {
    var param = {
        access_token: token,
        id: userId,
    }
    httpclient.get("user/delete", param, (message) => {
        console.log("user id=" + param.id + " " + message.errmsg);
    });
}

exports.update = function (token, user) {
    var param = {
        access_token: token,
    }

    httpclient.post("user/update", param, user, (message) => {
        console.log("user " + JSON.stringify(user) + " updated ");
    });
}
