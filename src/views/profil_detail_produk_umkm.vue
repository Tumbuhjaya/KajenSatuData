<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/profil')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">DETAIL PRODUK</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div  style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>
      <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 30px 15px !important;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col size="12">
            <div style="width: 100%;padding: 15px;">
              <ion-img v-if="produk.foto" :src="produk.foto" style="width:100%;height:300px;object-fit: cover;"></ion-img>
              <ion-img v-else src="https://placehold.co/300" style="width:100%;height:300px;object-fit: cover;"></ion-img>
              <h6 style="font-size: 18px;margin-top: 15px !important;"><strong>Nama produk</strong></h6>
              <h6 style="font-size: 18px;font-weight: bold;margin-top: 10px !important;margin-bottom: 10px !important;">Rp {{ produk.harga }},-</h6>
              <h6 style="font-size: 14px; font-weight: normal;">{{ produk.ktg }}</h6>

              <h6 style="margin-top: 30px !important;font-size: 18px"><strong>Rincian Produk</strong></h6>
              <h6 style="margin-top: 10px !important;font-size: 14px;font-weight: normal;">{{ produk.deskripsi }}</h6>

              <h6 style="margin-top: 30px !important;font-size: 18px"><strong>Penjual</strong></h6>

              <div style="width: 100%;display: flex;margin-top: 15px;">
                <div style="width: 30%;position: relative;background-color: ;display: flex;justify-content: flex-start;">
                  <div style="width: 80px;height: 80px;border-radius: 100%;overflow: hidden;">
                    <ion-img src="/assets/user-ksd-2.png" style="width:100%;height:80px;object-fit: cover;"></ion-img>
                  </div>
                </div>

                <div style="width:60%;height: 80px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                  <h6 style="font-size: 16px;"><strong>{{ user.nama }}</strong></h6>
                  <h6 style="font-size: 14px;margin-top: 5px !important;font-weight: normal;">Kelurahan : {{ user.desa }} , Kecamatan : {{ user.kecamatan }}</h6>
                </div>
              </div>
              <div style="width: 100%;height: 2px;background-color: #D3D3D3;margin-top: 15px;"></div>
              <ion-button style="margin-top: 15px;" expand="block" @click="wa">Hubungi Penjual via Whatsapp</ion-button>
              <ion-button style="margin-top: 15px;" expand="block" color="danger" @click="hapus">Hapus Produk</ion-button>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {  IonInput,IonSelect,IonSelectOption,loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import axios  from "axios";
import moment from "moment";
moment.locale("id");
import { Preferences } from "@capacitor/preferences";

export default defineComponent({
  components: {
    IonInput,IonSelect,IonSelectOption,
    loadingController,
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
      id: this.$route.params.id,
      produk:{},
      user:{},
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
    async get_detail(){
        let res = await axios({
        method: "get",
          url:`https://ksd.pekalongankab.go.id/api/produk-id.php?id=`+this.id,
        })
        console.log(res.data, "resss");
        this.produk = res.data
      },
    async get_user(){
      const { value } = await Preferences.get({ key: 'login' });
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/user.php?id=`+value,
      })
      this.user = res.data
      console.log(res.data);
    },
    wa(){
      location.href = 'https://wa.me/'+this.user.wa
    },
    async hapus(){
      if (confirm('Apakah Anda Yakin Akan Menghapus Data Ini?')) {
        let res = await axios({
        method: "get",
          url:`https://ksd.pekalongankab.go.id/api/produk-hapus.php?id=`+this.id,
        })
        console.log(res, "resss");
        this.$router.push('/profil/produk_umkm')
      }
    }

  },
  async ionViewDidEnter() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_detail()
    await this.get_user()
    await loading.dismiss();

  }
  });
</script>

<style scoped>
.box-header{
  width: 100%;
  height: ;
  background-color: #4c87f2;
  padding: 15px 35px;
}

.box-header .box-title{
  width: 100%;
  height: 70px;
  background-color: ;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
