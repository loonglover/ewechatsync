var httpclient = require('./httpclient');

exports.create = function (token, tag) {
    var param = {
        access_token: token,
    }

    httpclient.post("tab/create", param, tag, (message) => {
        console.log("tag " + JSON.stringify(tag) + " created ");
    });
}

exports.list = function (token) {
    return new Promise((resolve, reject) => {
        var param = {
            access_token: token,
        }
        httpclient.get("tag/list", param, (message) => {
            resolve(message.taglist);
        })
    });
}
