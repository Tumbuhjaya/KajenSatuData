<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/profil')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">Produk UMKM</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 20px !important;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <ion-button size="success" style="margin-top: 10px;" @click="$router.push('/profil/tambah_produk')">Tambah Produk</ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
          <ion-col size="6" style="margin-bottom: 15px;"   v-for="(item,id) in data_produk" :key="id"  @click="$router.push('/profil/detail_produk_umkm/'+item.id_produk)">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img v-if="item.foto" :src="item.foto" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <ion-img v-else src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 100px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 14px;text-align: center;color:#1c47bc"><strong>{{ item.nama }}</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;margin-top: 5px !important;" class="custom-dark-mode">Rp {{ item.harga }},-</h6>
              </div>
            </div>
          </ion-col>

          <!-- <ion-col size="6" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 100px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 14px;text-align: center;"><strong>Nama Produk</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;margin-top: 5px !important;">Rp 0.000.000,-</h6>
              </div>
            </div>
          </ion-col>

          <ion-col size="6" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 100px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 14px;text-align: center;"><strong>Nama Produk</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;margin-top: 5px !important;">Rp 0.000.000,-</h6>
              </div>
            </div>
          </ion-col>

          <ion-col size="6" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 100px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 14px;text-align: center;"><strong>Nama Produk</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;margin-top: 5px !important;">Rp 0.000.000,-</h6>
              </div>
            </div>
          </ion-col> -->
          
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
    IonIcon,
    
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      segment: "data1",
      data_produk: [],
      id:0,
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
    async get_produk(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/produk-user.php?user=`+ this.id,
      })
      console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        this.data_produk.push(res.data[i])
      }
    }
  },
  async ionViewWillEnter() {
    const { value } = await Preferences.get({ key: 'login' });
    this.id = value 
    this.data_produk = []
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_produk()
    await loading.dismiss();

  }
});
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  .custom-dark-mode{
    color: #222428;
  }
}
</style>
