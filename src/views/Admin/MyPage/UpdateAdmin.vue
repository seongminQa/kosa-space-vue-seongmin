<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>마이페이지 > 회원정보수정</span>
        </div>

        <div>
            <!-- contents -->
            <div class="headingArea">
                <div class="title">
                    <h1 id="itemTitle">회원정보수정</h1>
                </div>
            </div>
            <!--  -->
            <div class="p-3 p-md-4 p-xl-5 vh-100">
                <div class="">
                    <div class="row d-flex mb-3">
                        <div class="col text-end align-bottom">
                            <p style="font-size: 0.8em"><b style="color:red">*</b>필수입력사항</p>
                        </div>
                    </div>
                    <!-- 회원정보수정 테이블 -->
                    <table class="table">
                        <tbody class="align-middle">
                            <!-- 아이디 -->
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center" style="width: 300px; ">아이디</th>
                                <td class="p-3">
                                    <input type="text" class="form-control p-3" name="mid" id="mid"
                                        v-model.trim="store.state.member.mid" style="width: 300px;" readonly />
                                </td>
                            </tr>
                            <!-- 이름 -->
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">이름
                                </th>
                                <td class="p-3">
                                    <input type="text" class="form-control p-3" name="mname" id="mname"
                                        v-model.trim="store.state.member.mname" style="width: 300px;" readonly />
                                </td>
                            </tr>
                            <!-- 비밀번호 -->
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">비밀번호
                                </th>
                                <td class="p-3">
                                    <div v-if="pwChangeCheck">
                                        <button class="btn btn-dark" @click="pwChange()">비밀번호 변경</button>
                                    </div>
                                    <div v-if="!pwChangeCheck">
                                        <div class="form-floating d-flex mb-1">
                                            <input type="password" class="form-control" name="mpassword1"
                                                id="mpassword1" v-model.trim="mpassword" @input="passwordPatternCheck()"
                                                placeholder="비밀번호" style="width: 300px;">
                                            <label for="password" class="form-label">Password</label>
                                        </div>
                                        <span v-if="mpasswordCheck === false"
                                            class="d-flex justify-content-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            ※ 영어 대/소문자, 숫자, 특수문자를 포함하여야 합니다. (길이 5 ~ 12 공백 X)
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="!pwChangeCheck" style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">비밀번호 확인
                                </th>
                                <td class="p-3">
                                    <div class="form-floating d-flex mb-1">
                                        <input type="password" class="form-control" name="mpassword2" id="mpassword2"
                                            v-model.trim="mpasswordDoubleCheck" @input="passwordDoubleCheck()"
                                            placeholder="비밀번호 확인" style="width: 300px;">
                                        <label for="password" class="form-label">Password Check</label>
                                    </div>
                                    <span v-if="mpasswordCheck2 === false" class="text-danger"
                                        style="font-size: 0.9em; height: 4px;">
                                        비밀번호를 다시 한번 확인해주세요.
                                    </span>
                                </td>
                            </tr>
                            <!-- 이메일 -->
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">이메일</th>
                                <td class="p-3">
                                    <div v-if="!emailChangeCheck" class="d-flex align-items-center mb-1">
                                        <input type="text" class="form-control p-3 me-2" name="memail" id="memail"
                                            value="" v-model.trim="store.state.member.memail" style="width: 250px;"
                                            readonly>
                                        <button class="btn btn-dark" @click="emailChangeBtn()">변경</button>
                                    </div>
                                    <div v-if="emailChangeCheck" class="d-flex align-items-center mb-1">
                                        <input type="text" class="form-control p-3 me-2" name="emailFront"
                                            id="emailFront" v-model="memailFront" style="width: 150px;" />
                                        <span> @ </span>
                                        <input type="text" class="form-control p-3 ms-2" name="emailBack" id="emailBack"
                                            v-model.trim="memailBack" @input="emailPatternCheck()"
                                            style="width: 150px;" />
                                    </div>
                                    <span v-if="!memailCheck === false" class="text-danger"
                                        style="font-size: 0.9em; height: 4px;">
                                        ※ 이메일 형식이 올바르지 않습니다. <br>
                                        ex. kosaspace@naver.com
                                    </span>
                                </td>
                            </tr>
                            <!-- 휴대폰 번호 -->
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">휴대폰번호
                                </th>
                                <td class="p-3">
                                    <div class="d-flex">
                                        <div class="d-flex align-items-center mb-1">
                                            <!-- 휴대폰 앞 번호 -->
                                            <input type="text" class="form-control p-3" name="mphonenumber1"
                                                id="mphonenumber1" value="010" style="width: 80px;" readonly>
                                            <span class="ms-2 me-2">-</span>
                                            <!-- 휴대폰 중간 번호 -->
                                            <input type="text" class="form-control p-3" name="mphonenumber2"
                                                id="mphonenumber2" value="1234" style="width: 100px;"
                                                v-model.trim="mphonenummiddle" placeholder="Mid Number">
                                            <span class="ms-2 me-2">-</span>
                                            <!-- 휴대폰 뒷 번호 -->
                                            <input type="text" class="form-control p-3" name="mphonenumber3"
                                                id="mphonenumber3" value="1234" style="width: 100px;"
                                                v-model.trim="mphonenumend" @input="phonePatternCheck()"
                                                placeholder="End Number" required>
                                        </div>
                                        <span v-if="mphoneCheck === false"
                                            class="d-flex justify-content-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            휴대폰 번호 중간번호 4자리, 끝번호 4자리를 입력해주세요.
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="btn_big_wrap align-content-center">
                            <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>
                            <BaseButtonSubmit @click="handleCheck">완료</BaseButtonSubmit>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-outline-dark me-4" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">회원탈퇴</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 회원탈퇴에 대한 모달 -->
    <!-- Vertically centered modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">회원 탈퇴</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    정말 탈퇴하시겠습니까?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    <button type="button" class="btn btn-danger">탈퇴</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';

