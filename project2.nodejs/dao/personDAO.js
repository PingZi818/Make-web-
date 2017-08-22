/**
 * Created by Administrator on 2017/5/4.
 */

var getClient=require('./../util/DBHelper');
var domain=require('domain');
var personSql=require('./sql/personSql');
var dom01=domain.create();
var person={
    //李冰
    getMy_yuanwen:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.getMy_yuanwen,[me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
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
    getMy_course:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.getMy_course,[me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
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
    getMy_actualcomb:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.getMy_actualcomb,[me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
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
    //支付页面课程详情(app)
    get_zhifu:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.get_zhifu,[me.ono],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
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

    getMy_response:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.getMy_response,[me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
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
    get_Noorder:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.get_Noorder,[me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
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
    getMy_courselate:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.getMy_courselate,[me.user_id,me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
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
    getMy_coursefirst:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.getMy_coursefirst,[me.user_id,me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
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
    getMy_courseelse:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.getMy_courseelse,[me.user_id,me.user_id,me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
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
    getMy_maxtime:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.getMy_maxtime,[me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
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
    getMy_mintime:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.getMy_mintime,[me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
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

    //支付订单完成，更新订单状态
    updateOrder:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.updateOrder,[me.ano,me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.affectedRows>0){
                        //     返回数据
                        callback(1)
                        client.release();
                    }else{
                        callback(0);
                        client.release();
                    }


                });

            })
        })
    },

    //蔺凯
    //修改个人信息
    updateUserInfo:function (me,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(personSql.updateUserInfo,[me.user_name,me.career_id,me.sex_id,me.email,me.sign,me.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.affectedRows>0){
                        //     返回数据
                        callback(1)
                        client.release();
                    }else{

                        callback(0);
                        client.release();
                    }


                });

            })
        })
    },

    //删除学习课程
    deleteCourse:function (ques,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(personSql.deleteCourse,[ques.user_id,ques.cno],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.affectedRows>0){
                        //     删除成功
                        callback(1);
                        client.release();
                    }else{
                        // 删除失败

                        callback(0);
                        client.release();
                    }


                });

            })
        })
    },

    //删除订单状态
    deleteOrder:function (ques,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(personSql.deleteOrder,[ques.ono,ques.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.affectedRows>0){
                        //     删除成功
                        client.query(personSql.get_Noorder,[ques.user_id],function (error,result) {
                            if(error){

                                //3  表示数据库连接异常
                                callback(err.message+'er');
                            }
                            if(result.length>0){
                                //     返回数据
                                callback(result)
                                client.release();
                            }else{
                                client.release();
                                callback("ssss");
                            }


                        });

                        client.release();
                    }else{
                        // 删除失败
                        callback(0);
                        client.release();
                    }


                });

            })
        })
    },
    //查询订单
    getOrder:function (ques,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(personSql.getOrder,[ques.ano,ques.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    console.log(result)
                    if(result.length>0){
                        //     存在
                        callback(1);
                        client.release();
                    }else{
                        // 不存在
                        client.release();
                        callback(0);
                    }


                });

            })
        })
    },
    //添加订单状态（确认订单-->提交订单）
    insertOrder:function (ques,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(personSql.insertOrder,[ques.ano,ques.user_id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.affectedRows>0){
                        //     添加成功
                        callback(1);
                        client.release();
                    }else{
                        // 添加失败
                        client.release();
                        callback(0);
                    }


                });

            })
        })
    },
        

};
module.exports=person;
