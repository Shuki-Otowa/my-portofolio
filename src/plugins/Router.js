import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Profile from "@/components/Profile";
import Skill from "@/components/Skill";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        index: 0,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        index: 1,
      },
    },
    {
      path: "/work",
      name: "work",
      component: Work,
      meta: {
        index: 2,
      },
    },
    {
      path: "/skill",
      name: "skill",
      component: Skill,
      meta: {
        index: 3,
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        index: 4,
      },
    },
  ],
});
