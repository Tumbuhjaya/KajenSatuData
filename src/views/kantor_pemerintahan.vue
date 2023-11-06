<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/tabs-dashboard/dashboard')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">Kantor Pemerintahan</h6>
        </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding:60px 20px !important;">
        <ion-row @click="go('http://'+item.web)" v-for="(item, id) in data" style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12"  style="padding: 0;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #fff;display: flex;">
              <div style="width: 35%;">
                <ion-img v-if="item.foto" :src="item.foto" style="width:100%;height: 120px;object-fit: cover;"></ion-img>
                <ion-img v-else src="https://placehold.co/90?text=No Image Available" style="width:100%;height: 120px;object-fit: cover;"></ion-img>
              </div>
              <div style="width:65%;margin-left: 15px;">
                <h6 style="font-size: 16px;" class="custom-dark-mode"><strong>{{ item.nama }} ({{ item.singkatan }})</strong></h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;" class="custom-dark-mode">{{item.web}}</h6>
                <!-- <h6 style="font-size: 12px;margin-top: 5px !important;">Jl. Sumbing No.2, Tanjungsari, Kec. Kajen, Kabupaten Pekalongan, Jawa Tengah Kode Pos 51161</h6> -->
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
      segment: "data1",
      data : []
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

    async get_data(){
      this.data = []

      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/opd.php`,
      })
      console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        this.data.push(res.data[i])
      }
    },
    go(link){
      location.href =link
    }
  },
  async ionViewDidEnter() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_data()
    await loading.dismiss();

  },
});
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  .custom-dark-mode{
    color: #222428;
  }
}
</style>
