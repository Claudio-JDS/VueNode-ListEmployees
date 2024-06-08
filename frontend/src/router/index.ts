import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Create new Employee',
      component: () => import('@/components/create-employee/CreateEmployeeComponente.vue')
    },
    {
      path: '/list-employess',
      name: 'List All Employees',
      component: () => import('@/components/list-employee/ListEmployeeComponent.vue')
    },
    {
      path: '/edite-employee/:id',
      name: 'Update Employee',
      component: () => import('@/components/adit-employee/EditEmployeeComponent.vue')
    },
  ]
})

export default router
