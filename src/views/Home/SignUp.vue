<template>
    <!-- contents -->
    <div class="headingArea">
        <div class="title">
            <h1 id="itemTitle">회원가입</h1>
        </div>
        <!--  -->
        <div class="row d-flex justify-content-center align-items-center p-3 p-md-4 p-xl-5 vh-100">
            <div class="shadow col-12 col-md-6" style="height: 800px;">
                <div class="p-3 p-md-4 p-xl-5" style="height: 90%;">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-5">
                                <div class="text-center mb-4">
                                    <a href="#!">
                                        <!-- <img src="./assets/img/bsb-logo.svg"
                                                                alt="BootstrapBrain Logo" width="175" height="57"> -->
                                    </a>
                                </div>
                                <h1 class="text-center">
                                    <b> </b>
                                    <b class="text-decoration-underline">Sign Up</b>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <!-- 회원가입 폼 -->
                    <form @submit.prevent="handleSubmit">
                        <div class="row gy-3 overflow-hidden">
                            <div class="col-12 mb-1">
                                <!-- 아이디 입력과 중복체크 버튼 -->
                                <div class="d-flex justify-content-center">
                                    <div class="form-floating mb-1">
                                        <!-- <input type="text" class="form-control" name="mid" id="mid" ref="member.mid" placeholder="아이디"
                                            style="width: 400px;" required> -->
                                        <input type="text" class="form-control" name="mid" id="mid" v-model=member.mid
                                            placeholder="아이디" style="width: 400px;" required>
                                        <label for="mid" class="form-label ms-2">ID</label>
                                    </div>
                                    <div class="d-flex align-items-center ms-3">
                                        <button class="btn btn-secondary" @click="handleIdCheck">중복체크</button>
                                    </div>
                                </div>
                            </div>
                            <!-- 이름 입력란 -->
                            <div class="d-flex justify-content-center col-12 mb-1">
                                <div class="form-floating mb-1">
                                    <input type="text" class="form-control" name="mname" id="mname"
                                        v-model="member.mname" placeholder="이름" style="width: 510px;" required>
                                    <label for="mname" class="form-label">Name</label>
                                </div>
                            </div>
                            <!-- 비밀번호 입력 -->
                            <div class="d-flex justify-content-center col-12">
                                <div class="form-floating">
                                    <input type="password" class="form-control" name="mpassword" id="mpassword1"
                                        v-model="member.mpassword" value="" placeholder="비밀번호" style="width: 510px;"
                                        required>
                                    <label for="password" class="form-label">Password</label>
                                    <p style="font-size: 0.7em; height: 4px;">※ 비밀번호는 6~12자리의 영문자와 숫자조합으로만 작성하실 수
                                        있습니다.</p>
                                </div>
                            </div>
                            <!-- 비밀번호 입력 확인 -->
                            <div class="d-flex justify-content-center col-12">
                                <div class="form-floating mb-1">
                                    <input type="password" class="form-control" name="mpassword" id="mpassword2"
                                        v-model="mpasswordCheck" value="" placeholder="비밀번호 확인" style="width: 510px;"
                                        required>
                                    <label for="password" class="form-label">Password Check</label>
                                </div>
                            </div>
                            <!-- 이메일 입력 -->
                            <div class="d-flex justify-content-center col-12">
                                <div class="form-floating mb-1">
                                    <input type="email" class="form-control" name="memail" id="memail" value=""
                                        v-model="member.memail" placeholder="이메일" style="width: 510px;" required>
                                    <label for="email" class="form-label">email</label>
                                </div>
                            </div>

                            <!-- 휴대폰입력 -->
                            <div class="d-flex justify-content-center col-12">
                                <div class="d-flex align-items-center mb-1">
                                    <span class="">Phone Number : </span>
                                    <!-- 휴대폰 앞 번호 -->
                                    <input type="text" class="form-control text-center ms-3" name="mphonenumber1"
                                        id="mphonenumber1" value="010" style="width: 80px; height: 45px" readonly>
                                    <span class="ms-2 me-2">-</span>
                                    <!-- 휴대폰 중간 번호 -->
                                    <input type="text" class="form-control text-center" name="mphonenumber2"
                                        v-model="mphonenummiddle" id="mphonenumber2" value="" placeholder="Mid Number"
                                        style="width: 120px; height: 45px" required>
                                    <span class="ms-2 me-2">-</span>
                                    <!-- 휴대폰 뒷 번호 -->
                                    <input type="text" class="form-control text-center" name="mphonenumber3"
                                        v-model="mphonenumend" id="mphonenumber3" value="" placeholder="End Number"
                                        style="width: 120px; height: 45px" required>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
                                <div class="d-grid d-flex justify-content-center">
                                    <RouterLink to="/" class="btn btn-outline-danger btn-lg me-4">
                                        <b>취소</b>
                                    </RouterLink>
                                    <!-- <button class="btn btn-outline-dark btn-lg"
                                                            type="submit"><b>회원가입</b></button> -->
                                    <button class="btn btn-outline-dark btn-lg" type="submit">
                                        <b>회원가입</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="row mt-3">
                        <div class="col-12">
                            <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">
                                <RouterLink to="/find/id" class="link-secondary text-decoration-none">아이디
                                    찾기</RouterLink>
                                <span> | </span>
                                <RouterLink to="/find/password" class="link-secondary text-decoration-none">
                                    비밀번호 찾기</RouterLink>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="shadow col-12 col-md-6" style="height: 800px; border: 2px solid red">
                <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy"
                    src="https://cdn.dribbble.com/users/3578290/screenshots/16190754/media/24bf4cc8a0b3bfddd2bcdfb2c4d12e73.jpg?resize=1000x750&vertical=center"
                    alt="Welcome back you've been missed!" height="100%">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const store = useStore();
