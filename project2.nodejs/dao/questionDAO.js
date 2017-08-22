/**
 * Created by kition on 2017/4/28.
 */
var getClient=require('./../util/DBHelper');
var domain=require('domain');
var questionSql=require('./sql/questionSql');
var dom01=domain.create();
var question={
    //获取猿问页面的所有课程
    getIndexquestionData:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(questionSql.getIndexquestionData,function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                    }
                    if(result.length>=0){
                        //     返回数据
                        callback(result);
                        client.release();
                    }else{
                        callback("ssss");
                        client.release();
                    }


                });

            })
        })
    },
    getAllquestion:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(questionSql.getAllquestion,function (error,result) {
                    if(error){
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
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
    //猿问详情
    getYuanwenDetail:function (no,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(questionSql.getYuanwenDetail,[no.qno],function (error,result) {
                    if(error){
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
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

    //等待回答
    getwaitquetion:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(questionSql.getwaitquetion,function (error,result) {
                    if(error){
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
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

    //评论
    getcomment:function (no,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(questionSql.getcomment,[no.cno,no.user_id,no.cno],function (error,result) {
                    if(error){
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
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

    //课程详情问答
    getCourseQuestion:function (no,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(questionSql.getCourseQuestion,[no.c_sortname],function (error,result) {
                    if(error){
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
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

    //添加评论
    insertComment:function (ques,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(questionSql.insertComment,[ques.ccdetail,ques.cno,ques.user_id],function (error,result) {
                    if(error){
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
                    }
                    if(result.affectedRows>0){
                        //     返回数据
                        // callback(result)
                                    client.query(questionSql.getcomment,[ques.cno,ques.user_id,ques.cno],function (error,result) {
                                        if(error){
                                            //3  表示数据库连接异常
                                            callback(err.message+'er');
                                            client.release();
                                        }
                                        if(result.length>=0){
                                            //     返回数据
                                            callback(result)
                                            client.release();
                                        }else{
                                            callback("ssss");
                                            client.release();
                                        }


                                    }),
                        client.release();
                    }else{
                        callback("ssss");
                        client.release();
                    }


                });

            })
        })
    },

    //提问问题（插入）
    insertQuestion:function (ques,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(questionSql.insertQuestion,[ques.c_sortno,ques.user_id,ques.qtitle,ques.qdetail],function (error,result) {
                    if(error){
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
                    }
                    if(result.affectedRows>0){
                        //     返回数据
                        callback(1);
                        client.release();
                    }else{
                        callback(2);
                        client.release();
                    }


                });

            })
        })
    },

    //添加问题回答
    insertResponse:function (ques,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(questionSql.insertResponse,[ques.qno,ques.user_id,ques.rdetail],function (error,result) {
                    if(error){

                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
                    }
                    if(result.affectedRows>0){
                        //     返回数据

                        client.query(questionSql.getYuanwenDetail,[ques.qno],function (error,result) {
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
                                callback("ssss");
                                client.release();
                            }
                        });
                        client.release();
                    }else{
                        callback(2);
                        client.release();
                    }


                });

            })
        })
    },

    //点赞+1
    insertLike:function (ques,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(questionSql.insertLike,[ques.ccno,ques.user_id],function (error,result) {
                    if(error){
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
                    }
                    if(result.affectedRows>0){
                        //     返回数据
                        client.query(questionSql.getcomment,[ques.cno,ques.user_id,ques.cno],function (error,result) {
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
                                callback("ssss");
                                client.release();
                            }

                        });

                        client.release();

                    }else{
                        callback(2);
                        client.release();
                    }


                });

            })
        })
    },

    //点赞-1
    deleteLike:function (ques,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(questionSql.deleteLike,[ques.ccno,ques.user_id],function (error,result) {
                    if(error){
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
                    }
                    // console.log(result)
                    if(result.affectedRows>0){
                        //     返回数据
                        client.query(questionSql.getcomment,[ques.cno,ques.user_id,ques.cno],function (error,result) {
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
                                callback("ssss");
                                client.release();
                            }


                        });

                        client.release();
                    }else{

                        callback(2);
                        client.release();
                    }


                });

            })
        })
    },

    //查询点赞是否存在
    getLike:function (ques,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(questionSql.getLike,[ques.ccno,ques.user_id],function (error,result) {
                    if(error){

                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
                    }
                    if(result.length>0){
                        //     返回数据 1 存在
                        callback(1);
                        client.release();
                    }else{
                        // 不存在

                        callback(0);
                        client.release();
                    }


                });

            })
        })
    },

    //按照课号和用户号查点赞
    getLikeByUser:function (ques,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query(questionSql.getLikeByUser,[ques.cno,ques.user_id],function (error,result) {
                    if(error){
                        //3  表示数据库连接异常
                        callback(err.message+'er');
                        client.release();
                    }
                    if(result.length>=0){
                        //     返回数据 1 存在
                        callback(result);
                        client.release();
                    }else{
                        // 不存在

                        callback(0);
                        client.release();
                    }


                });

            })
        })
    },
};
module.exports=question