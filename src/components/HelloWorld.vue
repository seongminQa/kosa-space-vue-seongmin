<template> 
  <div class="card">
    <div class="card-header">Hello World</div>
    <div class="card-body">
      <h4>{{ msg }}</h4>
      <hr/>
      <span>UI Component 입니다.</span>
    </div>
  </div>
</template>

<script setup>
//import { defineProps } from 'vue'; 
// -> import 없이 defineProps를 사용할 수 있도록 .eslintrc.js 에서 설정을 추가함
const props = defineProps(['msg']);
</script>


<style scoped>
span {
  color: green
}
</style>
