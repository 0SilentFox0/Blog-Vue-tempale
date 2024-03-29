import Vue from "vue";
import Router from "vue-router";
import home from "@/components/Home";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signUp",
      name: "SignUp",
      component: SignUp
    }
  ]
});
