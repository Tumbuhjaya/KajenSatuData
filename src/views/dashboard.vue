<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="left">
          <h6 style="color: #fff;font-weight: normal;font-size: 16px;">Selamat Datang di</h6>
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">KAJEN SATU DATA</h6>
        </div>
        <div class="right" @click="$router.push('/login')">
          <div class="box-menu-circle">
            <ion-img v-if="isLogin==0" src="/assets/locked.png" style="height: 60px;"></ion-img>
            <ion-img v-else src="/assets/user-ksd.png" style="height: 60px;"></ion-img>
          </div>
        </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 50px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:100px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 15px 30px !important;">
        <ion-row>
          <ion-col style="padding-top: 0;">
            <ion-img src="/assets/slide-1.png" style="width: 100%;position: relative;z-index: 999;border-radius: 16px;"></ion-img>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 30px;">
          <ion-col>
            <h6 class="font-title">Umum</h6>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/info_lokasi')">
              <div class="box-menu-circle">
                <ion-img src="/assets/info-lokasi.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;">Info<br/>Lokasi</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/info_grafis')">
              <div class="box-menu-circle">
                <ion-img src="/assets/info-grafis.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;">Info<br/>Grafis</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/media_sosial')">
              <div class="box-menu-circle">
                <ion-img src="/assets/media-sosial.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;">Media<br/>Sosial</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/seni_budaya')">
              <div class="box-menu-circle">
                <ion-img src="/assets/seni-budaya.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;">Seni & Budaya</h6>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 30px;">
          <ion-col>
            <h6 class="font-title">Masyarakat</h6>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6" @click="$router.push('/sid')">
            <ion-img src="/assets/sid.png"></ion-img>
          </ion-col>
          <ion-col size="6" @click="$router.push('/berita')">
            <ion-img src="/assets/berita.png"></ion-img>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 30px;">
          <ion-col>
            <h6 class="font-title">Rekomendasi</h6>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/nomor_penting')">
              <div class="box-menu-circle">
                <ion-img src="/assets/no-penting.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;">Nomor<br/>Penting</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu">
              <div class="box-menu-circle">
                <ion-img src="/assets/lapor-bupati.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;">Lapor<br/>Bupati</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/web_app')">
              <div class="box-menu-circle">
                <ion-img src="/assets/web-app.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;">Website<br/>App</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/kantor_pemerintahan')">
              <div class="box-menu-circle">
                <ion-img src="/assets/kantor-pemerintah.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;">Kantor<br/>Pemerintah</h6>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      
    </ion-content>
  </ion-page>
</template>

<script>
import {   IonInput,IonSelect,IonSelectOption,loadingController,IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonImg, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Storage } from "@capacitor/storage";

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
    IonButton,
  },
  data() {
    return {
      isLogin:0
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
  async created(){
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
        await loading.present();

    const { value } = await Storage.get({ key: 'login' });
    this.isLogin = value?value:0
    await loading.dismiss();

  }
});
</script>

<style scoped>
.font-title{
  font-size: 18px;
  font-weight: bolder;
}

.font-title-circle{
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}

.box-header{
  width: 100%;
  height: ;
  background-color: #4c87f2;
  padding: 15px 35px;
  display: flex;
}

.box-header .left{
  width: 70%;
  height: 70px;
  background-color: ;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.box-header .right{
  width: 30%;
  height: 70px;
  background-color: ;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.box-menu{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ;
  flex-direction: column;
}
.right .box-menu-circle{
  width:60px;
  height: 60px;
  background-color: #FFECB2;
  border-radius: 100%;
  overflow: hidden;
}
.box-menu-circle{
  width:68px;
  height: 68px;
  background-color: #FFECB2;
  border-radius: 100%;
  overflow: hidden;
}
</style>
