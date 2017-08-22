/**
 * Created by kition on 2017/4/28.
 */
var express = require('express');
var router = express.Router();
var qustiondao=require('./../dao/questionDAO');

router.get('/getIndexquestionData', function(req, res, next) {

    qustiondao.getIndexquestionData(function (_result) {
        res.json(_result);
    });

});
router.get('/getAllquestion', function(req, res, next) {

    qustiondao.getAllquestion(function (_result) {
        res.json(_result);
    });

});
//猿问详情
router.get('/getYuanwenDetail', function(req, res, next) {
    var no=req.query;
    // console.log(no); 问题号
    qustiondao.getYuanwenDetail(no,function (_result) {
        res.json(_result);
    });
});
//等待回答
router.get('/getwaitquetion', function(req, res, next) {
    qustiondao.getwaitquetion(function (_result) {
        res.json(_result);
    });
});
// 评论
router.get('/getcomment', function(req, res, next) {
    var no=req.query;
    console.log(no);
    qustiondao.getcomment(no,function (_result) {
        res.json(_result);
    });
});
//课程详情问答

router.get('/getCourseQuestion', function(req, res, next) {
    var no=req.query;
    console.log(no);
    qustiondao.getCourseQuestion(no,function (_result) {
        res.json(_result);
    });
});

//添加评论
router.get('/insertComment', function(req, res, next) {
    var ques=req.query;
    console.log(ques);
    qustiondao.insertComment(ques,function (_result) {
        // console.log(_result);
        res.json(_result);
    });
});

//提问问题（插入）

router.post('/insertQuestion', function(req, res, next) {
    var ques=req.body;
    console.log(ques);
    qustiondao.insertQuestion(ques,function (_result) {
        // console.log(_result);
        res.json({result:_result});
    });
});

//添加问题回答
router.post('/insertResponse', function(req, res, next) {
    var ques=req.body;
    console.log(ques);
    qustiondao.insertResponse(ques,function (_result) {
        // console.log(_result);
        res.json(_result);
    });
});

//点赞+1
router.get('/insertLike', function(req, res, next) {
    var ques=req.query;
    // console.log(ques);
    qustiondao.insertLike(ques,function (_result) {
        // console.log(_result);
        res.json(_result);
    });
});

//点赞-1
router.get('/deleteLike', function(req, res, next) {
    var ques=req.query;
    // console.log(ques);
    qustiondao.deleteLike(ques,function (_result) {
        // console.log(_result);
        res.json(_result);
    });
});

//查询点赞是否存在

router.get('/getLike', function(req, res, next) {
    var ques=req.query;
    // console.log(ques);
    qustiondao.getLike(ques,function (_result) {
        // console.log(_result);
        res.json({result:_result});
    });
});

//按照课号和用户号查点赞

router.get('/getLikeByUser', function(req, res, next) {
    var ques=req.query;
    // console.log(ques);
    qustiondao.getLikeByUser(ques,function (_result) {
        // console.log(_result);
        res.json(_result);
    });
});
module.exports = router;