<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/tabs-dashboard/dashboard')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">Marketplace</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 0 20px !important;">
        <ion-row style="margin-top: 5px;">
          <ion-col style="padding-top: 0;">
            <div style="width: 100%;display: flex;">
              <div style="width:77%;">
                <ion-input class="custom" v-model="kata_cari" :value="kata_cari" placeholder="Cari Produk ...." style="margin:0;box-shadow:0px 4px 4px 0px #00000040;border-radius: 10px;"></ion-input>
                
              </div>
              <div style="width:18%;margin-left: 5%;">
                <ion-button class="cari" color="warning" style="margin: 0 !important;--padding-top: 20px;--padding-bottom: 20px;" @click="cari">Cari</ion-button>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row style="margin-top: 30px;">
          <ion-col>
            <div style="width: 100%;display: flex;">
              <div style="width: 50%;display: flex;justify-content: flex-start;height: 36px;align-items: center;">
                <h6 class="font-title" style="color: #1c47bc;">UMKM</h6>
              </div>
              <div style="width: 50%;display: flex;justify-content: flex-end;background-color: ;height: 36px;align-items: center;">
                <ion-button fill="outline" size="small" style="text-transform: capitalize;" @click="$router.push('/marketplace/umkm')">Lihat Semua</ion-button>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row style="margin-top: 15px;">
          <ion-col v-for="(item, id) in data_umkm" size="3">
            <div class="box-menu" @click="$router.push('/marketplace/detail_umkm/'+ item.id_user_android)">
              <div class="box-menu-circle">
                <ion-img v-if="item.foto" :src="item.foto" src="/assets/store.png"></ion-img>
                <ion-img v-else src="/assets/store.png"></ion-img>
              </div>
              <h6 style="margin-top: 10px !important;text-align: center;font-size: 14px;color: #1c47bc;">{{ item.nama }}</h6>
            </div>
          </ion-col>

          <!-- <ion-col size="3">
            <div class="box-menu" @click="$router.push('/marketplace/detail_umkm')">
              <div class="box-menu-circle">
                <ion-img src="/assets/info-lokasi.png"></ion-img>
              </div>
              <h6 style="margin-top: 10px !important;text-align: center;font-size: 14px;">Toko B</h6>
            </div>
          </ion-col> -->

          <!-- <ion-col size="3">
            <div class="box-menu" @click="$router.push('/marketplace/detail_umkm')">
              <div class="box-menu-circle">
                <ion-img src="/assets/info-lokasi.png"></ion-img>
              </div>
              <h6 style="margin-top: 10px !important;text-align: center;font-size: 14px;">Toko C</h6>
            </div>
          </ion-col> -->

          <!-- <ion-col size="3">
            <div class="box-menu" @click="$router.push('/marketplace/detail_umkm')">
              <div class="box-menu-circle">
                <ion-img src="/assets/info-lokasi.png"></ion-img>
              </div>
              <h6 style="margin-top: 10px !important;text-align: center;font-size: 14px;">Toko D</h6>
            </div>
          </ion-col> -->
        </ion-row> 
        <ion-row style="margin-top: 15px;">
          <ion-col size="12">
            <h6 class="font-title" style="color: #1c47bc;">Rekomendasi</h6>
          </ion-col>

          <ion-col size="12">
            <ion-select label="Filter Berdasarkan Kategori" v-model="kategori" placeholder="-- Pilih --">
            <ion-select-option v-for="(item, id) in data_kategori" :value="item.nama">{{ item.nama }}</ion-select-option>
            <!-- <ion-select-option value="banana">Banana</ion-select-option>
            <ion-select-option value="orange">Orange</ion-select-option> -->
          </ion-select>
          </ion-col>
        </ion-row>

        <ion-row  style="margin-top: 15px;">
          <ion-col v-for="(item, id) in data_produk" size="6" @click="$router.push('/marketplace/detail_produk/'+ item.id_produk)" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #eefafd;overflow: hidden;">
              <ion-img v-if="item.foto" :src="item.foto" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <ion-img v-else src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 100px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 14px;text-align: center;color:#1c47bc"><strong>{{item.nama}}</strong></h6>
                <h6 style="font-size: 12px;text-align: center;font-weight: normal;margin-top: 5px !important;">{{item.harga}}</h6>
              </div>
            </div>
          </ion-col>
          <!-- <ion-col size="6" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>Produk A</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>Rp 17.000,-</strong></h6>
              </div>
            </div>
          </ion-col> -->
          <!-- <ion-col size="6" @click="$router.push('/seni_budaya/detail')" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>Produk A</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>Rp 17.000,-</strong></h6>
              </div>
            </div>
          </ion-col> -->
          <!-- <ion-col size="6" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>Produk A</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>Rp 17.000,-</strong></h6>
              </div>
            </div>
          </ion-col> -->
        </ion-row>
      </ion-grid>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button v-if="isLogin" @click="$router.push('/profil/produk_umkm')">
          <ion-icon :icon="arrowBackCircleOutline"></ion-icon>
        </ion-fab-button>
        <ion-fab-button v-else @click="$router.push('/login')">
          <ion-icon :icon="arrowBackCircleOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonFab,IonFabButton,loadingController, IonSelect,IonSelectOption, IonInput, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import axios  from "axios";
