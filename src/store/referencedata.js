export default {
    namespaced: true,

    state: {
        refno:1,
        cno:1,
        mid:"M2001",
        refcategory:0, // 0은 과제 // 1은 수업 자료를 나타냄
        refattach:"",
        refattachoname:"",
        refattachtype:"",
        refattachsize:"",
        refcreatedat:"6월23일",
        refupdatedat:"6월24일"
    },
    getters: {
        getUserId(state, getters, rootState, rootGetters) {
            return state.mid;
        },
        getUserPassword(state, getters, rootState, rooteGetters) {
            return state.mpassword;
        },
        getUserInfo(state, getters, rootState, rooteGetters) {
            return state;
        }
    },
    mutations: {
        setUserId(state, payload) {
            state.mid = payload;
        },
        setUserPassword(state, payload) {
            state.mpassword = payload;
        }
    },
    actions: {
        loginAction(context, payload) {
            new Promise((resolve, reject) => {
                if (true) {
                    resolve({ result: "success", userId: payload.userId });
                } else {
                    reject({ result: "fail", message: "password is wrong" });
                }
            })
                .then((data) => {
                    console.log("로그인 성공");
                    context.commit("setUser", data.mid);
                })
                .catch((error) => {
                    console.log("로그인 실패");
                });
        }
    }
};