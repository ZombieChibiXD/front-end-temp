import Vue from 'vue'
import Router from 'vue-router'

// -------------------------------

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Logout from '@/views/Logout.vue'
import Register from '@/views/Register.vue'
import Tag from '@/components/Tag.vue'

Vue.use(Router)

export const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/Admin.vue')
    },
    {
      path: '/tag/:tagname',
      name: 'Tag',
      component: Tag,
      props: true ,
    },
    {
      path: '/article/create',
      name: 'CreateArtikel',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Insert.vue'),
    },
    {
      path: '/article/:article_id',
      name: 'Content',
      props: true ,
      component: () => import(/* webpackChunkName: "about" */ '@/components/Content.vue'),
    },
    { path: '*', redirect: '/' },
    
  ],
  linkActiveClass: "active"
})


//Handle "restricted" pages
// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/register', '/','/about'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// })
