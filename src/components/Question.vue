<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["selectOption"]);

const { question } = defineProps(["question"]);

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <div class="question-container">
    <h2 class="question">{{ question.text }}</h2>
  </div>
  <div class="options-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="option"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <p class="option-number">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 20px;
}
.question {
  font-size: 30px;
  margin-bottom: 20px;
}
.option {
  display: flex;
  margin-bottom: 2px;
  cursor: pointer;
}
.option-number {
  background-color: rgb(132, 236, 202);
  width: 46px;
  height: 46px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.option-value {
  background-color: aliceblue;
  width: 80%;
  height: 46px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>