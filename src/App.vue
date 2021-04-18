<template>
  <div id="app">
    <v-app>
      <div class="app-content">
        <transition>
          <router-view></router-view>
        </transition>
        <BottomNav></BottomNav>
      </div>
    </v-app>
  </div>
</template>

<script>
import "devicon";
import BottomNav from "./components/BottomNav";

export default {
  name: "app",
  components: {
    BottomNav,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Skia-Regular_Black", "TsukuARdGothic-Regular",
    "ヒラギノ角ゴシック", "Hiragino Sans", "ヒラギノ丸ゴ ProN",
    "Hiragino Maru Gothic ProN", "Osaka", YuGothic, "Yu Gothic", "Yu Gothic UI",
    "メイリオ", Meiryo, sans-serif;
}

h2 {
  color: aliceblue;
  font-size: 6rem;
  margin-left: 20px;
  margin-bottom: 30px;
}
.container {
  width: 100vw;
  height: 100vh;
}
.v-enter {
  transform: translate(100vw, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 0.6s 0.6s ease;
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
  transition: all 0.6s 0s ease;
}

@media screen and (max-width: 600px) {
  h2 {
    text-align: center;
    font-size: 5rem;
    margin-left: 0;
  }
}
</style>
