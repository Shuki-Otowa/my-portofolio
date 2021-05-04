<template>
  <div id="app">
    <v-app>
      <!-- v-show="loading" -->
      <div v-show="loading" class="loader" key="loader">
        <!-- loadingページをコンポーネント化する -->
        <p class="loader-text">a few moments later</p>
        <semipolar-spinner
          :animation-duration="1000"
          :size="80"
          color="#f5f5f5"
        />
      </div>
      <div v-show="!loading">
        <transition>
          <router-view></router-view>
        </transition>
      </div>
      <BottomNav v-show="!loading"></BottomNav>
    </v-app>
  </div>
</template>

<script>
import BottomNav from "./components/BottomNav";
import { SemipolarSpinner } from "epic-spinners";

export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  components: {
    BottomNav,
    SemipolarSpinner,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Caveat&family=Kaushan+Script&family=Kiwi+Maru:wght@300&family=Luckiest+Guy&family=M+PLUS+Rounded+1c:wght@300&display=swap");
* {
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 2em;
  letter-spacing: 1.5px;
  box-sizing: border-box;
  font-family: "TsukuARdGothic-Regular", "M PLUS Rounded 1c", "Kiwi Maru",
    "ヒラギノ丸ゴ ProN", "ヒラギノ角ゴシック", "Hiragino Sans",
    "Hiragino Maru Gothic ProN", "Osaka", YuGothic, "Yu Gothic", "Yu Gothic UI",
    "メイリオ", Meiryo, sans-serif;
}

body {
  font-size: 16px;
}

a {
  text-decoration: none;
}

.v-application p {
  margin: 0;
}

.section {
  padding-bottom: 150px;
  min-height: 100vh;
}

.wrapper {
  max-width: 1280px;
  width: 95%;
  margin: 0 auto;
}
.section-title {
  text-align: center;
  font-family: "Alfa Slab One", "Skia-Regular_Black";
  color: #fff;
  font-size: 6rem;
  margin-bottom: 30px;
}

.title-jpn {
  margin-left: 10px;
  font-size: 1.5rem;
  color: #fff;
}

/* ページ遷移アニメーション */
.v-enter {
  transform: translate(100vw, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 0.5s 0.5s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(-100vw, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all 0.5s 0s ease;
}

/* ローディングアニメーション */
.loader {
  background-color: #9b8a82;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.loader-text {
  color: #f5f5f5;
  font-size: 3rem;
  font-family: "Caveat", "Kaushan Script", "Skia-Regular_Black";
  letter-spacing: 8px;
}

@media screen and (max-width: 800px) {
  .wrapper {
    width: 90%;
  }

  .section-title {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  .title-jpn {
    font-size: 1rem;
  }
  .loader {
    padding-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .loader-text {
    font-size: 38px;
    letter-spacing: 2px;
  }
}
</style>
