import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';


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

// Metodos do NProgress
// Iniciar a barra de progresso antes da navegação
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  } 
  next();
});

// Finalizar a barra de progresso após a navegação
router.afterEach(() => {
  NProgress.done()
});

export default router
