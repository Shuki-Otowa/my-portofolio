<template>
  <div class="container">
    <h2>Work</h2>
    <div class="items">
      <div class="item"><h3>item1</h3></div>
      <div class="item"><h3>item2</h3></div>
      <div class="item"><h3>item3</h3></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: rgb(250, 137, 137);
  height: 1000px;
}

.items {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
}

.item {
  text-align: center;
  padding-top: 20px;
  width: 25%;
  background-color: #fff;
  border-radius: 30px;
  height: 600px;
}
</style>