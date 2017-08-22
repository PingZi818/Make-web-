/**
 * Created by kition on 2017/4/24.
 */
var getClient=require('./../util/DBHelper');
var domain=require('domain');
var courseSql=require('./sql/courseSql');
var dom01=domain.create();
var course={
    //获取课程页面的所有课程
    getCourseAll:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getCourseCover,function (error,result) {
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
    //主页课程的5节课
    getIndexCourseCover:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getIndexCourseCover,function (error,result) {
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
    //主页课程前五，按人数排
    getIndexNewCourse:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getIndexNewCourse,function (error,result) {
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
    //主页猿问
    getIndexQuestion:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getIndexQuestion,function (error,result) {
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
    //课程详情
    getCourseDetail:function (cno,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getCourseDetail,[cno.cno],function (error,result) {
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
    //获取课程章节
    getChapter:function (cno,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getChapter,[cno.cno],function (error,result) {
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
    //获取章节的小节
    getSection:function (cno,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getSection,[cno.cno],function (error,result) {
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

    //获取章节的小节的视频（app）
    getSectionApp:function (cno,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getSectionApp,[cno.cno,cno.chapterno,cno.sectionno],function (error,result) {
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
    //视频播放界面
    getvideo:function (no,callback) {
    dom01.on('error',function (err) {
        console.log(err.message);
        callback(err.message);
    });
    dom01.run(function () {
        getClient(function (client) {

            client.query(courseSql.getvideo,[no.cno,no.chapterno,no.sectionno],function (error,result) {
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
    getC_direction:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getC_direction,function (error,result) {
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
                        callback("ssss");
                        client.release();
                    }


                });

            })
        })
    },
    //根据课程类型获取course（app）
    getCoursesDetail:function (no,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getCoursesDetail,[no.c_sortno],function (error,result) {
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
                        callback("ssss");
                        client.release();
                    }


                });

            })
        })
    },

    getC_sort:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getC_sort,function (error,result) {
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
                        callback("ssss");
                        client.release();
                    }


                });

            })
        })
    },
    getC_type:function (callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.getC_type,function (error,result) {
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
                        callback("ssss");
                        client.release();
                    }


                });

            })
        })
    },

    //开始学习添加到course_study表
    insertCourseStudy:function (no,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(err.message);
        });
        dom01.run(function () {
            getClient(function (client) {

                client.query(courseSql.insertCourseStudy,[no.user_id,no.cno],function (error,result) {

                    if(error){
                        console.log(111111)
                        client.release();
                        //3  表示数据库连接异常
                        callback(2);

                    }
                    // console.log(result)
                    if(result.affectedRows>0){
                        //     返回数据
                        callback(1)
                        client.release();
                    }else{
                        client.release();
                        callback(2);
                    }


                });

            })
        })
    },

};
module.exports=course;
