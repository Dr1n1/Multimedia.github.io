
import Home from './views/Home.vue'
import About from './views/About.vue'
import Animal from './views/Animal.vue'


export const routes = [

    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
  {
    path: '/animal',
    component: Animal
  }
  ]

