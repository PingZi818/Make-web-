var express = require('express');
var router = express.Router();
var userdao=require('./../dao/userDAO');
var AVATAR_UPLOAD_FOLDER = '/uploads/';
var formidable = require('formidable');
var createUnique = require('./../util/createUnique');
var fs = require('fs');
var qiniu = require("qiniu");
var createToken=require('../util/createToken');

/* GET users listing. */
router.get('/', function(req, res, next) {

});

router.post('/uploadBase64', function (req, res, next) {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) {
            response.locals.error = err;
            // response.render("uploads");
            return;
        }
        userdao.uploadUserIcon(fields, function (result) {
            // res.json({res:result.affectedRows});
            res.send('1');
        })

    })

});
router.get('/getUserIcon', function (req, res, next) {
 console.log('获取用户头像')
    userdao.getUserIcon(req.query.user_phone_number,function (result) {
        res.json({res:result[0].user_icon});
    })

});


router.get('/login', function(req, res, next) {
    var user=req.query;
    console.log(user);
    if(user!=null && user.user_tel!=null && user.user_password!=null){
        if(user.user_tel.length==11) {
            userdao.getUserPassword(user, function (_res) {
                res.json({result: _res});
            })
        }
    }
});
router.post('/login', function(req, res, next) {

    var user=req.body;
    console.log(user);
    if(user!=null && user.user_tel!=null && user.user_password!=null){
        if(user.user_tel.length==11){
            userdao.getUserPassword(user,function (_res) {
                res.json({result:_res});
            })
        }else {
            res.json({result:3});
        }
    }
});
router.get('/regist', function(req, res, next) {
    var user=req.query;
    console.log(user);
    if(user!=null && user.user_tel!=null && user.user_password!=null){
        if(user.user_tel.length==11) {
            userdao.addUser(user, function (_result) {
                res.json({result: _result});
            });
        }
    }
});
router.post('/regist', function(req, res, next) {
    var user=req.body;
    console.log(user);
    if(user!=null && user.user_tel!=null && user.user_password!=null){
        if(user.user_tel.length==11) {
            userdao.addUser(user, function (_result) {
                res.json({result: _result});

            });
        }
    }
});
/*获取用户真实信息*/
router.get('/getTrueInfo',function (req,res,next) {
    var user_id = req.query;
    console.log(user_id);
    if(user_id!=null){
        userdao.getUserTrueInfo(user_id,function (_result) {
            res.json({result:_result});
            console.log(_result);
        });
    }
}),
    // 获取用户信息
router.get('/getall', function(req, res, next) {
    var tel = req.query;
    console.log(tel);
    userdao.getAllUserData(tel,function (_result) {
        res.json( _result);
    });
});
/*上传头像*/
/*router.post('/upload', function (req, res, next) {

    console.log('1111...')

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) {
            response.locals.error = err;
            // response.render("uploads");
            return;
        }
        // console.log(fields.user_phone_number.length);
        // console.log(files);
        userdao.getUserById(fields.user_id,function (result) {
            console.log(fields.user_id+'11111111111111');
            if(result.length==1){
                var extName ='';  //后缀名
                console.log('文件后缀名为 '+files.file.type);
                console.log('3333...')
                switch (files.file.type) {  //此处in_file  为页面端 <input type=file name=in_file>
                    case 'image/jpeg':
                        extName = 'jpeg';
                        break;
                    case 'image/jpg':
                        extName = 'jpg';
                        break;
                    case 'image/png':
                        extName = 'png';
                        break;
                    case 'image/x-png':
                        extName = 'png';
                        break;
                }
                console.log('extName='+extName)
                if(extName.length == 0){
                    res.send('只支持png和jpg格式图片');
                    return;
                }else{
                    form.uploadDir = "../public"+AVATAR_UPLOAD_FOLDER;     //设置上传目录
                    form.keepExtensions = true;     //保留后缀
                    form.maxFieldsSize = 2 * 1024;   //文件大小
                    var avatarName = createUnique.creatName() + '.' + extName;
                    var newPath = form.uploadDir + avatarName;
                    console.log(newPath);



                    var readStream = fs.createReadStream(files.file.path);
                    var writeStream = fs.createWriteStream(newPath);
                    readStream.pipe(writeStream);
                    readStream.on('end', function () {
                        fs.unlinkSync(files.file.path);

                    });

                    console.log(fields.user_id);
                    console.log(avatarName);

                    console.log('upload end...');

                    console.log('3333...')
                    userdao.upLoadIcon(avatarName,fields.user_id,function (result) {
                        console.log('------------------------------')
                        /!*console.log(result);*!/
                    })

                    //res.send('上传成功');
                    //res.json({result:result});
                }
            }
        }) //end getUserByid
    })//end form.parse

});*/

