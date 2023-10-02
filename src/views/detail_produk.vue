<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/marketplace')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">Detail Produk</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <!-- <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;z-index: 1;"></div> -->

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 0 0 !important;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col v-for="(item, id) in data_produk" style="padding: 0;">
            <div style="width: 100%;">
              <ion-img v-if="item.foto" :src="item.foto" style="width:100%;height:300px;object-fit: cover;"></ion-img>
              <ion-img v-else src="https://placehold.co/300" style="width:100%;height:300px;object-fit: cover;"></ion-img>
              

              <div style="width: 100%;padding: 15px 30px;background-color: #fff;position: absolute;left:0;right:0;top:280px;bottom:0;border-top-left-radius: 30px;border-top-right-radius: 30px;">
                <h6 style="font-size: 18px;margin-top: 15px !important;">{{item.nama}}</h6>
              <h6 style="font-size: 20px;font-weight: bold;margin-top: 5px !important;margin-bottom: 5px !important;color: #1c47bc;">{{item.harga}}</h6>
              <h6 style="font-size: 16px; ">{{item.kecamatan}}</h6>

              <h6 style="margin-top: 15px !important;font-weight: normal;">{{item.deskripsi}}</h6>
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {  IonInput,IonSelect,IonSelectOption,loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import axios  from "axios";
import moment from "moment";
moment.locale("id");
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
    IonIcon
    
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      foto: "",
      id_seni_budaya: "",
      isi: "",
      jenis: "",
      nama: "",
      segment: "data1",
      data_produk : []
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
    async get_seni(){
      let hsl = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/seni-id.php?id=`+this.$route.params.id,
      })
      console.log(hsl);
      this.foto=hsl.data.foto;
      this.id_seni_budaya=hsl.data.id_seni_budaya;
      this.isi=hsl.data.isi;
      this.jenis=hsl.data.jenis;
      this.nama=hsl.data.nama;
    },
    async get_detail(){
        let res = await axios({
        method: "get",
          url:`https://ksd.pekalongankab.go.id/api/produk-id.php?id=`+this.$route.params.id,
        })
        console.log(res.data, "resss");
        this.data_produk.push(res.data)
        // for (let i = 0; i < res.data.length; i++) {
        //   this.data_produk.push(res.data[i])
        // }
      }
  },
  async ionViewDidEnter() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_detail()
    await this.get_seni()
    await loading.dismiss();

  }});
</script>

<style scoped>
</style>
