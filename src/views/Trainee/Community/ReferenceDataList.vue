<template>
    <!-- contents -->
    <div class="headingArea">
        <!--  -->
        <div class="d-flex justify-content-end mt-1 me-3">
            <select id="ancategory" class="form-control mb-2" v-model.trim="referencedata.refcategory"
                style="width: 65px;">
                <option value="전체">전체</option>
                <option value="수업">수업</option>
                <option value="과제">과제</option>
                <option value="기타">기타</option>
            </select>
        </div>
        <div>
            <table class="mt-1" style="width: 100%;">
                <thead class="text-center align-middle"
                    style="height: 70px; font-size: 1.2rem; background-color: #22C55E; color:white;">
                    <th style="width: 10%">유형</th>
                    <th style="width: 30%">파일</th>
                    <th style="width: 12%">작성자</th>
                    <th style="width: 12%">업로드 일시</th>
                    <th style="width: 12%">수정 일시</th>
                    <th style="width: 9%">용량</th>
                    <th style="width: 15%">다운로드</th>
                </thead>
                <tbody class="text-center align-middle">
                    <tr style="border-bottom:1px solid #dcdcdc; height: 60px">
                        <td>
                            <PhFilePpt :size="32" />
                        </td>
                        <td class="text-start">
                            <!-- <img src="@/assets/fileimages/file-powerpoint-regular.svg"> -->
                            front-end-vue3.pptx
                        </td>
                        <td>신용권 교수</td>
                        <td>2024.06.18</td>
                        <td>-</td>
                        <td>4,943KB</td>
                        <td>
                            <PhDownload :size="32" />
                        </td>
                        <!-- 
                            파일 다운로드 REST API와 함께 사용하자.
                            <img v-if="battach != null"
                        :src="`${axios.defaults.baseURL}/board/battach/${board.bno}?accessToken=${$store.state.accessToken}`"
                        width="300">
                        -->
                    </tr>
                    <tr style="border-bottom:1px solid #dcdcdc; height: 60px">
                        <td>
                            <PhFileArchive :size="32" />
                        </td>
                        <td class="text-start">
                            KMS Tools 01.12.2023.zip
                        </td>
                        <td>신용권 교수</td>
                        <td>2024.06.18</td>
                        <td>-</td>
                        <td>46.37MB</td>
                        <td>
                            <PhDownload :size="32" />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <td colspan="7" class="text-center" style="height: 60px">
                        <b class="text-danger">페이지네이션 추가</b>
                    </td>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script setup>
import referencedata from '@/store/referencedata';

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
    font-size: 1.2rem;
}
</style>
