import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Chatroom from '@/components/Chatroom';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome,
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: Chatroom,
    },
  ],
});
