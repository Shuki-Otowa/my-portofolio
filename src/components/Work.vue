<template>
  <div class="section-work section">
    <div class="wrapper">
      <h2 class="section-title">Work<span class="title-jpn">製作物</span></h2>
      <p class="lead-text">
        各種スキルの習得のためのアウトプットとして制作したアプリケーションの一部です。
      </p>
      <div class="work-items">
        <div v-for="item in items" :key="item.title">
          <img :src="item.img" class="work-img" alt="work image" />
          <modal :val="postItem" v-show="showContent" @close="closeModal" />
          <h3 class="work-title">{{ item.title }}</h3>
          <div class="button">
            <button class="more-button" @click="openModal(item)">
              詳しく見る
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      showContent: false,
      postItem: "",
      items: [
        {
          title: "タスク管理アプリ",
          summary:
            "Vue.jsやVuexを使ってタスク管理アプリを作成しました。リストや、タスクカードの作成・削除、ドラッグ&ドロップ機能(Draggable)を実装しました。レスポンシブデザイン対応も行っています。",
          difficulty:
            "Vuexについて理解するのに苦労しました。まだまだ理解できていない部分も多いですが、これからも学習を続けてより効率よく、大規模アプリケーション構築にも対応できるようになりたいと考えています。",
          skill:
            "HTML, CSS, Javascript, Vue.js, Vuex, Draggable, npm, Git, Github",
          github:
            "https://github.com/Shuki-Otowa/my-portofolio/blob/feature/src/components/Work.vue",
          website: "#",
          img: require("../assets/Profile.jpg"),
        },
        {
          title: "タイピングゲーム",
          summary:
            "タイピングの練習と共にコーディングや、各種コマンドを覚えることもかねて、このタイピングゲームを構築しました。現在は最低限の機能での実装になっているので、今後は問題の登録機能や、得点・ランキング機能などの改良を重ねていきたいです。",
          difficulty:
            "タイマーの実装自体や、ゲームの開始、終了のフラグ設定など、Qiitaなどで情報収集しながらなんとか実装できました。",
          skill: "HTML, CSS, Javascript, Vue.js, Vue-Router, npm, Git, Github",
          github:
            "https://github.com/Shuki-Otowa/my-portofolio/blob/feature/src/components/Work.vue",
          website: "",
          img: require("../assets/Home.jpg"),
        },
        {
          title: "ポートフォリオサイト",
          summary:
            "Vue.jsを学んだアウトプットとしてSPAで自身のポートフォリオサイトを構築しようと思い、作成しました。UIを考慮して各ページへのリンクはハンバーガーメニューではなく、ボトムナビゲーションで実装しました。お問い合せいただいた内容についてはaxiosを使用してFirebaseのCloud Firestoreでデータを収集・管理しています。レスポンシブデザイン対応も行っています。",
          difficulty:
            "Vue.jsの勉強もかねてSPAでサイトを構築しようと思い、UdemyやQiitaなどで学習しながら作成したので、完成までにとにかく時間がかかりました(２ヶ月程度)。もっと簡潔に、保守もやすいコーディングができるように今後も学習を続けて改良していきたいと思っています。",
          skill:
            "HTML, CSS, Javascript, Vue.js, Vue-Router, Vuetify, Netlify, Firebase, npm, Git, Github",
          github:
            "https://github.com/Shuki-Otowa/my-portofolio/blob/feature/src/components/Work.vue",
          website:
            "https://github.com/Shuki-Otowa/my-portofolio/blob/feature/src/components/Work.vue",
          img: require("../assets/Work.jpg"),
        },
      ],
    };
  },
  methods: {
    openModal(item) {
      this.showContent = true;
      this.postItem = item;
    },
    closeModal() {
      this.showContent = false;
    },
  },
};
</script>


<style scoped>
.section-work {
  background-color: #dcd1ae;
}
.lead-text {
  /* width: 80%; */
  margin: 0 auto;
  margin-bottom: 30px;
  font-size: 1.2rem;
}
.work-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
}
.work-title {
  text-align: center;
}

.work-img {
  width: 100%;
  /* height: auto;
  object-fit: cover; */
  border-radius: 10px;
}

.button {
  width: 100%;
  height: 60px;
  text-align: center;
  font-weight: 600;
  margin: 15px 0;
  border-radius: 8px;
  border: 2px solid #333;
  position: relative;
  transition: 0.4s;
}
.button::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #333;
  border-radius: 6px;
  transform-origin: 0%;
  transform: scaleX(0);
  transition: transform ease 0.4s;
}

.button:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}

.more-button {
  color: #333;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition-delay: 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.more-button::after {
  content: ">>";
  padding-left: 6px;
  padding-bottom: 2px;
}

.more-button:hover {
  color: #fff;
  transition-delay: 0.1s;
}

@media screen and (max-width: 1024px) {
  .wrapper {
    width: 80%;
  }
  .work-items {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
  }
}

@media screen and (max-width: 599px) {
  .wrapper {
    width: 95%;
  }
}
</style>