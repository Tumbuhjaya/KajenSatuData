<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/tabs-dashboard/dashboard')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">Berita</h6>
        </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 0 20px !important;">
        <ion-row style="margin-top: 5px;">
          <ion-col style="padding-top: 0;padding: 0 15px;">
            <ion-segment
              color="success"
              :swipe-gesture="true"
              v-model="segment"
              @ionChange="segmentChanged($event)"
            >
              <ion-segment-button class="button" value="data1">
                <ion-label class="label" style="font-weight: 600;">UMUM</ion-label>
              </ion-segment-button>
              <ion-segment-button class="button" value="data2">
                <ion-label class="label" style="font-weight: 600;">PENGUMUMAN</ion-label>
              </ion-segment-button>
              <ion-segment-button class="button" value="data3">
                <ion-label class="label" style="font-weight: 600;">INFO LELANG</ion-label>
              </ion-segment-button>
              </ion-segment>
          </ion-col>
        </ion-row>

        <ion-row class="list" v-if="segment == 'data1'">
          <ion-col size="12" @click="push(item.link)" v-for="(item,id) in data" :key="id" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <ion-img v-if="item.foto" :src="item.foto" style="width:100%;"></ion-img>
            <ion-img v-else src="https://placehold.co/600x400" style="width:100%;"></ion-img>
            <h6 style="font-size: 16px;margin-top: 10px !important;color:#1c47bc"><strong>{{ item.judul }}</strong></h6>
            <h6 style="font-size: 12px;margin-top: 5px !important;font-weight: normal;">{{ item.waktu }}</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>
        </ion-row>
        <ion-row class="list" v-if="segment == 'data2'">
          <ion-col size="12"  @click="push(item.link)"  v-for="(item,id) in pengumuman" :key="id" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <h6 style="font-size: 14px;"><strong>{{ item.judul }}</strong></h6>
            <h6 style="font-size: 12px;margin-top: 10px !important;">{{ item.waktu }}</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>
          
        </ion-row>
        <ion-row class="list" v-if="segment == 'data3'">
          <ion-col size="12"  @click="push(item.link)"  v-for="(item,id) in lelang" :key="id" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <h6 style="font-size: 14px;"><strong>{{ item.judul }}</strong></h6>
            <h6 style="font-size: 12px;margin-top: 10px !important;">{{ item.waktu }}</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>
          
        </ion-row>
        <ion-infinite-scroll threshold="10%" @ionInfinite="loadData">
            <ion-infinite-scroll-content loading-spinner="bubbles" loading-text=" Loading more item">
              
            </ion-infinite-scroll-content>
          </ion-infinite-scroll>
      </ion-grid>
      
    </ion-content>
  </ion-page>
</template>

<script>
import {   IonInput,IonSelect,IonSelectOption,loadingController,IonInfiniteScroll,IonInfiniteScrollContent, IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton } from '@ionic/vue';
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
    IonInfiniteScroll,
    IonInfiniteScrollContent,
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
      data:[],
      pengumuman:[],
      lelang:[],
      hal:1,
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
    async get_berita(){
      let berita = await axios({
      method: "get",
        url:`https://pekalongankab.go.id/public/api/berita-pekalongankab.php?halaman=${this.hal}`,
      })
      console.log(berita,'berita');

      for (let i = 0; i < berita.data.length; i++) {
        this.data.push(berita.data[i])
      }
    },
    async get_pengumuman(){
      let hsl = await axios({
      method: "get",
        url:ip_server+`pengumuman.php`,
      })
      console.log(hsl,'pengumuman');

      for (let i = 0; i < hsl.data.length; i++) {
        this.pengumuman.push(hsl.data[i])
      }
    },
    async get_lelang(){
      let hsl = await axios({
      method: "get",
        url:ip_server+`lelang.php`,
      })
      console.log(hsl,'lelang');
      for (let i = 0; i < hsl.data.length; i++) {
        this.lelang.push(hsl.data[i])
      }
    },
    push(link){
      location.href = link
    },
    async  loadData(ev){
      this.hal++ 
      await this.get_berita()
      setTimeout(function () {
      ev.target.complete();
      },setTimeout(1000))
    }
  },
  async ionViewDidEnter() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_berita()
    await this.get_pengumuman()
    await this.get_lelang()
    await loading.dismiss();

  }
});
</script>

<style scoped>
ion-segment-button{
  background-color: #eefafd;
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

.ion-color-success{
  --ion-color-base:#1c47bc !important
}


</style>
