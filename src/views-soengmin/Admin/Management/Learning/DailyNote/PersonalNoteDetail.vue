<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 데일리 과제 관리 > 개인별 데일리 과제 상세 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">개인별 데일리 과제 상세 조회</h1>
            </div>

            <PersonalProfileHeader class="mt-2 mb-3" />
            <div class="table">
                <table class="" style="width: 100%;">
                    <thead class="text-center align-middle" style="height: 70px;">
                        <th style="width: 45%">과제 제목</th>
                        <th style="width: 10%">용량</th>
                        <th style="width: 15%">수업일</th>
                        <th style="width: 15%">작성일</th>
                        <th style="width: 10%">주차별 태그</th>
                    </thead>
                    <tbody class="text-center align-middle">
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                            <td><a :href="dailynote.dnotionurl" target="_blank"
                                    style="text-decoration-line: none; color:black; ">Day 70. 2024-06-18
                                    컴포넌트 설계작업</a></td>
                            <td>40KB</td>
                            <td>2024.06.18(수)</td>
                            <td>2024.06.18</td>
                            <td><span class="btn btn-dark btn-sm">10주차</span></td>
                        </tr>
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                            <td><a :href="dailynote.dnotionurl" target="_blank"
                                    style="text-decoration-line: none; color:black; ">Day 69. 2024-06-17 시각화 자료 추가
                                    보충작업</a></td>
                            <td>13MB</td>
                            <td>2024.06.17(화)</td>
                            <td>2024.06.20</td>
                            <td><span class="btn btn-dark btn-sm">10주차</span></td>
                        </tr>
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                            <td><a :href="dailynote.dnotionurl" target="_blank"
                                    style="text-decoration-line: none; color:black; ">Day 68. 2024-06-16 Rest API 구조
                                    설계</a></td>
                            <td>56KB</td>
                            <td>2024.06.16(월)</td>
                            <td>2024.06.16</td>
                            <td><span class="btn btn-dark btn-sm">10주차</span></td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-3 d-flex justify-content-between">
                    <RouterLink to="/trainee/dailynote/list" class="btn btn-dark ms-3">목록으로</RouterLink>
                </div>
                <!-- <div class="btn_big_wrap">
                    <BaseButtonSubmit @click="handleCheck()">뒤로가기</BaseButtonSubmit>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue'
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const dailynote = ref({
    // don: 1,
    //mid: "M2001",
    dtitle: "",
    dnotionurl: "https://opalescent-sternum-860.notion.site/Vue-31b721d5b54141e1b092f759fbae295a?pvs=4",
    //dsize: "", // back에서 계산
    //dhashtag: "", // back에서 계산
    dsubmitedat: "",
    // dcreatedat: "",
    // dupdatedat: ""
})

const router = useRouter();

function handleCheck() {
    router.push(`/admin/dailynote/trainee/note/list`);
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
