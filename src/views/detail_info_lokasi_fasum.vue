<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/info_lokasi')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;text-transform:capitalize;">{{ tipe.toUpperCase() }}</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 20px !important;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col size="6"  @click="setOpen(item)" id="open-modal"  v-for="(item,id) in data" :key="id" >
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #eefafd;overflow: hidden;">
              <ion-img v-if="!item.foto" src="https://placehold.co/100?text=No Image Available" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <ion-img v-else-if="item.foto" :src="item.foto" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;color: #1c47bc;"><strong>{{ item.nama }}</strong></h6>
                <h6 class="custom-dark-mode" style="font-size: 10px;font-weight: normal;">{{ item.lokasi }}</h6>
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-modal ref="modal" :is-open="isOpen" trigger="open-modal" >
        <ion-header>
          <ion-toolbar>
            <ion-title>{{ nama }}</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">Tutup</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-row>
            <ion-col>
              <div style="width: 100%;padding: 15px;">
                <div style="width: 100%;position: relative;">
                  <ion-img v-if="!src" src="https://placehold.co/300" style="width:100%;height:300px;object-fit: cover;"></ion-img>
                  <ion-img v-else-if="src" :src="src" style="width:100%;height:300px;object-fit: cover;"></ion-img>

                  <div style="width: 100%;position: absolute;left:0;right:0;bottom:0;padding:10px;background-color: rgba(255,255,255,0.5);">
                    <h6 style="font-weight: normal;font-size: 12px;" class="custom-dark-mode">{{ lokasi }}</h6>
                  </div>
                </div>
                

                <h6 style="margin-top: 15px !important;" class="custom-dark-mode">{{ deskripsi }}</h6>
                
              </div>
            </ion-col>
          </ion-row>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script>
import {  IonInput,IonSelect,IonSelectOption,loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons, IonModal } from '@ionic/vue';
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
    IonIcon ,
    IonModal
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      deskripsi:'',
      lokasi:'',
      src:'',
      nama:'',
      data:[],
      pengumuman:[],
      segment: "data1",
      tipe: this.$route.params.tipe,
      isOpen:false,
    };
  },
  methods: {
    setOpen(item){
      this.deskripsi=item.deskripsi
      this.lokasi=item.lokasi
      this.src=item.foto
      this.nama=item.nama
      this.isOpen = true
    },
    dismiss() {
        // this.$refs.modal.$el.dismiss();
        this.isOpen = false
      },
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
    update_modal(item){
      console.log(item);
    },
    async get_data(){
      this.data = []
      let hsl = await axios({
      method: "get",
        url:ip_server+`${this.tipe}.php`,
      })
      console.log(hsl);
      for (let i = 0; i < hsl.data.length; i++) {
        this.data.push(hsl.data[i])
      }
    },
  },
  async ionViewDidEnter() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_data()
    await loading.dismiss();

  }});
</script>

<style scoped>

ion-modal {
  --width:90%;
  --height: 75%;
  --border-radius: 16px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

ion-modal::part(backdrop) {
  background: rgba(209, 213, 219);
  opacity: 1;
}

ion-modal ion-toolbar {
  --background: #4c87f2;
  --color: white;
}

@media (prefers-color-scheme: dark) {
  .custom-dark-mode{
    color: #222428;
  }
}

</style>
