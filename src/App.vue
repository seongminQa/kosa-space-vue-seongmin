<template>
  <!-- <div class="wrapper">
        <AdminSlidebar/>
    </div> -->
  <!-- 디스플레이 플렉스 (컬럼을 위에서 아래로 쌓는다.) 뷰포트 100% -->
  <!-- <div class="d-flex flex-column vh-100">
    <span>확인</span>
    <router-view class="h-100 w-100" />
  </div> -->
  <div class="wrapper">
    <!--slidebar-->
    <AdminSlidebar />
    <RouterView />
  </div>

</template>

<script setup>
import AdminSlidebar from "@/components/Slidebar/AdminSlidebar.vue";
import TraineeSlidebar from "./components/Slidebar/TraineeSlidebar.vue";
import ProfessorSlidebar from "./components/Slidebar/ProfessorSlidebar.vue";
import { RouterView } from "vue-router";
</script>

<style scoped>
.wrapper {
  display: flex;
  background-color: #f0f4fd;
}
</style>
