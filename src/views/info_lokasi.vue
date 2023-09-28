<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/tabs-dashboard/dashboard')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">INFO LOKASI</h6>
        </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 0 30px !important;">
        <ion-row style="margin-top: 5px;">
          <ion-col style="padding-top: 0;">
            <ion-segment
              color="success"
              :swipe-gesture="true"
              v-model="segment"
              @ionChange="segmentChanged($event)"
            >
              <ion-segment-button class="button" value="data1">
                <ion-label class="label" style="font-weight: 600;">FASKES</ion-label>
              </ion-segment-button>
              <ion-segment-button class="button" value="data2">
                <ion-label class="label" style="font-weight: 600;">FASUM</ion-label>
              </ion-segment-button>
              <ion-segment-button class="button" value="data3">
                <ion-label class="label" style="font-weight: 600;">WISATA</ion-label>
              </ion-segment-button>
              </ion-segment>
          </ion-col>
        </ion-row>

        <ion-row class="list" v-if="segment == 'data1'">
          <ion-col size="12" style="margin-top: 15px;" @click="$router.push('/info_lokasi/apotek')">
            <ion-img src="/assets/apotek.png" style="width:100%;"></ion-img>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;" @click="$router.push('/info_lokasi/klinik')">
            <ion-img src="/assets/Klinik.png" style="width:100%;"></ion-img>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;" @click="$router.push('/info_lokasi/dokter')">
            <ion-img src="/assets/praktek-dokter.png" style="width:100%;"></ion-img>
          </ion-col>
        </ion-row>
                
        <ion-row class="list" v-if="segment == 'data2'">
          <ion-col size="12" style="margin-top: 15px;">
            <ion-img src="/assets/pasar.png" style="width:100%;"></ion-img>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;">
            <ion-img src="/assets/pom-bensin.png" style="width:100%;"></ion-img>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;">
            <ion-img src="/assets/terminal-bus.png" style="width:100%;"></ion-img>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;">
            <ion-img src="/assets/taman-kota.png" style="width:100%;"></ion-img>
          </ion-col>
        </ion-row>

        <ion-row class="list" v-if="segment == 'data3'">
          <ion-col size="12" style="margin-top: 15px;">
            <ion-img src="/assets/wisata-alam.png" style="width:100%;"></ion-img>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;">
            <ion-img src="/assets/wisata-kuliner.png" style="width:100%;"></ion-img>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;">
            <ion-img src="/assets/wisata-religi.png" style="width:100%;"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonGrid,
    IonRow, 
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonImg,
    IonButton,
    IonIcon 
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
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
  },
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
