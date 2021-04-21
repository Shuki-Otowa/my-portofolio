<template>
  <div id="profile">
    <h2>Profile<span class="title-jpn">自己紹介</span></h2>
    <div class="profile-container">
      <div class="profile-img">
        <img src="../assets/me.jpeg" alt="" class="me" />
      </div>
      <div class="profile-text">
        <div class="name">名前：Shuki Otowa</div>
        <div class="from">出身：宮城県</div>
        <div class="hobby">趣味：サーフィン,</div>
        <div class="why">
          なぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているかなぜエンジニアを目指しているか
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: [
        {
          name:"Shuki Otowa"
        }
      ]
    }
  }
}
</script>

<style scoped>
#profile {
  background-color: #90c1cc;
  height: 100%;
  padding-bottom: 150px;
}

.profile-container {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.profile-img {
  margin: 0 auto;
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
  margin-top: 40px;
  widows: 350px;
  height: 350px;
  border-radius: 56% 44% 61% 39% / 37% 67% 33% 63%;
}


@media screen and (max-width: 800px) {
  .profile-container {
    margin-top: 0;
    flex-direction: column;
  }

  .profile-text {
    margin-top: 24px;
    width: 80%;
  }
  .me {
    margin-top: 0;
    widows: 280px;
    height: 280px;
  }
}
</style>