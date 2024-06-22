<template>
    <!-- contents -->
    <div class="headingArea">
        <!--  -->
        <div class="row d-flex justify-content-center align-items-center p-3 p-md-4 p-xl-5 vh-100">
            <div class="shadow col-12 col-md-6" style="height: 800px;">
                <div class="card-body p-3 p-md-4 p-xl-5" style="height: 90%;">
                    <div class="row mb-5">
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
                                    <b class="text-decoration-underline">Find ID</b>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <!-- 아이디 찾기 폼 -->
                    <form @submit.prevent="handleSubmit">
                        <div class="row gy-3 overflow-hidden">
                            <!-- 휴대폰 번호 입력 -->
                            <div class="col-12 mb-3">
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
                                            placeholder="End Number" style="width: 120px; height: 45px"
                                            @input="phonePatternCheck()" required>
                                    </div>
                                </div>
                                <span v-if="mphoneCheck === false" class="d-flex justify-content-center text-danger"
                                    style="font-size: 0.9em; height: 4px;">
                                    휴대폰 번호 중간번호 4자리, 끝번호 4자리를 입력해주세요.
                                </span>
                            </div>

                            <!-- 이메일 입력 폼 -->
                            <div class="col-12 mb-4">
                                <div class="d-flex justify-content-center">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" name="memail" id="memail" value=""
                                            v-model.trim="member.memail" placeholder="이메일" style="width: 510px;"
                                            @input="emailPatternCheck()" required>
                                        <label for="email" class="form-label">email</label>
                                    </div>
                                </div>
                                <span v-if="memailCheck === false" class="d-flex justify-content-center text-danger"
                                    style="font-size: 0.9em; height: 4px;">
                                    ex: abcd@gmail.com 의 형식으로 기입해주십시오.
                                </span>
                            </div>

                            <!-- 아이디와 이메일이 일치하는지 보여주는 div 만들기? -->
                            <div class="d-flex justify-content-center col-12">
                                <div class="d-grid">
                                    <button class="btn btn-outline-dark btn-lg" type="submit" @click="handleFindId()"
                                        style="width: 500px"><b>아이디
                                            찾기</b></button>
                                </div>
                            </div>
                            <div class="col-12">
                                <!-- 아이디와 이메일이 서로 일치한다면 -->
                                <p v-if="introduceId" class="text-center">
                                    회원님의 아이디는 <b style="color:red">'{{ idMessage }}'</b>으로 등록되어 있습니다.
                                </p>
                                <!-- 아이디와 이메일이 서로 일치하지 않는다면 -->
                                <p v-if="checkIdEmail" class="text-center text-danger">
                                    전화번호와 이메일에 일치하는 아이디가 없습니다.
                                </p>
                            </div>
                        </div>
                    </form>

                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-3">
                                <RouterLink to="/login" class="link-secondary text-decoration-none">로그인</RouterLink>
                                <span> | </span>
                                <RouterLink to="/find/password" class="link-secondary text-decoration-none">
                                    비밀번호 찾기</RouterLink>
                                <span> | </span>
                                <RouterLink to="/signUp" class="link-secondary text-decoration-none">
                                    회원가입</RouterLink>
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
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

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

let mphonenummiddle = ref("");
let mphonenumend = ref("");
let mphoneCheck = ref(null);
let memailCheck = ref(null);
let introduceId = ref(null);

// 휴대폰 번호 유효성 검사
const mphonePattern = /^(010)-\d{4}-\d{4}$/;
function phonePatternCheck() {
    member.value.mphone = "010" + "-" + mphonenummiddle.value + "-" + mphonenumend.value;
    console.log(member.value.mphone);
    if (mphonePattern.test(member.value.mphone)) {
        mphoneCheck.value = true;
    } else {
        mphoneCheck.value = false;
    }
}

// 이메일 유효성 검사
const memailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
function emailPatternCheck() {
    if (memailPattern.test(member.value.memail)) {
        memailCheck.value = true;
    } else {
        memailCheck.value = false;
    }
}

let checkIdEmail = ref(null);
let idMessage = ref("");

// 아이디 찾기 버튼
function handleFindId() {
    if (member.value.mphone.length === 0) {
        alert("휴대폰 번호를 입력해주세요.");
    } else if (member.value.memail.length === 0) {
        alert("이메일을 입력해주세요.");
    } else {
        if ((member.value.mphone === store.state.member.mphone) && (member.value.memail === store.state.member.memail)) {
            introduceId.value = true;
            checkIdEmail.value = false;
            idMessage.value = store.state.member.mid;
        } else {
            introduceId.value = false;
            checkIdEmail.value = true;
        }
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
