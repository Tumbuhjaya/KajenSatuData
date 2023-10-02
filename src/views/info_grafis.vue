<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/tabs-dashboard/dashboard')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">Info Grafis</h6>
        </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 30px 20px  !important;">
        <ion-row   v-for="(item,id) in info" :key="id"   style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <ion-img v-if="!item.foto" src="/assets/banner-info-grafis.png"></ion-img>
            <ion-img v-else-if="item.foto" :src="item.foto"></ion-img>
          </ion-col>

          <ion-col size="12" style="padding: 0;">
            <div style="width:100%;padding:30px;background-color: #FFD82B;">
              <h6 style="margin: 0;"><strong>{{ item.ket }}</strong></h6>
            </div>
          </ion-col>
        </ion-row>

        <!-- <ion-row>
          <ion-col size="12" style="padding: 0;">
            <ion-img src="/assets/banner-info-grafis.png"></ion-img>
          </ion-col>

          <ion-col size="12" style="padding: 0;">
            <div style="width:100%;padding:30px;background-color: #FFD82B;">
              <h6 style="margin: 0;"><strong>RLPPD TA 2022</strong></h6>
            </div>
          </ion-col>
        </ion-row> -->
      </ion-grid>
      
    </ion-content>
  </ion-page>
</template>

<script>
import {  IonInput,IonSelect,IonSelectOption,loadingController,IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
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
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      segment: "data1",
      info:[]
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
    async get_info(){
      let hsl = await axios({
      method: "get",
        url:ip_server+`infografis.php`,
      })
      for (let i = 0; i < hsl.data.length; i++) {
        this.info.push(hsl.data[i])
      }
    },
  },
  async created() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_info()
    await loading.dismiss();

  }});
</script>

<style scoped>
.box-header{
  width: 100%;
  height: ;
  background-image: url('/assets/13263.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: top;
  padding: 15px 20px;
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

ion-segment-button{
  background-color: #fff;
  border-radius: 30px;
  margin: 0 2.5px 2.5px 2.5px;
  box-shadow: 0px 2px 4px 0px #00000040;
}

ion-segment-button label{
  color: #000;
}

ion-segment-button::part(indicator-background) {
  background: transparent;
}


</style>
