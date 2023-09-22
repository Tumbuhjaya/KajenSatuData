<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/tabs-dashboard/dashboard')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">Website & APP</h6>
        </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <!-- <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div> -->

      <ion-img src="../../../public/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 20px !important;">
        <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;" @click="$router.push('/website')">
            <div style="width: 100%;display: flex;box-shadow: 0px 4px 4px 0px #00000040;padding: 0 20px;border-radius: 8px;background-color: #EFF0F7">
              <div style="width: 85%;height: 80px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 20px;font-weight: 600;">Website OPD</h6>
              </div>
              <div style="width: 15%;height: 80px;display: flex;justify-content: center;align-items: flex-end;flex-direction: column;">
                <ion-icon :icon="chevronForwardOutline" size="large" ></ion-icon>
              </div>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;" @click="$router.push('/website')">
            <div style="width: 100%;display: flex;box-shadow: 0px 4px 4px 0px #00000040;padding: 0 20px;border-radius: 8px;background-color: #EFF0F7">
              <div style="width: 85%;height: 80px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 20px;font-weight: 600;">Website Kelurahan</h6>
              </div>
              <div style="width: 15%;height: 80px;display: flex;justify-content: center;align-items: flex-end;flex-direction: column;">
                <ion-icon :icon="chevronForwardOutline" size="large" ></ion-icon>
              </div>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;" @click="$router.push('/website')">
            <div style="width: 100%;display: flex;box-shadow: 0px 4px 4px 0px #00000040;padding: 0 20px;border-radius: 8px;background-color: #EFF0F7">
              <div style="width: 85%;height: 80px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 20px;font-weight: 600;">Website Desa</h6>
              </div>
              <div style="width: 15%;height: 80px;display: flex;justify-content: center;align-items: flex-end;flex-direction: column;">
                <ion-icon :icon="chevronForwardOutline" size="large" ></ion-icon>
              </div>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;" @click="$router.push('/website')">
            <div style="width: 100%;display: flex;box-shadow: 0px 4px 4px 0px #00000040;padding: 0 20px;border-radius: 8px;background-color: #EFF0F7">
              <div style="width: 85%;height: 80px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 20px;font-weight: 600;">Website Instansi Vertikal</h6>
              </div>
              <div style="width: 15%;height: 80px;display: flex;justify-content: center;align-items: flex-end;flex-direction: column;">
                <ion-icon :icon="chevronForwardOutline" size="large" ></ion-icon>
              </div>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;" @click="$router.push('/aplikasi')">
            <div style="width: 100%;display: flex;box-shadow: 0px 4px 4px 0px #00000040;padding: 0 20px;border-radius: 8px;background-color: #EFF0F7">
              <div style="width: 85%;height: 80px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 20px;font-weight: 600;">Aplikasi Layanan Pemerintah</h6>
              </div>
              <div style="width: 15%;height: 80px;display: flex;justify-content: center;align-items: flex-end;flex-direction: column;">
                <ion-icon :icon="chevronForwardOutline" size="large" ></ion-icon>
              </div>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;" @click="$router.push('/aplikasi')">
            <div style="width: 100%;display: flex;box-shadow: 0px 4px 4px 0px #00000040;padding: 0 20px;border-radius: 8px;background-color: #EFF0F7">
              <div style="width: 85%;height: 80px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 20px;font-weight: 600;">Aplikasi Layanan Publik</h6>
              </div>
              <div style="width: 15%;height: 80px;display: flex;justify-content: center;align-items: flex-end;flex-direction: column;">
                <ion-icon :icon="chevronForwardOutline" size="large" ></ion-icon>
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { chevronForwardOutline } from 'ionicons/icons';
export default defineComponent({
  components: {
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
      return { arrowBackCircleOutline, chevronForwardOutline };
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