import moment from "moment";
import { Preferences } from "@capacitor/preferences";

moment.locale("id");
export default defineComponent({
  components: {
    IonSelect,IonSelectOption,IonFab,IonFabButton,loadingController,
    IonInput,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow, 
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonImg,
    IonButton,
    IonButtons,
    IonIcon
    
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      foto: "",
      katacari:'',
      id_seni_budaya: "",
      isi: "",
      jenis: "",
      nama: "",
      segment: "data1",
      data_umkm: [],
      data_produk: [],
      data_kategori: [],
      kata_cari:'',
      kategori:'',
      isLogin:0
    };
  },
  methods: {

    toLogin() {
      this.$router.push("/login");
    },
    segmentChanged(e) {
      this.segment = e.detail.value;
      this.class();
    },
    class() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    async get_umkm(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/user-umkm.php?limit=4`})
      // console.log(res.data);
      this.data_umkm = []
      for (let i = 0; i < res.data.length; i++) {
        this.data_umkm.push(res.data[i])
      }
    },
    async get_produk(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/produk.php?ktg=`,
      })
      console.log(res.data);
      this.data_produk = []
      for (let i = 0; i < res.data.length; i++) {
        this.data_produk.push(res.data[i])
      }
    },
    async get_ganti_kategori(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/produk-cari.php?kunci=`+this.kategori,
      })
      console.log(res.data);
      this.data_produk =[]
      for (let i = 0; i < res.data.length; i++) {
        this.data_produk.push(res.data[i])
      }
    },
    async get_kategori(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/produk-ktg.php`,
      })
      // console.log(res.data);
      this.data_kategori = []
      for (let i = 0; i < res.data.length; i++) {
        this.data_kategori.push(res.data[i])
      }
    },
    async get_seni(){
      let hsl = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/seni-id.php?id=`+this.$route.params.id,
      })
      // console.log(hsl);
      this.foto=hsl.data.foto;
      this.id_seni_budaya=hsl.data.id_seni_budaya;
      this.isi=hsl.data.isi;
      this.jenis=hsl.data.jenis;
      this.nama=hsl.data.nama;
    },
    async cari(){
      let vm = this
      console.log(vm.kata_cari);
      if(vm.kata_cari!=''){
        const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
        let hsl = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/produk-cari.php?kunci=`+this.kata_cari,
      })
      await loading.dismiss();

      this.data_produk = []
      for (let i = 0; i < hsl.data.length; i++) {
        this.data_produk.push(hsl.data[i])
      }
      }else{
        await this.get_produk()
      }

    }
  },
  watch: {
   kategori:async function (newVal , old) {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_ganti_kategori()
      await loading.dismiss();

   },
  },
  async ionViewDidEnter() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    const { value } = await Preferences.get({ key: 'login' });
    if (value) {
      this.isLogin = value
    }

    await loading.present();
    await this.get_umkm()
    await this.get_produk()
    await this.get_kategori()
    await this.get_seni()
    await loading.dismiss();

  }});
</script>

<style scoped>

ion-input.custom {
  --background: #fff;
  --color: #000;
  --placeholder-color: #4F4F4F;
  --placeholder-opacity: 0.8;
  --padding-bottom: 15px;
  --padding-end: 15px;
  --padding-start: 15px;
  --padding-top: 15px;
  --border-radius:10px;
}

.sc-ion-input-md-h{
  --highlight-color-focused:transparent
}

.box-menu{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ;
  flex-direction: column;
}

.box-menu-circle{
  width:68px;
  height: 68px;
  background-color: #FFECB2;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.font-title{
  font-size: 18px;
  font-weight: bolder;
}


</style>
