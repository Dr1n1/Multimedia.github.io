
import Home from './components/Home.vue'
import About from './components/About.vue'
import Animal from './components/Animal.vue'


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

