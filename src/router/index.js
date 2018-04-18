import Vue from 'vue';
import VueRouter from 'vue-router';

import QuestionMain from '../components/QuestionMain.vue';
import Question from '../components/Question.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/questions'
  },
  {
    path: '/questions',
    component: QuestionMain
  },
  {
    path: '/question/:numb',
    component: Question,
    props: true
  },
  // { path: '/products', name: 'Products', component: Products },
  // { path: '/orders', name: 'Orders', component: Orders }
];

export default new VueRouter({
  routes
});
