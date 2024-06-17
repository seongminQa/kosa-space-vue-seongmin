<template>
    <!-- contents -->
	<div class="headingArea">
		<div class="title">
			<h1 id="itemTitle">개인별 데일리 과제 상세 조회</h1>
		</div>
        <PersonalProfileHeader class="mb-3"/>
        <div class="table">
            <table class="" style="width: 1000px;">
                <thead class="text-center align-middle" style="height: 70px;">
                    <th style="width: 55%">과제 제목</th>
                    <th style="width: 10%">용량</th>
                    <th style="width: 15%">작성일</th>
                    <th style="width: 10%">주차별 태그</th>
                    <th style="width: 10%">-</th>
                </thead>
                <tbody class="text-center align-middle">
                    <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                        <td>https://www.notion.so/Vue-31b721d5b54141e1b092f759fbae295a?pvs=4</td>
                        <td>56KB</td>
                        <td>2024.06.17</td>
                        <td><span class="btn btn-dark btn-sm">1주차</span></td>
                        <td><button class="btn btn-danger btn-sm">삭제</button></td>
                    </tr>
                    <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                        <td>https://www.notion.so/Vue-31b721d5b54141e1b092f759fbae295a?pvs=4</td>
                        <td>56KB</td>
                        <td>2024.06.17</td>
                        <td><span class="btn btn-dark btn-sm">1주차</span></td>
                        <td><button class="btn btn-danger btn-sm">삭제</button></td>
                    </tr>
                    <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                        <td>https://www.notion.so/Vue-31b721d5b54141e1b092f759fbae295a?pvs=4</td>
                        <td>56KB</td>
                        <td>2024.06.17</td>
                        <td><span class="btn btn-dark btn-sm">1주차</span></td>
                        <td><button class="btn btn-danger btn-sm">삭제</button></td>
                    </tr>
                </tbody>
                <tfoot>
                    <td colspan="5" class="text-center" style="height: 50px">
                        <b class="text-danger">페이지네이션 추가</b>
                    </td>
                </tfoot>
            </table>
        </div>
	</div>
</template>

<script setup>
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue'
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
