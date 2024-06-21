<template>
    <!-- contents -->
    <div class="headingArea">
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
                            <!-- 아이디 입력과 중복체크 버튼 -->
                            <div class="col-12 mb-2">
                                <div class="d-flex justify-content-center">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" name="mid" id="mid"
                                            v-model.trim="member.mid" placeholder="아이디" style="width: 400px;"
                                            @input="idPatternCheck()" required>
                                        <label for="mid" class="form-label ms-2">ID</label>
                                    </div>
                                    <div class="d-flex align-items-center ms-3">
                                        <button class="btn btn-secondary" @click="handleIdCheck()">중복체크</button>
                                    </div>
                                </div>
                                <span v-if="midCheck" class="d-flex justify-content-center text-danger"
                                    style="font-size: 0.9em; height: 4px;">
                                    영어 소문자와 숫자로 입력해주세요. (길이 5 ~ 12 공백 X)
                                </span>
                            </div>
                            <!-- 이름 입력란 -->
                            <div class="col-12 mb-2">
                                <div class="d-flex justify-content-center">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" name="mname" id="mname"
                                            v-model.trim="member.mname" placeholder="이름" style="width: 510px;"
                                            @input="namePatternCheck()" required>
                                        <label for="mname" class="form-label">Name</label>
                                    </div>
                                </div>
                                <span v-if="mnameCheck" class="d-flex justify-content-center text-danger"
                                    style="font-size: 0.9em; height: 4px;">
                                    2글자 이상 한글만 입력 가능합니다. (길이 2 ~ 5 공백 X)
                                </span>
                            </div>
                            <!-- 비밀번호 입력 -->
                            <div class="col-12 mb-2">
                                <div class="d-flex justify-content-center col-12">
                                    <div class="form-floating">
                                        <input type="password" class="form-control" name="mpassword" id="mpassword1"
                                            v-model.trim="member.mpassword" value="" placeholder="비밀번호"
                                            style="width: 510px;" @input="passwordPatternCheck()" required>
                                        <label for="password" class="form-label">Password</label>
                                        <!-- <p style="font-size: 0.7em; height: 4px;">※ 비밀번호는 6~12자리의 영문자와 숫자조합으로만 작성하실 수
                                            있습니다.</p> -->
                                    </div>
                                </div>
                                <span v-if="mpasswordCheck" class="d-flex justify-content-center text-danger"
                                    style="font-size: 0.9em; height: 4px;">
                                    영어 대/소문자, 숫자, 특수문자를 포함하여야 합니다. (길이 5 ~ 12 공백 X)
                                </span>
                            </div>
                            <!-- 비밀번호 일치 확인 -->
                            <div class="col-12 mb-2">
                                <div class="d-flex justify-content-center">
                                    <div class="form-floating">
                                        <input type="password" class="form-control" name="mpassword" id="mpassword2"
                                            v-model.trim="mpasswordDoubleCheck" value="" placeholder="비밀번호 확인"
                                            style="width: 510px;" @input="passwordDoubleCheck()" required>
                                        <label for="password" class="form-label">Password Check</label>
                                    </div>
                                </div>
                                <span v-if="mpasswordCheck2" class="d-flex justify-content-center text-danger"
                                    style="font-size: 0.9em; height: 4px;">
                                    비밀번호를 다시 한번 확인해주세요.
                                </span>
                            </div>

                            <!-- 이메일 입력 -->
                            <div class="col-12 mb-2">
                                <div class="d-flex justify-content-center">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" name="memail" id="memail" value=""
                                            v-model.trim="member.memail" placeholder="이메일" style="width: 510px;"
                                            @input="emailPatternCheck()" required>
                                        <label for="email" class="form-label">email</label>
                                    </div>
                                </div>
                                <span v-if="memailCheck" class="d-flex justify-content-center text-danger"
                                    style="font-size: 0.9em; height: 4px;">
                                    ex: abcd@gmail.com 의 형식으로 기입해주십시오.
                                </span>
                            </div>

                            <!-- 휴대폰입력 -->
                            <div class="col-12 mb-4">
                                <div class="d-flex justify-content-center">
                                    <div class="d-flex align-items-center mb-1">
                                        <span class="">Phone Number : </span>
                                        <!-- 휴대폰 앞 번호 -->
                                        <input type="text" class="form-control text-center ms-3" name="mphonenumber1"
                                            id="mphonenumber1" value="010" style="width: 80px; height: 45px" readonly>
                                        <span class="ms-2 me-2">-</span>
                                        <!-- 휴대폰 중간 번호 -->
                                        <input type="text" class="form-control text-center" name="mphonenumber2"
                                            v-model.trim="mphonenummiddle" id="mphonenumber2" value=""
                                            placeholder="Mid Number" style="width: 120px; height: 45px" required>
                                        <span class="ms-2 me-2">-</span>
                                        <!-- 휴대폰 뒷 번호 -->
                                        <input type="text" class="form-control text-center" name="mphonenumber3"
                                            v-model.trim="mphonenumend" id="mphonenumber3" value=""
                                            placeholder="End Number" style="width: 120px; height: 45px" required>
                                    </div>
                                </div>
                                <span v-if="mphoneCheck" class="d-flex justify-content-center text-danger"
                                    style="font-size: 0.9em; height: 4px;">
                                    휴대폰 번호는 필수로 입력하셔야 합니다.
                                </span>
                            </div>
                            <div class="col-12 mt-4">
                                <div class="d-grid d-flex justify-content-center">
                                    <RouterLink to="/" class="btn btn-outline-danger btn-lg me-4">
                                        <b>취소</b>
                                    </RouterLink>
                                    <!-- <button class="btn btn-outline-dark btn-lg"
                                                            type="submit"><b>회원가입</b></button> -->
                                    <button class="btn btn-outline-dark btn-lg" :class="btnShow" type="submit">
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
                    height="100%">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const store = useStore();
