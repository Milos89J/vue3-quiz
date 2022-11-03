<template>
  <div class="container">
    <header>
      <h1>Pages</h1>
      <input type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <div class="card">
        <img src="https://brainconnection.brainhq.com/wp-content/uploads/2019/01/math-1200x600.png" alt="" />
        <div class="cars-test">
          <h2>Math</h2>
          <p>12 questions</p>
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
</style>