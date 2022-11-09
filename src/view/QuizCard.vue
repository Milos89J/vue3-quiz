<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import pages from "../data/pages.json";

const route = useRoute();

const quizId = parseInt(route.params.id);
const quiz = pages.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
const numberCorrect = ref(0);
const results = ref(false);

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);
const percentBar = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);
const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberCorrect.value++;
  }
  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    results.value = true;
  }
  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :percentBar="percentBar" />
    <div>
      <Question
        v-if="!results"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
    </div>
    <Result
      :quizQuestionLength="quiz.questions.length"
      :numberCorrect="numberCorrect"
    />
  </div>
</template>

<style scoped>
</style>