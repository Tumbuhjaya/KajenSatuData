<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/web_app')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">Aplikasi</h6>
        </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 20px !important;">
        <ion-row  v-for="(item,id) in aplikasi" :key="id"  style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #eefafd">
              <div style="width: 100%;">
                <h6 style="font-size: 20px;font-weight: 600;" class="custom-dark-mode">{{ item.nama }}</h6>
                <h6 style="font-size: 12px;margin-top: 5px !important;" class="custom-dark-mode">{{ item.ket }}</h6>
              </div>
              <div style="width: 100%;margin-top: 5px;">
                <div style="width: 100%;min-height: 25px;display: flex;justify-content: flex-start;align-items: center;">
                  <ion-icon :icon="linkOutline" style="margin-right: 10px;" class="custom-dark-mode"></ion-icon> <p @click="pindah(item.web)" class="custom-dark-mode"
                  >{{ item.web }}
                </p>
                </div>
              </div>
            </div>
          </ion-col>
        </ion-row>

        
      </ion-grid>
      
    </ion-content>
  </ion-page>
</template>

<script>
import {  IonInput,IonSelect,IonSelectOption,loadingController,IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline, linkOutline } from 'ionicons/icons';
import axios  from "axios";
import moment from "moment";
moment.locale("id");
import { ip_server } from "@/ip-config";

export default defineComponent({
  components: {
    IonInput,IonSelect,IonSelectOption,
    loadingController,
    IonPage,
    IonHeader,
    IonContent,
    IonGrid,
    IonRow, 
    IonCol,
    IonImg,
    IonIcon 
  },
  setup() {
      return { arrowBackCircleOutline, linkOutline };
    },
  data() {
    return {
      aplikasi:[],
      tipe: this.$route.params.tipe,
      segment: "data1",
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
    async get_aplikasi(){
      this.aplikasi = []
      let hsl = await axios({
      method: "get",
        url:ip_server+`${this.tipe}.php`,
      })
      for (let i = 0; i < hsl.data.length; i++) {
        this.aplikasi.push(hsl.data[i])
      }
    },
    pindah(page){
      location.href='https://'+page
    },
  },
  async ionViewDidEnter() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
        await loading.present();
        await this.get_aplikasi()
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
