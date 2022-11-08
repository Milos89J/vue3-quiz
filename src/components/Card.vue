
<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const {page} = defineProps(['page'])
const router = useRouter()

const navigateToPage = () => {
  router.push(`/page/${page.id}`)
}

</script>


<template>
    <div class="card" @click="navigateToPage">
     <img :src="page.img" alt="">
     <div class="card-text">
        <h2>{{page.name}}</h2>
        <p>{{page.questions.length}}</p>
     </div>
    </div>

</template>
<style scoped>
.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top:40px;
}
.card {
  width: 300px;
  overflow: hidden;
  border-radius:1%;
  box-shadow: 1px 1px 8px rgb(80, 79, 79);
  margin-bottom: 25px;
  margin-right: 20px;
  cursor: pointer;
}
.card img {
  width: 100%;
  height: 160px;
  margin: 0;
}
.card .card-text {
  padding: 0 5px;
}

</style>