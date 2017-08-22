/**
 * Created by kition on 2017/4/28.
 */
var sql={
    getIndexquestionData:'select *  from yuanwen_tuijian',
    getAllquestion:'select * from yuanwen_quanbu',
    //猿问详情
    getYuanwenDetail:'SELECT * from view_yuanwen_detail where qno=?;',
    //等待回答
    getwaitquetion:'SELECT * from  yuanwen_quanbu where rno is NULL;',
    //获取评论
    // getcomment:'select * from view_course_comment where cno = ?;',
        //三个参数 cno user_id cno
    getcomment:'SELECT view_course_comment.cno,cname,course_comments.ccno,view_course_comment.ccdetail,view_course_comment.cctime,view_course_comment.user_id,user_name,user_icon, '+
   ' dianzanrenshu,c.user_id  as likeuser,style  from course_comments  LEFT JOIN view_course_comment ON view_course_comment.ccno=course_comments.ccno '+
    ' LEFT JOIN (select * from test1 where cno=? and user_id=?) c on course_comments.ccno=c.ccno where course_comments.cno=? ORDER BY course_comments.cctime desc',
    //课程详情问答
    getCourseQuestion:'select * from view_course_question where c_sortname=?',
    //添加评论
    insertComment:'insert into course_comments(ccdetail,cno,user_id) values(?,?,?)',
    //提问问题（插入）
    insertQuestion:'insert into question(c_sortno,user_id,qtitle,qdetail) values(?,?,?,?)',
    //添加问题回答
    insertResponse:'insert into response(qno,user_id,rdetail) values(?,?,?)',
    //点赞+1
    insertLike:'insert into cc_like(ccno,user_id) values(?,?)',
    //点赞-1
    deleteLike:'delete from cc_like where ccno=? and user_id=?',
    //查询点赞是否存在
    getLike:'select * from cc_like where ccno=? and user_id=?',
    //按照课号和用户号查点赞
    getLikeByUser:'SELECT course.cno,course_comments.ccno,cc_like.user_id,style from course '+
'left join course_comments on course.cno=course_comments.cno '+
' LEFT JOIN cc_like on course_comments.ccno=cc_like.ccno'+
' where course.cno=? and cc_like.user_id=?'


}
module.exports=sql;