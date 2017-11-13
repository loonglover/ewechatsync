
var deptService = require('./deptService');
var userService = require('./userService');
var tagService = require('./tagService');

var token;

async function generateToken() {
    var corpid = 'wwc0ea244a2ad5f391';
    var secretid = '8yh955pzKyTz4fh4GRThrYKayJwNtS5HiRrsb0ciy2o';
    token = await deptService.getToken(corpid, secretid);

}

// console.log("\nAccess_Token:" + token);
async function mainProcess() {

    var depts = await deptService.list(token, 1);
    for (var i = 0; i < depts.length; i++) {
        console.log(depts[i]);


        // var dept ={"id":104,"name":"开发运维4","parentid":1,"order":99996000};
        // deptService.create(token, dept);

        // dept.name="开发运维4-更新";
        // deptService.update(token, dept);

        // deptService.delete(token,104);   

        var users = await userService.simplelist(token, depts[i].id, 0);
        for (var i = 0; i < users.length; i++) {
            console.log(users[i]);
        }
    }
}

async function tagProcess() {
    // var tag ={
    //     "tagid": 101,
    //     "tagname": "部门管理员",
    //  };
    // tagService.create(token, tag);

    var tags  = tagService.list(token);
    console.log(tags.length);
    for (var i = 0; i < tags.length; i++) {
        console.log(tags[i]);
    }

}    
generateToken();

tagProcess() ;
    

    // mainProcess();