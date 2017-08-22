/**
 * Created by Administrator on 2017/5/4.
 */
var express = require('express');
var router = express.Router();
var persondao=require('./../dao/personDAO');

router.get('/my_yuanwen', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.getMy_yuanwen(me,function (_result) {
        res.json(_result);
    });
});
router.get('/my_course', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.getMy_course(me,function (_result) {
        res.json(_result);
    });
});
router.get('/my_ac', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.getMy_actualcomb(me,function (_result) {
        res.json(_result);
    });
});
router.get('/my_res', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.getMy_response(me,function (_result) {
        res.json(_result);
    });
});
//未付款订单
router.get('/my_noorder', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.get_Noorder(me,function (_result) {
        res.json(_result);
    });
});

router.get('/my_courselate', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.getMy_courselate(me,function (_result) {
        res.json(_result);
    });
});
router.get('/my_coursefirst', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.getMy_coursefirst(me,function (_result) {
        res.json(_result);
    });
});
//支付页面课程详情(app)
router.get('/get_zhifu', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.get_zhifu(me,function (_result) {
        res.json(_result);
    });
});
router.get('/my_courseelse', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.getMy_courseelse(me,function (_result) {
        res.json(_result);
    });
});
router.get('/my_maxtime', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.getMy_maxtime(me,function (_result) {
        res.json(_result);
    });
});
router.get('/my_mintime', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.getMy_mintime(me,function (_result) {
        res.json(_result);
    });
});
router.get('/my_dongtai', function(req, res, next) {
    var me=req.query;
    // console.log(me);
    var str3 = [];
    persondao.getMy_yuanwen(me,function (_result1) {
        for (var i = 0; i <_result1.length; i++) {
            str3.push(_result1[i]);
        }

        persondao.getMy_course(me,function (_result2) {
            for (var i = 0; i < _result2.length; i++) {
                str3.push(_result2[i]);
            }
            persondao.getMy_actualcomb(me,function (_result3) {
                for (var i = 0; i <_result3.length; i++) {
                    str3.push(_result3[i]);
                }
                // console.log(str3)
                res.json(str3);
            });
        });
    });
});
//支付订单完成，更新订单状态
router.get('/updateOrder', function(req, res, next) {
    var me=req.query;
    console.log(me);
    persondao.updateOrder(me,function (_result) {
        res.json({result:_result});
    });
});

//修改个人信息
router.post('/updateUserInfo', function(req, res, next) {
    var me=req.body;
    console.log(me);
    persondao.updateUserInfo(me,function (_result) {
        res.json({result:_result});
    });
});

//删除学习课程
router.get('/deleteCourse', function(req, res, next) {
    var ques=req.query;
    console.log(ques);
    persondao.deleteCourse(ques,function (_result) {
        res.json({result:_result});
    });
});

//删除订单状态
router.get('/deleteOrder', function(req, res, next) {
    var ques=req.query;
    console.log(ques);
    persondao.deleteOrder(ques,function (_result) {
        res.json(_result);
    });
});

//查询订单
router.get('/getOrder', function(req, res, next) {
    var ques=req.query;
    console.log(ques);
    persondao.getOrder(ques,function (_result) {
        //前台返回1,0   1：存在  0：不存在
        res.json({result:_result});
    });
});

//添加订单状态（确认订单-->提交订单）
router.get('/insertOrder', function(req, res, next) {
    var ques=req.query;
    console.log(ques);
    persondao.insertOrder(ques,function (_result) {
        res.json({result:_result});
    });
});
module.exports = router;