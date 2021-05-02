<template>
  <div class="section-home section">
    <div class="lead-text">
      <!-- <vue-typer
        :text="['Thank you for visiting\nmy portfolio.']"
        :repeat="0"
        :preTypeDelay="1000"
        :typeDelay="150"
        :preEraseDelay="5000"
        :eraseDelay="2000"
      ></vue-typer> -->
    </div>
    <p>ポートフォリオサイトをご覧いただきありがとうございます。フロントエンドエンジニアへの転職を目財しているShukiと申します。
このサイトではこれまでに作成した制作物、身につけたスキルをまとめています。
</p>
  </div>
</template>

<style scoped>
.section-home {
  background-image: url("..//assets/Home.jpg");
  background-size: cover;
  padding-bottom: 0;
}
p {
  width: 70%;
  margin: 0 auto;

  font-size: 1.5rem;
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
  font-family: "Copperplate", "Copperplate Gothic Light", fantasy;
  font-size: 4rem;
}

@media screen and (max-width: 600px) {
  .vue-typer {
    font-size: 28px;
  }
}
</style>