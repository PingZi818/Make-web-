/**
 * Created by Administrator on 2017/4/26.
 */
var express = require('express');
var router = express.Router();
var actualcombdao=require('./../dao/actualcombDAO');

router.get('/', function(req, res, next) {
    actualcombdao.getAllActualcomb_info(function (_result) {
        res.json(_result);
    });

});
router.get('/a_type', function(req, res, next) {
    actualcombdao.getA_type(function (_result) {
        res.json(_result);
    });

});
//实战详情
router.get('/a_details', function(req, res, next) {
    var ac=req.query;
    console.log(ac);
    actualcombdao.getOneActualcomb_details(ac,(function (_result) {
        res.json(_result);
    }));
    // actualcombdao.getOneActualcomb_firstcourse(ac,(function (_rresult) {
    //     r.push(_rresult);
    // }));
// res.json(r);
});
router.get('/getIndexActualcomb', function(req, res, next) {
    actualcombdao.getIndexActualcomb(function (_result) {
        res.json(_result);
    });

});
router.get('/getIndexMan', function(req, res, next) {
    actualcombdao.getIndexMan(function (_result) {
        res.json(_result);
    });

});
router.get('/a_firstcourse', function(req, res, next) {
    var ac=req.query;
    console.log(ac);


    actualcombdao.getOneActualcomb_firstcourse(ac,(function (_result) {
        res.json(_result);
    }));
    // actualcombdao.getOneActualcomb_firstcourse(ac,(function (_rresult) {
    //     r.push(_rresult);
    // }));
// res.json(r);
});
router.get('/a_chapter', function(req, res, next) {
    var ac=req.query;
    console.log(ac);


    actualcombdao.getOneActualcomb_chapter(ac,(function (_result) {
        res.json(_result);
    }));
    // actualcombdao.getOneActualcomb_firstcourse(ac,(function (_rresult) {
    //     r.push(_rresult);
    // }));
// res.json(r);
});
router.get('/a_comments', function(req, res, next) {
    var ac=req.query;
    console.log(ac);


    actualcombdao.getOneActualcomb_comments(ac,(function (_result) {
        res.json(_result);
    }));
    // actualcombdao.getOneActualcomb_firstcourse(ac,(function (_rresult) {
    //     r.push(_rresult);
    // }));
// res.json(r);
});
module.exports = router;