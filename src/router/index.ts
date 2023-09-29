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
    path: '/info_lokasi/fasum',
    component: () => import('@/views/detail_info_lokasi_fasum.vue')
  },
  
  {
    path: '/info_lokasi_faskes/:tipe',
    component: () => import('@/views/detail_info_lokasi_faskes.vue')
  },

  {
    path: '/info_lokasi_fasum/:tipe',
    component: () => import('@/views/detail_info_lokasi_fasum.vue')
  },

  {
    path: '/info_lokasi_wisata/:tipe',
    component: () => import('@/views/detail_info_lokasi_wisata.vue')
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
    path: '/seni_budaya',
    component: () => import('@/views/seni_budaya.vue')
  },

  {
    path: '/seni_budaya/detail/:id',
    component: () => import('@/views/detail_seni_budaya.vue')
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
    path: '/website/:tipe',
    component: () => import('@/views/website.vue')
  },

  {
    path: '/aplikasi/:tipe',
    component: () => import('@/views/aplikasi.vue')
  },

  {
    path: '/kantor_pemerintahan',
    component: () => import('@/views/kantor_pemerintahan.vue')
  },

  {
    path: '/sid',
    component: () => import('@/views/sid.vue')
  },

  {
    path: '/sid/detail_by_kec/:id',
    component: () => import('@/views/detail_sid.vue')
  },

  {
    path: '/marketplace',
    component: () => import('@/views/marketplace.vue')
  },

  {
    path: '/marketplace/umkm',
    component: () => import('@/views/umkm.vue')
  },

  {
    path: '/marketplace/detail_umkm',
    component: () => import('@/views/detail_umkm.vue')
  },

  {
    path: '/marketplace/detail_produk',
    component: () => import('@/views/detail_produk.vue')
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
