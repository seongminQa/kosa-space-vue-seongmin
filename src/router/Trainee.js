const routes = [
    // MyPage
    {
        path: '/trainee/dashboard',
        component: () => import(/* webpackChunkName: "TraineeMyPage" */ '@/views/Trainee/MyPage/DashBoardView.vue'),
    },
    {
        path: '/trainee/mypage/info/modify',
        component: () => import(/* webpackChunkName: "TraineeMyPage" */ '@/views/Trainee/MyPage/UpdateTraineeView.vue'),
    },
    // Attendance
    {
        path: '/trainee/attendance/detail',
        component: () => import(/* webpackChunkName: "TraineeAttendance" */ '@/views/Trainee/Management/Attendance/PersonalAttendanceDetailView.vue'),
    },
    {
        path: '/trainee/attendance/reason/create',
        component: () => import(/* webpackChunkName: "TraineeAttendance" */ '@/views/Trainee/Management/Attendance/CreateReasonContentsView.vue'),
    },
    // DailyNote
    {
        path: '/trainee/dailynote/list',
        component: () => import(/* webpackChunkName: "TraineeDailyNote" */ '@/views/Trainee/Management/DailyNote/PersonalNoteListView.vue'),
    },
    {
        path: '/trainee/dailynote/detail',
        component: () => import(/* webpackChunkName: "TraineeDailyNote" */ '@/views/Trainee/Management/DailyNote/PersonalNoteDetailView.vue'),
    },

    // Community
    {
        // 커뮤니티 기본 - 공지 리스트
        path: '/trainee/community',
        component: () => import(/* webpackChunkName: "TraineeCommunity" */ '@/views/Trainee/Community/CommunityTemplete.vue'),
        redirect : '/traninee/community/notice/list',
        children: [
            {
                path: "/reference/list",
                component: () => import(/* webpackChunkName: "TraineeCommunity" */ '@/views/Trainee/Community/Notice/NoticeListView.vue')
            },
            // ReferenceData
            {
                path: "reference/list",
                component: () => import(/* webpackChunkName: "TraineeCommunity" */ '@/views/Trainee/Community/ReferenceData')
            },
            // AssignMent
            {
                path: "assignment/list",
                component: () => import(/* webpackChunkName: "TraineeCommunity" */ '@/views/Trainee/Community/Assignment')
            }
        ]
    },
    // Notice / Detail
    {
        path: '/trainee/notice/detail',
        component: () =>import(/* webpackChunkName: "TraineeCommunity" */ '@/views/Trainee/Community/Notice/NoticeDetailView.vue'),
    }
  ]

  export default routes;