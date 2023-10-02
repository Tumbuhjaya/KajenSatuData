<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/tabs-dashboard/dashboard')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">Media Sosial</h6>
        </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 30px 20px !important;">
        <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;display: flex;box-shadow: 0px 4px 4px 0px #00000040;padding: 0 30px;border-radius: 8px;">
              <div style="width: 80%;height: 100px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 20px;font-weight: 600;">Facebook</h6>
                <h6>Kabupaten Pekalongan</h6>
              </div>
              <div style="width: 20%;height: 100px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <ion-img src="/assets/fb.png" style="width: 100%;"></ion-img>
              </div>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;display: flex;box-shadow: 0px 4px 4px 0px #00000040;padding: 0 30px;border-radius: 8px;background-color: #eefafd;">
              <div style="width: 80%;height: 100px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 20px;font-weight: 600;">Twitter</h6>
                <h6>@Pemkab_Pkl</h6>
              </div>
              <div style="width: 20%;height: 100px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <ion-img src="/assets/tube.png" style="width: 100%;"></ion-img>
              </div>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;display: flex;box-shadow: 0px 4px 4px 0px #00000040;padding: 0 30px;border-radius: 8px;background-color: #eefafd;">
              <div style="width: 80%;height: 100px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 20px;font-weight: 600;">Instagram</h6>
                <h6>kab_pekalongan</h6>
              </div>
              <div style="width: 20%;height: 100px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <ion-img src="/assets/ig.png" style="width: 100%;"></ion-img>
              </div>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;display: flex;box-shadow: 0px 4px 4px 0px #00000040;padding: 0 30px;border-radius: 8px;background-color: #eefafd;">
              <div style="width: 80%;height: 100px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 20px;font-weight: 600;">Youtube</h6>
                <h6>@Pemkab Pekalongan</h6>
              </div>
              <div style="width: 20%;height: 100px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <ion-img src="/assets/tube.png" style="width: 100%;"></ion-img>
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
