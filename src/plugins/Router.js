import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Profile from "@/components/Profile";
import Skill from "@/components/Skill";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/work",
      name: "work",
      component: Work,
    },
    {
      path: "/skill",
      name: "skill",
      component: Skill,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});
