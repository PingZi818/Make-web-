/**
 * Created by kition on 2017/4/24.
 */
var express = require('express');
var router = express.Router();
var coursedao=require('./../dao/courseDAO');

router.get('/index', function(req, res, next) {

    coursedao.getCourseAll(function (_result) {
                res.json(_result);
            });

});
//主页封面课程
router.get('/getIndexCourseCover', function(req, res, next) {

    coursedao.getIndexCourseCover(function (_result) {
        res.json(_result);
    });
});
//主页课程前五，按人数排

router.get('/getIndexNewCourse', function(req, res, next) {

    coursedao.getIndexNewCourse(function (_result) {
        res.json(_result);
    });
});
//主页封面问题
router.get('/getIndexQuestion', function(req, res, next) {
    coursedao.getIndexQuestion(function (_result) {
        res.json(_result);
    });
});
//课程详情
router.get('/getCourseDetail', function(req, res, next) {
    var cno=req.query;
    console.log(cno);
    coursedao.getCourseDetail(cno,function (_result) {
        res.json(_result);
    });
});
//获取课程章节
router.get('/getChapter', function(req, res, next) {
    var cno=req.query;
    console.log(cno);
    coursedao.getChapter(cno,function (_result) {
        res.json(_result);
    });
});
//获取课程章节的小节
router.get('/getSection', function(req, res, next) {
    var cno=req.query;
    // console.log(cno);
    coursedao.getSection(cno,function (_result) {
        res.json(_result);
    });
});
//获取章节的小节的视频（app）

router.get('/getSectionApp', function(req, res, next) {
    var cno=req.query;
    // console.log(cno);
    coursedao.getSectionApp(cno,function (_result) {
        res.json(_result);
    });
});
// 视频播放界面
router.get('/getvideo', function(req, res, next) {
    var no=req.query;
    // console.log(no);
    coursedao.getvideo(no,function (_result) {
        res.json(_result);
    });
});
//方向
router.get('/c_direction', function(req, res, next) {
    coursedao.getC_direction(function (_result) {
        res.json(_result);
    });

});
//分类
router.get('/c_sort', function(req, res, next) {
    coursedao.getC_sort(function (_result) {
        res.json(_result);
    });

});
//类型
router.get('/c_type', function(req, res, next) {
    coursedao.getC_type(function (_result) {
        res.json(_result);
    });

});

//开始学习添加到course_study表

router.get('/insertCourseStudy', function(req, res, next) {
    var no=req.query;
    console.log(no);
    coursedao.insertCourseStudy(no,function (_result) {
        res.json({result:_result});
    });
});

//根据课程类型获取course（app）

router.get('/getCoursesDetail', function(req, res, next) {
    var no=req.query;
    coursedao.getCoursesDetail(no,function (_result) {
        res.json(_result);
    });

});
module.exports = router;