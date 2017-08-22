/**
 * Created by Administrator on 2017/5/4.
 */
var sql={
    getMy_yuanwen:'SELECT * from view_my_yuanwen where user_id=? ',
    getMy_course:'SELECT user_id,course_study.cno,cname as name,degreename,cdetail,cover_detail as text,ctime,background as img,study_time as sendtime from course_study INNER JOIN course '+
    'on course_study.cno=course.cno INNER JOIN study_degree on study_degree.degreeno=course.degree where user_id=? ',
    getMy_actualcomb:'SELECT * from view_my_ac where user_id=? ',
    //支付页面课程详情(app)
    // get_zhifu:'SELECT * from view_my_ac where ono=? ',
    get_zhifu:'SELECT aorder.user_id,ono,aorder.ano,aname,acover_img,price,otime,degreename from aorder INNER JOIN actualcomb on aorder.ano=actualcomb.ano INNER JOIN '+
    'study_degree on study_degree.degreeno=actualcomb.degreeno where  ono=?  ',

    getMy_response:'SELECT response.user_id,response.qno,qtitle,qtime,qdetail,question.c_sortno,c_sortname,c_sortimg,rno,rdetail,rtime from '+
    'response INNER JOIN question on response.qno=question.qno '+
    'INNER JOIN c_sort on c_sort.c_sortno=question.c_sortno where response.user_id=? order by rtime desc',
    //待付款订单
    get_Noorder:'SELECT aorder.user_id,ono,aorder.ano,aname,acover_img,price,otime,degreename from aorder INNER JOIN actualcomb on aorder.ano=actualcomb.ano INNER JOIN '+
    'study_degree on study_degree.degreeno=actualcomb.degreeno where ostatus=0 and user_id=? order by otime desc',
    getMy_courselate:'SELECT user_id,course_study.cno,cname,degreename,cover_detail,ctime,background,year(study_time) as year,month(study_time) as month,day(study_time) as day  from course_study INNER JOIN '+
    '  course on course_study.cno=course.cno INNER JOIN study_degree on study_degree.degreeno=course.degree where date(study_time) in(SELECT max(date(study_time))'+
    'as time from course_study where user_id=? ) and user_id=? ',
    getMy_coursefirst:'SELECT user_id,course_study.cno,cname,degreename,cover_detail,ctime,background,year(study_time) as year,month(study_time) as month,day(study_time) as day from course_study INNER JOIN course ' +
    'on course_study.cno=course.cno INNER JOIN study_degree '+
    'on study_degree.degreeno=course.degree where date(study_time) in(SELECT min(date(study_time)) as time from course_study where user_id=? ) and user_id=? ',
    getMy_courseelse:'SELECT user_id,course_study.cno,cname,degreename,cover_detail,ctime,background,year(study_time) as year,month(study_time) as month,day(study_time) as day from course_study INNER JOIN '+
    ' course on course_study.cno=course.cno INNER JOIN study_degree on study_degree.degreeno=course.degree where date(study_time) '+
    'not in((SELECT min(date(study_time)) as time from course_study where user_id=?),(SELECT max(date(study_time)) as time from course_study where user_id=?)) and user_id=? ORDER BY '+
    ' date(study_time) desc',
    //获取学习课程最大最小时间
    getMy_maxtime:'SELECT year(max(study_time)) as year,month(max(study_time)) as month,day(max(study_time)) as day from course_study where user_id=?;',
    getMy_mintime:'SELECT year(min(study_time)) as year,month(min(study_time)) as month,day(min(study_time)) as day from course_study where user_id=?;',




    //支付订单完成，更新订单状态
    updateOrder:'update aorder set ostatus=1 where ano=? and user_id=?',

    //lk
    //修改个人信息
    updateUserInfo:'update user_info set user_name=?,career_id=?,sex_id=?,email=?,sign=? where user_id=?',
    //删除学习课程
    deleteCourse:"delete from course_study where user_id=? and cno=?",
    //删除订单状态
    deleteOrder:"delete from aorder where ono=? ",
    //查询订单是否存在
    getOrder:'select * from aorder where ano=? and user_id=?',
    //添加订单状态（确认订单-->提交订单）
    insertOrder:'insert into aorder(ano,user_id) values(?,?)'
}
module.exports=sql;