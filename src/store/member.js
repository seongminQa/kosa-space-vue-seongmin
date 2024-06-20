export default {
    namespaced: true,

    state: {
        mid: "user",
        mpassword: "12345",
        mname: "",
        mphone: "",
        memail: "znznfltm@gmail.com",
        mrole: "",
        menable: "",
        mcreatedat: "",
        mupdatedat: ""
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