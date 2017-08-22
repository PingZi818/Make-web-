/**
 * Created by Administrator on 2017/4/26.
 */
var getClient=require('./../util/DBHelper');
var domain=require('domain');
var actualcombSql=require('./sql/actualcombSql');
var dom01=domain.create();
var actualcomb={
    getA_type:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(actualcombSql.getA_type,function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>0){
                        //    1 表示登录成功
                        callback(result)
                        client.release();
                    }else{
                        //0 该用户名不存在
                        callback("ssss");
                        client.release();
                    }


                });

            })
        })
    },
    getAllActualcomb_info:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(actualcombSql.getAllActualcomb_info,function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>0){
                        //    1 表示登录成功
                        callback(result)
                        client.release();
                    }else{
                        //0 该用户名不存在
                        callback("ssss");
                        client.release();
                    }


                });

            })
        })
    },
    //实战详情
    getOneActualcomb_details:function (ac,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(actualcombSql.getOneActualcomb_details,[ac.ano],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //    1 表示登录成功
                        callback(result)
                        client.release();
                    }else{
                        //0 该用户名不存在
                        client.release();
                        callback("ssss");
                    }


                });

            })
        })
    },
    //实战先行课
    getOneActualcomb_firstcourse:function (ac,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(actualcombSql.getOneActualcomb_firstcourse,[ac.ano],function (error,result) {
                    if(error){
                        client.release();
                        callback(err.message+'er');
                    }
                    if(result.length>0){
                        callback(result)
                        client.release();
                    }else{
                        callback("ssss");
                        client.release();
                    }


                });

            })
        })
    },
    getOneActualcomb_chapter:function (ac,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(actualcombSql.getOneActualcomb_chapter,[ac.ano],function (error,result) {
                    if(error){
                        client.release();
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        callback(result)
                        client.release();
                    }else{
                        callback("ssss");
                        client.release();
                    }


                });

            })
        })
    },
    getOneActualcomb_comments:function (ac,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(actualcombSql.getOneActualcomb_comments,[ac.ano],function (error,result) {
                    if(error){
                        client.release();
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        callback(result)
                        client.release();
                    }else{
                        callback("ssss");
                        client.release();
                    }


                });

            })
        })
    },
    //主页的5个课程
    getIndexActualcomb:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(actualcombSql.getIndexActualcomb,function (error,result) {
                    if(error){
                        client.release();
                        callback(err.message+'er');
                    }
                    if(result.length>0){
                        callback(result)
                        client.release();

                    }else{
                        client.release();
                        callback("ssss");

                    }


                });

            })
        })
    },

    //主页前端工程师
    getIndexMan:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(actualcombSql.getIndexMan,function (error,result) {
                    if(error){
                        client.release();
                        callback(err.message+'er');
                    }
                    if(result.length>0){
                        callback(result)
                        client.release();

                    }else{
                        client.release();
                        callback("ssss");
                    }


                });

            })
        })
    },
};
module.exports=actualcomb;
