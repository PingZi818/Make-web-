/**
 * Created by kition on 2017/4/24.
 */
var sql={
    getCourseAll:'select cno,cname,c_directionname,c_sortname,bgcolor,c_typename,degreename,tname,ticon,tcareer,tdetail,cdetail,'+
    'cover_detail,addtime  from course '+
    ' INNER JOIN c_direction on course.c_directionno = c_direction.c_directionno '+
    'INNER JOIN c_sort on course.c_sortno = c_sort.c_sortno '+
'INNER JOIN c_type on course.c_typeno = c_type.c_typeno '+
'INNER JOIN study_degree on course.degree = study_degree.degreeno '+
'INNER JOIN teacher on course.teacherno = teacher.tno ',
    //课程全
    getCourseCover:'select * from course_zhanshi',
    //主页课程前五，按人数排
    getIndexCourseCover:' select * from course_zhanshi ORDER BY "renshu" desc LIMIT 0,5',
    //主页课程前五，按人数排
    getIndexNewCourse:' select * from course_zhanshi ORDER BY addtime desc LIMIT 0,4',
    //主页猿问
    getIndexQuestion:'select  * from index_hot_question;',
    //课程详情
    getCourseDetail:'select * from course_zhanshi where cno=?',
    //获取课程章节
    getChapter:'SELECT course_dir.chapterno,chaptername,dir_content '+ ' from course_dir INNER JOIN chapter on chapter.chapterno=course_dir.chapterno where cno=?;',
    //获取章节的小节
    getSection:'SELECT * from course_section where cno=?',

    //获取章节的小节的视频（app）
    getSectionApp:'SELECT * from course_section where cno=? and chapterno=? and sectionno=?',
    //视频播放界面
    getvideo:'SELECT * from coursedetail_chapter where cno=? and chapterno=? and sectionno=?;',

    getC_direction:'select * from c_direction',
    getC_sort:'select * from c_sort',
    getC_type:'select * from c_type',
    //开始学习添加到course_study表 insert into course_study(user_id,cno) values('102','7')
    insertCourseStudy:'insert into course_study(user_id,cno) values(?,?)',

    //根据课程类型获取course（app）
    getCoursesDetail:'select * from course_zhanshi where c_sortno=?',
}
module.exports=sql;