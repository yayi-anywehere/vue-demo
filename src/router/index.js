import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Major from '@/components/home/major'
import Work from '@/components/home/work'
import Project from '@/components/home/project'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/home/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/home/major',
      name: 'Major',
      component: Major
    }
  ]
})
