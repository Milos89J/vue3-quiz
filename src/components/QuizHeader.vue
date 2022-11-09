<script setup>
import { defineProps } from "vue";

const { questionStatus, percentBar } = defineProps([
  "questionStatus",
  "percentBar",
]);
</script>

<template>
  <div>
    <header>
      <h4>Question {{ questionStatus }}</h4>
      <div class="bar">
        <div class="bar-status" :style="{ width: percentBar }"></div>
      </div>
    </header>
  </div>
</template>
<style scoped>
header {
  margin-top: 18px;
}
header h4 {
  font-size: 25px;
}
.bar {
  width: 260px;
  height: 40px;
  border: 2px solid rgb(19, 166, 177);
}
.bar-status {
  height: 100%;
  width: 0%;
  background-color: rgb(132, 236, 202);
}
</style>