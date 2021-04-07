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
h2 {
  color: aliceblue;
  font-size: 6rem;
  margin-left: 20px;
}
.container {
  width: 100vw;
  height: 100vh;
}
.v-enter {
  transform: translate(-100vw, 0);
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
</style>
