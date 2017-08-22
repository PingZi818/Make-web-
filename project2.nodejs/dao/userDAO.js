/**
 * Created by lzhan on 2017/4/21.
 */

var getClient=require('./../util/DBHelper');
var domain=require('domain');
var usesql=require('./sql/userSql');

var util=require('./../util/MD5');

var dom01=domain.create();
var user={
    addUser:function (user,callback) {
        that=this;
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {

            that.getUserById(user.user_tel,function (_res) {
                //判读是否已经存在改用户

                if(typeof _res=='object'){
                    if(_res.length==1){
                        //2 表示用户已存在
                        callback(2);
                    }else{

                       getClient(function (client) {
                           client.query(usesql.addUser,[user.user_tel,user.user_password],function (error,result) {
                               if(error){
                                   console.log('here error');
                                   client.release();
                                   callback(3);
                                   return;
                               }

                               callback(result.affectedRows);
                               client.release();

                           })
                       })
                    }
                //    查询用户是否存在，出现数据库异常
                }else{

                    callback(_res);
                }
            });
        })

    },
    getUserById:function (id,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(usesql.getUserById,[id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }
                        callback(result);
                    client.release();
                });

            })
        })
    },
    getUserPassword:function (user,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(usesql.getUserPassword,[user.user_tel],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }
                    if(result.length==1){
                    //    1 表示登录成功
                        if(result[0].user_password===user.user_password){
                            callback(1)
                            client.release();
                        }else{
                            //2 表示密码错误
                            callback(2)
                            console.log(2);
                            client.release();
                        }
                    }else{
                        //0 该用户名不存在
                        callback(0);
                        client.release();
                    }


                });

            })
        })
    },

    getAllUserData:function (tel,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(usesql.userAllByTel,[tel.user_tel],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>0){
                        //     返回数据
                        callback(result)
                        client.release();
                    }else{
                        callback(result)
                        console.log(result[0])
                        client.release();

                    }


                });

            })
        })
    },
    //保存用户头像
    upLoadIcon:function (user_icon,user_id,callback) {

        dom01.on('error',function (err) {
            console.log(err.message);
            callback(4);
        });
        dom01.run(function () {
            console.log('wwwwwwwwwwwwwwwwwwww');
            getClient(function (client) {
                console.log('....................................')
                console.log(user_icon);
                console.log(user_id);
                client.query(usesql.upLoadIcon,[user_icon,user_id],function (error,result) {

                    console.log('222222222222222222222');
                    if(error){

                        console.log(error.message);
                        client.release();
                        //4表示数据库连接错误
                        callback(4);
                    }
                    //callback(result,user_icon);
                    client.release();
                });
            })
        })
    },


    userAllByTel:function (tel,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(usesql.userAllByTel,function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }  if(result.length>0){
                        callback(result)
                        client.release();
                    }
                    client.release();
                });

            })
        })
    },


    //移动端登录 带token
    loginApp:function (user,token,callback) {
        that=this;
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {

            getClient(function (client) {

                client.query(usesql.getUserPassword,[user.user_tel],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }
                    if(result.length==1){

                        //    1 表示登录成功
                        if(result[0].user_password===user.user_password){
                            //登录成功产生token
                            that.setToken(token,user.user_tel,function (add_token_result) {

                                if(add_token_result==1){
                                    //1 表示登录成功
                                    callback(1)
                                }else {
                                    callback(3);
                                }
                            })
                        }else{
                            //2 表示密码错误
                            callback(2)
                        }
                    }else{
                        //0 该用户名不存在
                        callback(0);
                    }


                });

            })
        })
    },
    setToken:function (token,id,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(usesql.setToken,[token,id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }
                    callback(result.affectedRows);
                });

            })
        })
    },
    delUsers:function () {

    },
    updateUser:function () {

    }
};

module.exports=user;