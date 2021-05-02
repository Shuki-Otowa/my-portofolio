<template>
  <div class="profile-section section">
    <div class="wrapper">
      <h2 class="h2-title">Profile<span class="title-jpn">自己紹介</span></h2>
      <div class="profile-wrapper">
        <div class="profile-img">
          <img src="../assets/me.jpeg" alt="" class="my-img" />
        </div>
        <div class="profile-text">
          <p>名 前：Shuki Otowa</p>
          <p>出 身：宮城県</p>
          <p>趣 味：サーフィン,スニーカー,古着,海外旅行(コロナ前)</p>
          <p>興 味：</p>
          <div class="summary">
            <p>
              大学卒業後から現在まで営業職(SIer/某水族館)として７年間勤務しています。
              <br />プログラミング学習は、最初は何も分からない状況でした。
              しかし、繰り返し学習することで知識が蓄積して、さらに新しい事に挑戦できるのがとても楽しく、気が付いたらもっと学習したいと思うようになっていました。
              <br />フロントエンドエンジニアへの転職を目指し、独学でプログラミングとWebデザインの勉強を始める。
              <br />保守性に優れたコーディングを行い、モダンなフロントエンド開発ができるエンジニアを目指し日々勉強中です。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-section {
  background-color: #90c1cc;
  padding-bottom: 0;
}

.profile-wrapper {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}

.profile-text {
  width: 60%;
  margin: 0 auto;
  padding: 20px 0;
}
.summary {
  margin-top: 24px;
}
.my-img {
  max-width: 500px;
  width: 80%;
  margin-top: 40px;
  border-radius: 56% 44% 61% 39% / 37% 67% 33% 63%;
}

@media screen and (max-width: 1100px) {
  .profile-section {
    padding-bottom: 150px;
  }
  .profile-wrapper {
    flex-direction: column;
    width: 100%;
  }

  .profile-text {
    width: 95%;
  }
  .profile-img {
    width: 100%;
    text-align: center;
  }

  .my-img {
  }
}
</style>