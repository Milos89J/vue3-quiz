<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const { quizQuestionLength, numberCorrect } = defineProps([
  "quizQuestionLength",
  "numberCorrect",
]);
</script>

<template>
  <div class="result">
    <h1>{{ quizQuestionLength }}/{{ numberCorrect }}</h1>
    <RouterLink to="/"> Go Back</RouterLink>
  </div>
</template>

<style scoped>
.result {
  text-align: center;
  padding: 100px 0;
}
p {
  font-size: 20px;
}
h1 {
  font-size: 60px;
}
</style>