const router = useRouter();

/*
    스크립트 유효성 검사 ( https://junvelee.tistory.com/28 )
    1. 아이디 : 영어 대/소문자 + 숫자 (아이디 길이 5 ~ 12) --> /^[a-zA-Z](?=.*[a-z])(?=.*\d)[a-z0-9]{5,12}$/
    (영어 대/소문자로 시작하고 영어 소문자와 숫자가 하나이상은 꼭 필요함)
    2. 아이디 중복 검사
    3. 비밀번호 : 영어 대/소문자 + 숫자 (비밀번호 길이 5 ~ 12) --> /^[a-z0-9#?!@$%^&*-](?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])[a-z0-9#?!@$%^&*-]{5,12}$/
    4. 이메일 : 영어 소문자 or 영어 소문자 + 숫자 (길이 8~12)
    5. 이메일 중복 검사
    6. 휴대폰 번호 : 중간 3~4, 끝 4
    7. 휴대폰 번호 중복 검사
*/


// 데이터베이스가 있다는 가정하에 작성하는 코드
const midVal = store.state.mid;

const mpasswordCheck = ref("");
const mphonenummiddle = ref("");
const mphonenumend = ref("");

const member = ref({
    mid: "",
    mname: "",
    mphone: "",
    mpassword: "",
    memail: "",
    mrole: "",
    menable: "",
    mcreatedat: "",
    mupdatedat: ""
});

const idCheck = ref(false);

function handleIdCheck() {
    console.log(member.value.mid.substring(0, 4));
    // 현재 mid값을 입력하지 않아도 사용가능하다 뜸.
    if (member.value.mid === midVal) {
        alert("중복된 아이디가 있습니다!", member.value.mid);
        member.value.mid = "";
    } else if (member.value.mid !== midVal && member.value.mid.length > 3) {
        alert("사용가능한 아이디입니다!");
        idCheck.value = true;
    } else {
        alert("유효성 검사에 적합하지 않습니다.");
        member.value.mid = "";
    }
}

// 비밀번호 재확인 (비밀번호 input 태그 값 서로 비교)
const passwordCheck = ref(member.value.mpassword === mpasswordCheck.value);
// 계정 생성 일시
const date = new Date();
let dateFormat = date.getFullYear() + '년' + (date.getMonth() + 1) + '월'
    + date.getDate() + '일'

function handleSubmit() {
    if (!idCheck.value) {
        alert("아이디 중복체크해주세요!");
    }
    if (!passwordCheck.value) {
        alert("비밀번호를 다시 한번 확인해주세요!");
    }
    if (idCheck.value && passwordCheck.value && member.value.mid.substring(0, 4) === "kosa") {
        member.value.mphone = mphonenummiddle.value + mphonenumend.value;
        member.value.menable = 1;
        member.value.mrole = "ROLE_ADMIN";
        member.value.mcreatedat = dateFormat;
        // router.push("/")
        console.log(member.value);
        // console.log(JSON.parse(member.value));  // 오류남. 이유 찾아보자.
        console.log(JSON.stringify(member.value));
        console.log(JSON.parse(JSON.stringify(member.value)));
    }
    if (idCheck.value && passwordCheck.value && member.value.mid.substring(0, 4) !== "kosa") {
        member.value.mphone = mphonenummiddle.value + mphonenumend.value;
        member.value.menable = 1;
        member.value.mrole = "ROLE_USER";
        member.value.mcreatedat = dateFormat;
        // router.push("/");
        console.log(member.value);
        // console.log(JSON.parse(member.value));
        console.log(JSON.stringify(member.value));
        console.log(JSON.parse(JSON.stringify(member.value)));
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

.headingArea {
    position: relative;
    padding: 22px 0 0;
    margin: 0 0 20px;
}

.headingArea .title {
    border-bottom: 2px solid #2a3954;
}

#itemTitle {
    font-weight: 700;
    font-size: 1.6rem;
}
</style>
