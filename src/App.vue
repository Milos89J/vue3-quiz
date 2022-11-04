<script setup>
import p from "./data/pages.json";
import { ref } from "vue";

const pages = ref(p)
const search = ref("")
</script>


<template>
  <div class="container">
    <header>
      <h1>Pages</h1>
      <input type="text" placeholder="Search..." />
    </header>
    <div v-for="page in pages" :key="page.id" class="options-container">
      <div class="card">
        <img :src="page.img" alt="" />
        <div class="cars-test">
          <h2>{{page.name}}</h2>
          <p>{{page.questions.length}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}
header h1 {
  font-weight: bold;
  margin-right: 25px;
}
header input {
  border: none;
  background-color: rgb(236, 233, 233);
  padding: 7px;
  border-radius: 5px;
}
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
.card .card-text {
  font-weight: bold;
}
</style>