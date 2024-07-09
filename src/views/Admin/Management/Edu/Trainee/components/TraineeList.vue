<template>
    <div>
        <!-- 교육과정 선택했을때 교육과정에 따라 나오는 문구 -->
        <div class="d-flex justify-content-between mt-3">
            <div style="font-weight:bold; font-size: 1.2em;" v-if="educenter.cname !== ''">
                | {{ educenter.cname }}
                <!-- responseList는 객체들의 배열 값.. (수정할 필요가 있음) -->
                <!-- <p v-if="responseList[0].cname === course.cname">
                    ({{ responseList[0].cstartdate }} ~ {{ responseList[0].cenddate }})
                </p> -->
            </div>
        </div>
        <div class="container-fluid mt-3">
            ddd {{ trainee.mid }}
        </div>
    </div>
</template>

<script setup>
import traineeInfoAPI from '@/apis/traineeInfoAPI';
import { ref, defineProps, defineExpose, onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
    traineeList(educenter.ecname, educenter.cname);
})

// 부모 컴포넌트로 내보낼 메소드 정의
defineExpose({ submit });

// 부모 컴포넌트에서 ecname, cname 가져오기
const educenter = defineProps(["ecname", "cname"]);

// DB로부터 받아올 데이터를 저장할 변수
let trainee = ref();

// 교육생 리스트 가져오기
async function traineeList(ecname, cname) {
    try {
        console.log("traineeList 실행");
        console.log("ecname = " + ecname);
        console.log("cname = " + cname);
        if (ecname === "undefined") ecname = "all";
        if (cname === "undefined") cname = "all";
        const response = await traineeInfoAPI.getTraineeList(ecname, cname);
        // trainee.value = response.data;
        trainee.value = JSON.stringify(response.data);
        console.log("trainee.value = " + trainee.value);
    } catch (error) {
        console.log("traineeList 메소드 실패");
        console.log(error);
    }
}

// 부모 컴포넌트에 내보낼 메소드
function submit() {
    traineeList(educenter.ecname, educenter.cname);
}

</script>

<style scoped></style>
