import Vue from "vue";
import VueRouter from "vue-router";

// 组件
/*----views----*/
const Login = () => import("@/views/account/Login");
const Logout = () => import("@/views/account/Logout");
const Register = () => import("@/views/account/Register");
const Home = () => import("@/views/home/Home");
const User = () => import("@/views/account/User");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },  
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/register",
    name:"Register",
    component: Register,
  },
  {
    path: "/user",
    name:"User",
    component: User,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
