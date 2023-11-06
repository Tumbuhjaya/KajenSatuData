<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="left">
          <h6 style="color: #1c47bc;font-weight: normal;font-size: 16px;">Selamat Datang di</h6>
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">KAJEN SATU DATA</h6>
        </div>
        <div class="right" @click="$router.push('/login')">
          <div class="box-menu-circle">
            <ion-img v-if="isLogin==0" src="/assets/locked.png" style="height: 60px;"></ion-img>
            <ion-img v-else src="/assets/user-ksd.png" style="height: 60px;"></ion-img>
          </div>
        </div>
      </div>
    </ion-header>

    <ion-content :fullscreen="true" >
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>
      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 0 20px !important;">
        <ion-row>
          <ion-col style="padding-top: 0;">
            <ion-img src="/assets/bannerKSD.png" style="width: 100%;position: relative;z-index: 999;border-radius: 16px;"></ion-img>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
          <ion-col>
            <h6 class="font-title" style="color: #1c47bc;">Umum</h6>
          </ion-col>
        </ion-row>

        <ion-row >
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/info_lokasi')">
              <div class="box-menu-circle">
                <ion-img src="/assets/info-lokasi-new.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;color: #1c47bc;">Info<br/>Lokasi</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/info_grafis')">
              <div class="box-menu-circle">
                <ion-img src="/assets/info-grafis-new.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;color: #1c47bc;">Info<br/>Grafis</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/media_sosial')">
              <div class="box-menu-circle">
                <ion-img src="/assets/media-sosial-new.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;color: #1c47bc;">Media<br/>Sosial</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/seni_budaya')">
              <div class="box-menu-circle">
                <ion-img src="/assets/seni-budaya-new.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;color: #1c47bc;">Seni & Budaya</h6>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
          <ion-col>
            <h6 class="font-title" style="color: #1c47bc;">Masyarakat</h6>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6" @click="$router.push('/sid')">
            <div style="width: 100%;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;overflow: hidden;">
              <ion-img src="/assets/sid.png"></ion-img>
            </div>
          </ion-col>
          <ion-col size="6" @click="$router.push('/berita')">
            <div style="width: 100%;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;overflow: hidden;">
              <ion-img src="/assets/berita.png"></ion-img>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
          <ion-col>
            <h6 class="font-title" style="color: #1c47bc;">Rekomendasi</h6>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/nomor_penting')">
              <div class="box-menu-circle">
                <ion-img src="/assets/no-penting-new.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;color: #1c47bc;">Nomor<br/>Penting</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu">
              <div class="box-menu-circle" @click="go">
                <ion-img src="/assets/lapor-bupati-new.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;color: #1c47bc;">Lapor<br/>Bupati</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/web_app')">
              <div class="box-menu-circle">
                <ion-img src="/assets/web-app-new.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;color: #1c47bc;">Website<br/>App</h6>
            </div>
          </ion-col>
          <ion-col size="3">
            <div class="box-menu" @click="$router.push('/kantor_pemerintahan')">
              <div class="box-menu-circle">
                <ion-img src="/assets/kantor-pemerintah-new.png"></ion-img>
              </div>
              <h6 class="font-title-circle" style="margin-top: 10px !important;color: #1c47bc;">Kantor<br/>Pemerintah</h6>
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
import { Preferences } from "@capacitor/preferences";

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
    go(){
      location.href = 'https://wa.me/6285600900300'
    }
  },
  async ionViewDidEnter(){
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
        await loading.present();

        const { value } = await Preferences.get({ key: 'login' });
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
  background-image: url('/assets/13263.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: top;
  padding: 15px 20px;
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
  width:70px;
  height: 70px;
  background-color: #FFECB2;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}


</style>
