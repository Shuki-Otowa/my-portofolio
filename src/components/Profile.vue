<template>
  <div id="profile">
    <div class="container">
    <h2>Profile<span class="title-jpn">自己紹介</span></h2>
    <div class="profile-container">
      <div class="profile-img">
        <img src="../assets/me.jpeg" alt="" class="me" />
      </div>
      <div class="profile-text">
        <div class="name">名前：Shuki Otowa</div>
        <div class="from">出身：宮城県</div>
        <div class="hobby">趣味：サーフィン</div>
        <div class="why">
          なぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているか
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<style scoped>
#profile {
  background-color: #90c1cc;
  min-height: 100vh;
  padding-bottom: 150px;
}
.container{
  max-width: 1800px;
  margin: 0 auto;
}
h2 {
  letter-spacing: 6px;
}
.profile-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 90%; */
  max-width: 1280px;
  margin: 0 auto;
}

.profile-img {
      text-align: center;

}

.profile-text {
  width: 60%;
  margin: 0 auto;
  padding: 20px 0;
}
.why {
  margin-top: 24px;
}
.me {
  max-width: 500px;
  width: 80%;
  margin-top: 40px;
  border-radius: 56% 44% 61% 39% / 37% 67% 33% 63%;
}

@media screen and (max-width: 1100px) {
  .profile-container {
    flex-direction: column;
  }

  .profile-text {
    margin-top: 24px;
    width: 90%;
  }

  .me {
    width: 90%;
    height: 90%;
  }
}
</style>