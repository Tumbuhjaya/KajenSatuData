import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/landing.vue')
  },

  {
    path: '/login',
    component: () => import('@/views/login.vue')
  },

  {
    path: '/info_lokasi',
    component: () => import('@/views/info_lokasi.vue')
  },

  {
    path: '/info_grafis',
    component: () => import('@/views/info_grafis.vue')
  },

  {
    path: '/media_sosial',
    component: () => import('@/views/media_sosial.vue')
  },

  {
    path: '/berita',
    component: () => import('@/views/berita.vue')
  },

  {
    path: '/nomor_penting',
    component: () => import('@/views/nomor_penting.vue')
  },

  {
    path: '/web_app',
    component: () => import('@/views/web_app.vue')
  },

  {
    path: '/website',
    component: () => import('@/views/website.vue')
  },

  {
    path: '/aplikasi',
    component: () => import('@/views/aplikasi.vue')
  },

  {
    path: '/kantor_pemerintahan',
    component: () => import('@/views/kantor_pemerintahan.vue')
  },


  {
    path: '/tabs-dashboard/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs-dashboard/dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
