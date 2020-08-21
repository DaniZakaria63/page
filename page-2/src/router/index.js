import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Auth/Login.vue";
import Users from '../views/Master/Users.vue';
import Logout from '../views/Auth/Logout.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  },
  {
    path: "/login",
    name: "Login Page",
    component: Login
  },
  {
    path:'/',
    name: "Master Users",
    component: Users
  }
];

const router = new VueRouter({
  routes
});

export default router;
