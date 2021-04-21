<template>
  <div id="home">
    <div class="lead-text">
      <vue-typer
        :text="['Hello World.\nThank you for visiting\nmy portfolio.']"
        class="top-text"
        :repeat="0"
        :preTypeDelay="1000"
        :typeDelay="120"
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
  height: 100vh;
  margin-bottom: -80px;

}

.lead-text {
  margin: 0 auto;
}

.vue-typer {
  font-family: Copperplate, 'Copperplate Gothic Light', fantasy;
  font-size: 3.5rem;
  line-height: 1.5;
}

</style>