<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/marketplace')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">Detail UMKM</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;z-index: 1;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 15px !important;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;background-color: #fff;display: flex;">
              <div style="width: 40%;position: relative;background-color: ;display: flex;justify-content: center;">
                <div style="width: 140px;height: 140px;border-radius: 100%;overflow: hidden;">
                  <ion-img v-if="user.foto" :src="user.foto" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                  <ion-img v-else src="/assets/store.png" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                </div>
                
              </div>

              <div style="width:60%;margin-left: 15px;height: 140px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 20px;color: #1c47bc;"><strong>{{ user.nama }}</strong></h6>
                <h6 style="font-size: 14px;margin-top: 10px !important;font-weight: normal;" class="custom-dark-mode">Kel. {{ user.desa }} <br> Kec. {{ user.kecamatan }}</h6>
                <ion-button size="success" style="margin-top: 10px;" @click="go">Hubungi penjual</ion-button>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
          <ion-col v-for="(item, id) in data_produk" size="6" @click="$router.push('/marketplace/detail_produk/'+ item.id_produk)" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #eefafd;overflow: hidden;">
              <ion-img v-if="item.foto" :src="item.foto" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <ion-img v-else src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 100px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 14px;text-align: center;color:#1c47bc"><strong>{{item.nama}}</strong></h6>
                <h6 style="font-size: 12px;text-align: center;font-weight: normal;margin-top: 5px !important;" class="custom-dark-mode">{{item.harga}}</h6>
              </div>
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
      id: this.$route.params.id,
      user:{}
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
        url:`https://ksd.pekalongankab.go.id/api/produk-user.php?user=`+ this.$route.params.id,
      })
      console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        this.data_produk.push(res.data[i])
      }
    },
    async get_user(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/user.php?id=`+this.id,
      })
      this.user = res.data
      console.log(res.data);
    },
    go(){
      location.href = 'https://wa.me/'+this.user.wa
    }
  },
  async ionViewDidEnter() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_produk()
    await this.get_user()
    await loading.dismiss();

  }
});
</script>

<style scopde>
@media (prefers-color-scheme: dark) {
  .custom-dark-mode{
    color: #222428;
  }
}
</style>
