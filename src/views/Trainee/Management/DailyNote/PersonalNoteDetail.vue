<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>과제 관리 > 개인별 데일리 과제 상세 조회</span>
        </div>
        <!-- contents -->
        <div class="headingArea" style="width: 100%;">
            <div class="title">
                <h1 id="itemTitle">개인별 데일리 과제 상세 조회</h1>
            </div>
            <PersonalProfileHeader class="mt-2 mb-3" />
            <div class="table">
                <table class="" style="width: 100%;">
                    <thead class="text-center align-middle" style="height: 70px;">
                        <th style="width: 50%">과제 제목</th>
                        <th style="width: 8%">용량</th>
                        <th style="width: 12%">수업일</th>
                        <th style="width: 12%">제출일</th>
                        <th style="width: 15%">주차별 태그</th>
                        <th style="width: 15%">-</th>
                    </thead>
                    <tbody class="text-center align-middle">
                        <tr style="border-bottom:1px solid #dcdcdc; height: 60px">
                            <td><a :href="dailynote.dnotionurl" target="_blank"
                                    style="text-decoration-line: none; color:black; ">Day 70. 2024-06-18
                                    컴포넌트 설계작업</a></td>
                            <td>40KB</td>
                            <td>2024.06.18(수)</td>
                            <td>2024.06.18</td>
                            <td><span class="btn btn-dark btn-sm">10주차</span></td>
                            <td>
                                <div class="d-flex">
                                    <BaseButtonUpdate class="updatebtn me-2" @click="modifyModalBtn()">수정
                                    </BaseButtonUpdate>
                                    <BaseButtonCancle class="canclebtn" @click="deleteModalBtn()">
                                        삭제
                                    </BaseButtonCancle>
                                </div>
                            </td>
                        </tr>
                        <tr style="border-bottom:1px solid #dcdcdc; height: 60px">
                            <td>
                                <a :href="dailynote.dnotionurl" target="_blank"
                                    style="text-decoration-line: none; color:black; ">
                                    Day 69. 2024-06-17 시각화 자료 추가 보충작업
                                </a>
                            </td>
                            <td>13MB</td>
                            <td>2024.06.17(화)</td>
                            <td>2024.06.20</td>
                            <td><span class="btn btn-dark btn-sm">10주차</span></td>
                            <td>
                                <div class="d-flex">
                                    <BaseButtonUpdate class="updatebtn me-2" @click="modifyModalBtn()">수정
                                    </BaseButtonUpdate>
                                    <BaseButtonCancle class="canclebtn" @click="deleteModalBtn()">
                                        삭제
                                    </BaseButtonCancle>
                                </div>
                            </td>
                        </tr>
                        <tr style="border-bottom:1px solid #dcdcdc; height: 60px">
                            <td><a :href="dailynote.dnotionurl" target="_blank"
                                    style="text-decoration-line: none; color:black; ">Day 68. 2024-06-16
                                    Rest API 구조 설계</a></td>
                            <td>56KB</td>
                            <td>2024.06.16(월)</td>
                            <td>2024.06.16</td>
                            <td><span class="btn btn-dark btn-sm">10주차</span></td>
                            <td>
                                <div class="d-flex">
                                    <BaseButtonUpdate class="updatebtn me-2" @click="modifyModalBtn()">수정
                                    </BaseButtonUpdate>
                                    <BaseButtonCancle class="canclebtn" @click="deleteModalBtn()">
                                        삭제
                                    </BaseButtonCancle>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-3 d-flex justify-content-between">
                    <RouterLink to="/trainee/dailynote/list" class="btn btn-dark ms-3">목록으로</RouterLink>
                    <button class="btn btn-info me-3" @click="registerModalBtn()">등록</button>
                </div>
            </div>

        </div>
    </div>
    <!--  -->

    <!-- 과제 등록에 대한 모달 -->
    <Dialog id="registerModal">
        <template v-slot:header>
            <div style="background-color: #22C55E; color: white">
                과제 등록
            </div>
        </template>

        <template v-slot:body>
            <form>
                <div class="mb-3">
                    <VueDatePicker class="mb-3" locale="ko" style="width:80%; margin-left: 20px" v-model="date" />
                    <label for="recipient-name" class="col-form-label">과제 제목</label>
                    <input type="text" class="form-control" id="recipient-name" v-model.trim="dailynote.dtitle">
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">Notion URL</label>
                    <textarea class="form-control" id="message-text" v-model.trim="dailynote.dnotionurl"></textarea>
                </div>
            </form>
        </template>

        <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="dailyRegister()">등록</button>
        </template>
    </Dialog>

    <!-- 과제 수정에 대한 모달 -->
    <Dialog id="modifyModal">
        <template v-slot:header>
            <div style="background-color: #22C55E; color: white">
                과제 수정
            </div>
        </template>

        <template v-slot:body>
            <form>
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">과제 제목</label>
                    <input type="text" class="form-control" id="recipient-name" v-model.trim="dailynote.dtitle">
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">Notion URL</label>
                    <textarea class="form-control" id="message-text" v-model.trim="dailynote.dnotionurl"></textarea>
                </div>
            </form>
        </template>

        <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="dailyModify()">수정</button>
        </template>
    </Dialog>

    <!-- 과제 삭제에 대한 모달 -->
    <!-- Vertically centered modal -->
    <Dialog id="deleteModal">
        <template v-slot:header>
            <div style="background-color: #22C55E; color: white">
                과제 삭제
            </div>
        </template>

        <template v-slot:body>
            정말 삭제하시겠습니까?
        </template>

        <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-danger" @click="dailyDelete()">삭제</button>
        </template>
    </Dialog>

