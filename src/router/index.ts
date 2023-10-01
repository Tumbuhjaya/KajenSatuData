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
    path: '/sid/layanan_surat/1/:id',
    component: () => import('@/views/surat_1.vue')
  },

  {
    path: '/sid/layanan_surat/2/:id',
    component: () => import('@/views/surat_2.vue')
  },

  {
    path: '/sid/layanan_surat/3/:id',
    component: () => import('@/views/surat_3.vue')
  },

  {
    path: '/sid/layanan_surat/4/:id',
    component: () => import('@/views/surat_4.vue')
  },

  {
    path: '/sid/layanan_surat/5/:id',
    component: () => import('@/views/surat_5.vue')
  },

  {
    path: '/sid/layanan_surat/6/:id',
    component: () => import('@/views/surat_6.vue')
  },

  {
    path: '/sid/layanan_surat/7/:id',
    component: () => import('@/views/surat_7.vue')
  },

  {
    path: '/sid/layanan_surat/8/:id',
    component: () => import('@/views/surat_8.vue')
  },

  {
    path: '/sid/layanan_surat/9/:id',
    component: () => import('@/views/surat_9.vue')
  },

  {
    path: '/sid/layanan_surat/10/:id',
    component: () => import('@/views/surat_10.vue')
  },

  {
    path: '/sid/layanan_surat/11/:id',
    component: () => import('@/views/surat_11.vue')
  },

  {
    path: '/sid/layanan_surat/12/:id',
    component: () => import('@/views/surat_12.vue')
  },

  {
    path: '/sid/layanan_surat/13/:id',
    component: () => import('@/views/surat_13.vue')
  },

  {
    path: '/sid/layanan_surat/14/:id',
    component: () => import('@/views/surat_14.vue')
  },

  {
    path: '/sid/layanan_surat/15/:id',
    component: () => import('@/views/surat_15.vue')
  },

  {
    path: '/sid/layanan_surat/16/:id',
    component: () => import('@/views/surat_16.vue')
  },

  {
    path: '/sid/layanan_surat/17/:id',
    component: () => import('@/views/surat_17.vue')
  },

  {
    path: '/sid/layanan_surat/18/:id',
    component: () => import('@/views/surat_18.vue')
  },

  {
    path: '/sid/layanan_surat/19/:id',
    component: () => import('@/views/surat_19.vue')
  },

  {
    path: '/sid/layanan_surat/20/:id',
    component: () => import('@/views/surat_20.vue')
  },
  
  {
    path: '/sid/layanan_surat/21/:id',
    component: () => import('@/views/surat_21.vue')
  },

  {
    path: '/sid/layanan_surat/23/:id',
    component: () => import('@/views/surat_23.vue')
  },

  {
    path: '/sid/layanan_surat/24/:id',
    component: () => import('@/views/surat_24.vue')
  },

  {
    path: '/sid/layanan_surat/25/:id',
    component: () => import('@/views/surat_25.vue')
  },

  {
    path: '/sid/layanan_surat/26/:id',
    component: () => import('@/views/surat_26.vue')
  },

  {
    path: '/sid/layanan_surat/27/:id',
    component: () => import('@/views/surat_27.vue')
  },

  {
    path: '/sid/layanan_surat/28/:id',
    component: () => import('@/views/surat_28.vue')
  },

  {
    path: '/sid/layanan_surat/29/:id',
    component: () => import('@/views/surat_29.vue')
  },

  {
    path: '/sid/layanan_surat/30/:id',
    component: () => import('@/views/surat_30.vue')
  },

  {
    path: '/sid/layanan_surat/31/:id',
    component: () => import('@/views/surat_31.vue')
  },

  {
    path: '/sid/layanan_surat/32/:id',
    component: () => import('@/views/surat_32.vue')
  },

  {
    path: '/sid/layanan_surat/33/:id',
    component: () => import('@/views/surat_33.vue')
  },

  {
    path: '/sid/layanan_surat/34/:id',
    component: () => import('@/views/surat_34.vue')
  },

  {
    path: '/sid/layanan_surat/35/:id',
    component: () => import('@/views/surat_35.vue')
  },

  {
    path: '/sid/layanan_surat/36/:id',
    component: () => import('@/views/surat_36.vue')
  },

  {
    path: '/sid/layanan_surat/37/:id',
    component: () => import('@/views/surat_37.vue')
  },

  {
    path: '/sid/layanan_surat/38/:id',
    component: () => import('@/views/surat_38.vue')
  },

  {
    path: '/sid/layanan_surat/39/:id',
    component: () => import('@/views/surat_39.vue')
  },

  {
    path: '/sid/layanan_surat/40/:id',
    component: () => import('@/views/surat_40.vue')
  },

  {
    path: '/sid/layanan_surat/41/:id',
    component: () => import('@/views/surat_41.vue')
  },

  {
    path: '/sid/layanan_surat/42/:id',
    component: () => import('@/views/surat_42.vue')
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
    path: '/marketplace/detail_umkm/:id',
    component: () => import('@/views/detail_umkm.vue')
  },

  {
    path: '/marketplace/detail_produk/:id',
    component: () => import('@/views/detail_produk.vue')
  },

  {
    path: '/profil',
    component: () => import('@/views/profil.vue')
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
