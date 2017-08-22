/**
 * Created by Administrator on 2017/4/26.
 */
var sql={
    getA_type:'select * from a_type',
    getAllActualcomb_info:'select * from actualcomb_zhanshi',
    getAllActualcomb_renshu:'select * from actualcomb_renshu',
    getOneActualcomb_details:'SELECT * FROM actualcomb_detailspage where ano=? ',
    getOneActualcomb_firstcourse:'SELECT * FROM actualcomb_firstcourse where ano=? ',
    getOneActualcomb_chapter:'select chaptername,chapter_tite,chapter_detail from a_chapter INNER JOIN chapter on a_chapter.chapterno=chapter.chapterno where ano=? ',
    getOneActualcomb_comments:'select user_name,user_icon,acdetail,actime from a_comments INNER JOIN  user_info on a_comments.acperson=user_info.user_id where ano=? ',
    //getOneActualcomb_firstcourse_renshu:""
    //主页五个实战
    getIndexActualcomb:'SELECT * from actualcomb_zhanshi ORDER BY renshu desc limit 0,5',
    //主页前端工程师4个实战
    getIndexMan: 'SELECT * from actualcomb_zhanshi ORDER BY addtime desc limit 0,4',





}
module.exports=sql;