const router = useRouter();
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

let pwChangeCheck = ref(true);
let mpasswordDoubleCheck = ref(""); // 비밀번호 확인
let mpasswordCheck = ref(null);     // 비밀번호 유효성 (v-if)
let mpasswordCheck2 = ref(null);    // 비밀번호 2차 확인 (v-if)
let mpassword = ref("");
let memailFront = ref("");
let memailBack = ref("");
let memail = ref("");
let emailChangeCheck = ref(false);
let memailCheck = ref(null);        // 
let mphonenummiddle = ref("");
let mphonenumend = ref("");
let mphoneCheck = ref(null);


// 비밀번호 유효성 검사
const mpasswordPattern = /^[a-zA-Z0-9]{5,12}$/;
function passwordPatternCheck() {
    if (mpasswordPattern.test(member.value.mpassword)) {
        mpasswordCheck.value = true;
    } else {
        mpasswordCheck.value = false;
    }
}

// 비밀번호 두 입력값 일치 확인
function passwordDoubleCheck() {
    if (member.value.mpassword === mpasswordDoubleCheck.value) {
        mpasswordCheck2.value = true;
    } else {
        mpasswordCheck2.value = false;
    }
}
// 이메일 유효성 검사
const memailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 정규식 틀림
function emailPatternCheck() {
    memail.value = memailFront.value + "@" + memailBack.value;
    console.log(memail.value);
    if (memailPattern.test(memail.value)) {
        memailCheck.value = true;
    } else {
        memailCheck.value = false;
    }
}

function phonePatternCheck() {

}

// 비밀번호 변경 버튼
function pwChange() {
    pwChangeCheck.value = !pwChangeCheck.value;
}

// 이메일 변경 버튼
function emailChangeBtn() {
    emailChangeCheck.value = !emailChangeCheck.value;
}

function handleCancle() {
    router.push(`/admin/dashboard`);
}

function handleCheck() {
    router.push(`/admin/dashboard`);
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

body,
h1,
h2,
h3,
h4,
h5,
h6,
input,
p,
span,
small,
textarea,
select {
    font-family: 'Noto Sans KR', sans-serif;
}

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

.btn_big_wrap {
    box-sizing: border-box;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    margin-top: 60px;
}
</style>