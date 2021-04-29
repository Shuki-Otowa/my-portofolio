<template>
  <div id="home">
    <div class="lead-text">
      <vue-typer
        :text="['Thank you for visiting\nmy portfolio.']"
        :repeat="0"
        :preTypeDelay="1000"
        :typeDelay="150"
        :preEraseDelay="5000"
        :eraseDelay="2000"

        
      ></vue-typer>
    </div>
  </div>
</template>

<style scoped>
#home {
  background-image: url("..//assets/Home.jpg");
  background-size: cover;
  min-height: 100vh;
  /* margin-bottom: -80px; */

}

.lead-text {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 150px;
  width: 100%;
  height: 100%;
}

.vue-typer {
  font-family: 'Copperplate', 'Copperplate Gothic Light', fantasy;
  font-size: 5rem;
}

@media screen and (max-width: 600px) {
.vue-typer {
  font-size: 28px;
}
}
</style>