<script setup>
import p from "../data/pages.json";
import { ref, watch } from "vue";
import Card from '../components/Card.vue';

const pages = ref(p);
const search = ref("");

watch(search, () => {
  pages.value = p.filter((page) =>
    page.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>


<template>
  <div>
    <header>
      <h1>Science Page</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <Card v-for="page in pages" :key="page.id" :page="page" />
    </div>
  </div>
</template>
<style scoped>

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
  margin-top: 40px;
}
</style>