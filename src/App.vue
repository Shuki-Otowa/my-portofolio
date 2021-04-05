<template>
  <div>
    <!-- <Home></Home> -->
    <!-- <Profile></Profile>
    <Skill></Skill>
    <Work></Work>
    <Contact></Contact> -->
      <router-view></router-view>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import "devicon";
import BottomNav from "./components/BottomNav";
// import Home from "./components/Home";
// import Profile from "./components/Profile";
// import Skill from "./components/Skill";
// import Work from "./components/Work";
// import Contact from "./components/Contact";

export default {
  name: "App",

  components: {
    BottomNav,
    // Home,
    // Profile,
    // Skill,
    // Work,
    // Contact
  },

  data: () => ({
    //
  }),
};
</script>