const router = useRouter();

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
const mpasswordDoubleCheck = ref("");

/*
    스크립트 유효성 검사 
    ( https://junvelee.tistory.com/28 or https://velog.io/@purplew/Javascript-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#-test )

    1. 아이디 : 영어 소문자 + 숫자 (아이디 길이 5 ~ 12) --> 
    (영어 소문자로 시작하고 영어 소문자는 꼭 필요함. 숫자는 선택)
    2. 아이디 중복 검사
    3. 비밀번호 : 영어 대/소문자 + 숫자 (비밀번호 길이 5 ~ 12) --> 
     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{4,20}$/;
    4. 이메일 : 영어 소문자 or 영어 소문자 + 숫자 (길이 8~12) + @ + 이메일.com
    5. 이메일 중복 검사
    6. 휴대폰 번호 : 중간 4, 끝 4
    7. 휴대폰 번호 중복 검사 (변경될 수 있으므로 뺌)
    8. 이름 한글로만 받기
*/

// v-if를 위한 상태 변수
let midCheck = ref(null);
let mnameCheck = ref(null);
let mpasswordCheck = ref(null);
let mpasswordCheck2 = ref(null);
let memailCheck = ref(null);
let mphonenummiddle = ref("");
let mphonenumend = ref("");
let mphoneCheck = ref(null);

// ####유효성 검사####
// 아이디 유효성 검사
function idPatternCheck() {
    const midPattern = /^[a-z0-9]{4,12}$/;
    // console.log(midPattern.test(member.value.mid));
    if (midPattern.test(member.value.mid)) {
        midCheck.value = false;
    } else {
        midCheck.value = true;
    }
}
// 이름 유효성 검사
function namePatternCheck() {
    const mnamePattern = /^[가-힣]{2,6}$/;
    // console.log(mnamePattern.test(member.value.mname));
    if (mnamePattern.test(member.value.mname)) {
        mnameCheck.value = false;
    } else {
        mnameCheck.value = true;
    }
}
// 비밀번호 유효성 검사
function passwordPatternCheck() {
    const mpasswordPattern = /^[a-zA-Z0-9]{5,12}$/;
    // console.log(mpasswordPattern.test(member.value.mpassword));
    if (mpasswordPattern.test(member.value.mpassword)) {
        mpasswordCheck.value = false;
    } else {
        mpasswordCheck.value = true;
    }
}
// 비밀번호 2차 확인
function passwordDoubleCheck() {
    if (member.value.mpassword === mpasswordDoubleCheck.value) {
        mpasswordCheck2.value = false;
    } else {
        mpasswordCheck2.value = true;
    }
}
// 이메일 유효성 검사
function emailPatternCheck() {
    const memailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // console.log(memailPattern.test(member.value.memail));
    if (memailPattern.test(member.value.memail)) {
        memailCheck.value = false;
    } else {
        memailCheck.value = true;
    }
}

let totalCheck = ref(false);
const mphonePattern = /^(010)-\d{4}-\d{4}$/;
member.value.mphone = "010" + "-" + mphonenummiddle.value + "-" + mphonenumend.value;
let mphoneNumber = ref("");
mphoneNumber.value = mphonePattern.test(member.value.mphone);

let btnShow = ref("");

// 전체 입력값 확인하기
function onState() {
    console.group("각 input태그의 값을 확인하기");
    console.log("midCheck : " + midCheck.value);
    console.log("mnameCheck : " + mnameCheck.value);
    console.log("mpasswordCheck : " + mpasswordCheck.value);
    console.log("mpasswordCheck2 : " + mpasswordCheck2.value);
    console.log("memailCheck : " + memailCheck.value);
    console.log("mphoneNumber : " + mphoneNumber.value);
    console.end("확인");
    if (!midCheck.value && !mnameCheck.value && !mpasswordCheck.value
        && !mpasswordCheck2.value && !memailCheck.value
        && mphoneNumber.value) {
        totalCheck.value = true;
        console.log("totalCheck : " + totalCheck.value);
        btnShow.value = ""
    } else {
        totalCheck.value = false;
        console.log("totalCheck : " + totalCheck.value);
        btnShow.value = "disabled"
    }
}

// 아이디 중복 체크 (데이터베이스가 있다는 가정하에 작성하는 코드)
const midVal = store.state.mid;  // 현재 M2001 로 고정

// 아이디 중복검사를 위한 변수
const idCheck = ref(false);

// 아이디 중복검사 버튼 이벤트
function handleIdCheck() {
    // console.log(member.value.mid.substring(0, 4));
    // 현재 mid값을 입력하지 않아도 사용가능하다 뜸.
    if (member.value.mid === midVal) {
        alert("중복된 아이디가 있습니다!", member.value.mid);
        member.value.mid = "";
        idCheck.value = false;
    } else if (member.value.mid !== midVal && member.value.mid.length > 3) {
        alert("사용가능한 아이디입니다!");
        idCheck.value = true;
    } else {
        alert("유효성 검사에 적합하지 않습니다.");
        member.value.mid = "";
        idCheck.value = false;
    }
}

// 계정 생성 일시와 일자까지만 포맷
const date = new Date();
let dateFormat = date.getFullYear() + '년' + (date.getMonth() + 1) + '월' + date.getDate() + '일';

// 회원가입 버튼 이벤트
function handleSubmit() {

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