</template>

<script setup>
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue'
import { Modal } from 'bootstrap';
import Dialog from '@/components/UIComponents/Dialog.vue';
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const dailynote = ref({
    // don: 1,
    // mid: "M2001",
    dtitle: "",
    dnotionurl: "https://opalescent-sternum-860.notion.site/Vue-31b721d5b54141e1b092f759fbae295a?pvs=4",
    // dsize: "", // back에서 계산
    // dhashtag: "", // back에서 계산
    dsubmitedat: "",
    // dcreatedat: "",
    // dupdatedat: ""
})

// 일일과제 등록에 저장한 시간을 기록하기위해서 사용
const date = ref();
// 모달에 대한 변수
let registerModal = null;
let modifyModal = null;
let deleteModal = null;

onMounted(() => {
    const registerDate = new Date();
    date.value = registerDate;

    // 모달
    registerModal = new Modal(document.querySelector('#registerModal'));
    modifyModal = new Modal(document.querySelector('#modifyModal'));
    deleteModal = new Modal(document.querySelector('#deleteModal'));
});


// 등록(모달)
function registerModalBtn() {
    registerModal.show();
}
// 등록
function dailyRegister() {
    dailynote.value.dcreatedat = date.value;
    console.log(JSON.parse(JSON.stringify(dailynote.value)));
    registerModal.hide();
}

// 수정(모달)
function modifyModalBtn() {
    modifyModal.show();
}
// 수정
function dailyModify() {
    dailynote.value.dupdatedat = date.value;
    console.log(JSON.parse(JSON.stringify(dailynote.value)));
    modifyModal.hide();
}

// 삭제(모달)
function deleteModalBtn() {
    deleteModal.show();
}
// 삭제
function dailyDelete() {
    // dailynote 객체의 해당하는 dno
    deleteModal.hide();
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

.btn_big_wrap {
    box-sizing: border-box;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    margin-top: 60px;
}

.updatebtn {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    height: 31px;
    line-height: 0px;
    text-align: center;
    border-radius: 3px;
    width: 46px;
    flex: 0 0 46px;
    color: white;
    background-color: #22C55E;
    border: 1px solid white;
}

.canclebtn {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    height: 31px;
    line-height: 0px;
    text-align: center;
    border-radius: 3px;
    width: 46px;
    flex: 0 0 46px;
    color: white;
    background-color: #232323;
    border: 1px solid black;
}
</style>