/*七牛上传头像*/
router.post('/upload', function (req, res, next) {

    qiniu.conf.ACCESS_KEY = 'S2tEHzhyhLKft6em2Vl8cBZruhXswkB1QOm6Z083';
    qiniu.conf.SECRET_KEY = 'CpRE_8M81zD_hFpsUnNjzDXh4-5FD-0mdGF3qijh';

    bucket = 'make';

    var form = new formidable.IncomingForm();

    //构建上传策略函数
    function uptoken(bucket, key) {
        var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
        return putPolicy.token();
    }

    //构造上传函数
    function uploadFile(uptoken, key, localFile) {
        var extra = new qiniu.io.PutExtra();
        qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
            if(!err) {
                // 上传成功， 处理返回值
                console.log('上传成功， 处理返回值');
                console.log(ret.hash, ret.key, ret.persistentId);
                res.json({result:'上传成功'});
            } else {
                // 上传失败， 处理返回代码
                console.log(err);
            }
        });
    }
    form.parse(req, function (err, fields, files) {
        if (err) {
            response.locals.error = err;
            // response.render("uploads");
            return;
        }
        userdao.getUserById(fields.user_id,function (result) {
            console.log(fields.user_id);
            if(result.length==1){
                var extName ='';  //后缀名
                console.log('文件后缀名为 '+files.file.type);
                console.log('33335443534...')
                switch (files.file.type) {  //此处in_file  为页面端 <input type=file name=in_file>
                    case 'image/jpeg':
                        extName = 'jpeg';
                        break;
                    case 'image/jpg':
                        extName = 'jpg';
                        break;
                    case 'image/png':
                        extName = 'png';
                        break;
                    case 'image/x-png':
                        extName = 'png';
                        break;
                }
                console.log('extName='+extName)
                if(extName.length == 0){
                    res.send('只支持png和jpg格式图片');
                    return;
                }else{

                    // form.uploadDir = "../public"+AVATAR_UPLOAD_FOLDER;     //设置上传目录
                    form.keepExtensions = true;     //保留后缀
                    form.maxFieldsSize = 2 * 1024;   //文件大小

                    var avatarName = createUnique.creatName() + '.' + extName;

                    // var newPath = form.uploadDir + key;
                    // console.log(newPath);
                    key = avatarName;

                    //生成上传 Token
                    token = uptoken(bucket, key);
                    console.log(token)
                    // console.log('token:'+token);
                    filePath = files.file.path;

                    //调用uploadFile上传
                    uploadFile(token, key, filePath);

                    userdao.upLoadIcon(avatarName,fields.user_id,function (result) {
                        console.log('------------------------------')

                    })


                }
            }
        }) //end getUserByid
    })//end form.parse

});

//移动端登录 带token
router.post('/loginApp', function (req, res, next) {
    var user = req.body;
    console.log(user);

    if (user != null && user.user_tel != null && user.user_password != null) {

        if (user.user_tel.length == 11) {

            var token=createToken(user.user_tel);
            userdao.loginApp(user,token,function (_res) {
                console.log(_res);
                if(_res==1){
                    res.json({result: _res,token:token});
                }else {
                    res.json({result: _res});
                }
            })
        } else {
            res.json({result: 3});
        }
    }
});

module.exports = router;

//business

