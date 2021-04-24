<template>
  <div id="app">
    <v-app>
      <!-- v-show="loading" -->
      <div v-show="loading" class="loader" key="loader">
        <p class="loader-text">a few moments later</p>
        <semipolar-spinner
          :animation-duration="1800"
          :size="100"
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
  name: "app",
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  components: {
    BottomNav,
    SemipolarSpinner,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  line-height: 2em;
  letter-spacing: 1.5px;
  font-family: "TsukuARdGothic-Regular", "ヒラギノ丸ゴ ProN",
    "ヒラギノ角ゴシック", "Hiragino Sans", "Hiragino Maru Gothic ProN", "Osaka",
    YuGothic, "Yu Gothic", "Yu Gothic UI", "メイリオ", Meiryo, sans-serif;
}

h2 {
  font-family: "Skia-Regular_Black", "Impact", "Marker Felt";
  color: #fff;
  font-size: 96px;
  margin-top: -20px;
  margin-left: 20px;
  margin-bottom: 30px;
}
.title-jpn {
  margin-left: 10px;
  font-size: 24px;
}

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
  font-size: 90px;
  font-family: "Skia-Regular_Black";
  letter-spacing: 8px;
}

@media screen and (max-width: 600px) {
  h2 {
    text-align: center;
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 10px;
    margin-left: 0;
  }
  .title-jpn {
    margin-left: 10px;
    font-size: 16px;
  }
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .loader-text {
    padding-bottom: 30px;
    font-size: 24px;
    letter-spacing: 2px;
  }
}
</style>
