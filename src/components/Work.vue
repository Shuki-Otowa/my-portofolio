<template>
  <div class="work-section section">
    <div class="wrapper">
      <h2 class="section-title">Work<span class="title-jpn">製作物</span></h2>
      <p class="lead-text">
        各種スキルの習得のためのアウトプットとして制作したアプリです。
      </p>
      <div class="work-items">
        <div v-for="item in items" :key="item.title">
          <img :src="item.img_src" class="work-img" alt="work image" />
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
          id: 1,
          title: "TODOリスト",
          summary: "実案件で作成したコーポレートサイトです。",
          skill: "HTML,CSS(Sass)",
          github: " ",
          website: "#",
          img_src: require("../assets/Profile.jpg"),
        },
        {
          title: "タイピングゲーム",
          id: 2,
          summary: "コーディングや、各種コマンドを覚えることもかねてこのタイピングゲームを構築しました。",
          skill: "HTML,CSS(Sass),Vue.js",
          website: "",
          img_src: require("../assets/Home.jpg"),
        },
        {
          title: "ポートフォリオサイト",
          summary:
            "Vue.jsを学んだアウトプットとしてSPAで自身のポートフォリオサイトを構築しました。見た目はVuetify,HTML,CSSを使用して整えています。お問い合せいただいた内容はFirebaseを使用してデータを収集しています。",
          id: 3,
          skill:
            "HTML, CSS(Sass), Vue.js, Vuetify, Netlify, Firebase, npm, git",
          github:
            "https://github.com/Shuki-Otowa/my-portofolio/blob/feature/src/components/Work.vue",
          website:
            "https://github.com/Shuki-Otowa/my-portofolio/blob/feature/src/components/Work.vue",
          img_src: require("../assets/Work.jpg"),
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
.work-section {
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

@media screen and (max-width: 800px) {
  .work-items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>