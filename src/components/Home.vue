<template>
  <div class="section-home section">
    <div class="mask">
      <div class="lead-text fade-in">
          ポートフォリオサイトをご覧いただきありがとうございます。本サイトはフロントエンドエンジニアを目指し、これまでに作成した制作物、身につけたスキルをまとめています。
          <br>私のことをもっと深く知っていただくきっかけになればと思います。
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Karantina:wght@300&family=Lobster+Two&family=Special+Elite&display=swap");

.section-home {
  background-image: url("..//assets/Home.jpg");
  background-size: cover;
}
.mask {
  background-color: rgba(0, 0, 0, 0.2);
  min-height: 100vh;
  margin-bottom: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lead-text {
  padding-bottom: 150px;
  margin: 0 auto;
  width: 80%;
  font-size: 1.5rem;
  color: #fff;
}

@media screen and (max-width: 1024px) {
  .lead-text {
    width: 90%;
    font-size: 1.2rem;
  }
  .vue-typer {
    font-size: 1.8rem;
  }
}
</style>