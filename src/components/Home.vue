<template>
  <div class="section-home section">
    <div class="for-vuetyper">
      <vue-typer
        :text="['Thank you for visiting\nmy portfolio.']"
        :repeat="0"
        :preTypeDelay="2500"
        :typeDelay="100"
      ></vue-typer>
    </div>
    <div class="lead-text fade-in">
      <p>
        ポートフォリオサイトをご覧いただきありがとうございます。フロントエンドエンジニアへの転職を目財しているShukiと申します。
        このサイトではこれまでに作成した制作物、身につけたスキルをまとめています。
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Karantina:wght@300&family=Lobster+Two&family=Special+Elite&display=swap");

.section-home {
  background-image: url("..//assets/Home.jpg");
  background-size: cover;
  padding-bottom: 0;
}
.lead-text {
  margin: 0 auto;
  width: 80%;
  font-size: 1.5rem;
}

.for-vuetyper {
  padding: 60px 0;
  display: flex;
  justify-content: center;
}
.vue-typer {
  font-family: 'Copperplate Gothic Light', fantasy !important;
  font-size: 3.5rem;
}
/*フェードイン表示の指定*/
.fade-in {
  opacity: 0;
  animation: fade-in 6s ease forwards;
}
@keyframes fade-in {
  100% {
    opacity: 1;
  }
}

/*以下遅延の指定*/
.lead-text {
  animation-delay: 3.5s;
}

@media screen and (max-width: 600px) {
  .lead-text {
    width: 90%;
    font-size: 1.2rem;
  }
  .vue-typer {
    font-size: 1.8rem;
  }
}
</style>