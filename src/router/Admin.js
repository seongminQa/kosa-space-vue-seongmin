const routes = [
    // MyPage
    {
        path: '/admin/dashboard',
        component: () => import(/* webpackChunkName: "AdminMyPage" */ '@/views/Admin/MyPage/DashBoardView.vue'),
    },
    {
        path: '/admin/mypage/info/modify',
        component: () => import(/* webpackChunkName: "AdminMyPage" */ '@/views/Admin/MyPage/UpdateAdminView.vue'),
    },
    // Edu / EduCenter
    {
        path: '/admin/educenter/list',
        component: () =>import(/* webpackChunkName: "EduCenter" */ '@/views/Admin/Management/Edu/EduCenter/CenterListView.vue'),
    },
    {
        path: '/admin/educenter/create',
        component: () => import(/* webpackChunkName: "EduCenter" */ '@/views/Admin/Management/Edu/EduCenter/CreateCenterView.vue'),
    },
    {
        path: '/admin/educenter/update',
        component: () => import(/* webpackChunkName: "EduCenter" */ '@/views/Admin/Management/Edu/EduCenter/UpdateCenterView.vue'),
    },
    // Edu / TrainingRoom
    {
        path: '/admin/troom/list',
        component: () => import(/* webpackChunkName: "TrainingRoom" */ '@/views/Admin/Management/Edu/TrainingRoom/RoomListView.vue'),
    },
    {
        path: '/admin/troom/create',
        component: () => import(/* webpackChunkName: "TrainingRoom" */ '@/views/Admin/Management/Edu/TrainingRoom/CreateRoomView.vue'),
    },
    {
        path: '/admin/troom/update',
        component: () => import(/* webpackChunkName: "TrainingRoom" */ '@/views/Admin/Management/Edu/TrainingRoom/UpdateRoomView.vue'),
    },
    // Edu / Course
    {
        path: '/admin/course/list',
        component: () => import(/* webpackChunkName: "Course" */ '@/views/Admin/Management/Edu/Course/CourseListView.vue'),
    },
    {
        path: '/admin/course/create',
        component: () => import(/* webpackChunkName: "Course" */ '@/views/Admin/Management/Edu/Course/CreateCourseView.vue'),
    },
    {
        path: '/admin/course/update',
        component: () => import(/* webpackChunkName: "Course" */ '@/views/Admin/Management/Edu/Course/UpdateCourseView.vue'),
    },
    // Edu / Trainee
    {
        path: '/admin/trainee/list',
        component: () => import(/* webpackChunkName: "AdminTrainee" */ '@/views/Admin/Management/Edu/Trainee/TraineeListView.vue'),
    },
    {
        path: '/admin/trainee/create',
        component: () => import(/* webpackChunkName: "AdminTrainee" */ '@/views/Admin/Management/Edu/Trainee/CreateTraineeView.vue'),
    },
    {
        path: '/admin/trainee/update',
        component: () => import(/* webpackChunkName: "AdminTrainee" */ '@/views/Admin/Management/Edu/Trainee/UpdateTraineeView.vue'),
    },
    {
        path: '/admin/trainee/detail',
        component: () => import(/* webpackChunkName: "AdminTrainee" */ '@/views/Admin/Management/Edu/Trainee/TraineeDetailView.vue'),
    },
    // Learning / Attendance
    {
        path: '/admin/attendance/list',
        component: () => import(/* webpackChunkName: "AdminAttendance" */ '@/views/Admin/Management/Learning/Attendance/AttendanceListView.vue'),
    },
    {
        path: '/admin/attendance/trainee/detail',
        component: () => import(/* webpackChunkName: "AdminAttendance" */ '@/views/Admin/Management/Learning/Attendance/PersonalAttendanceDetailView.vue'),
    },
    // Learning / DailyNote
    {
        path: '/admin/dailynote/list',
        component: () => import(/* webpackChunkName: "AdminDailyNote" */ '@/views/Admin/Management/Learning/DailyNote/TraineeNoteListView.vue'),
    },
    {
        path: '/admin/dailynote/trainee/note/list',
        component: () => import(/* webpackChunkName: "AdminDailyNote" */ '@/views/Admin/Management/Learning/DailyNote/PersonalNoteListView.vue'),
    },
    {
        path: '/admin/dailynote/trainee/note/detail',
        component: () => import(/* webpackChunkName: "AdminDailyNote" */ '@/views/Admin/Management/Learning/DailyNote/PersonalNoteDetailView.vue'),
    },
    // Notice
    {
        path: '/admin/notice/list',
        component: () => import(/* webpackChunkName: "AdminNotice" */ '@/views/Admin/Management/Notice/NoticeListView.vue'),
    },
    {
        path: '/admin/notice/create',
        component: () => import(/* webpackChunkName: "AdminNotice" */ '@/views/Admin/Management/Notice/CreateNoticeView.vue'),
    },
    {
        path: '/admin/notice/update',
        component: () => import(/* webpackChunkName: "AdminNotice" */ '@/views/Admin/Management/Notice/UpdateNoticeView.vue'),
    },
    {
        path: '/admin/notice/detail',
        component: () => import(/* webpackChunkName: "AdminNotice" */ '@/views/Admin/Management/Notice/NoticeDetailView.vue'),
    }
  ]

  export default routes;