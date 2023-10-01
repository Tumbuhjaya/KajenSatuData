<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/profil')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">DETAIL PRODUK</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div  style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>
      <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 30px 15px !important;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col size="12">
            <div style="width: 100%;padding: 15px;">
              <ion-img src="https://placehold.co/300" style="width:100%;height:300px;object-fit: cover;"></ion-img>
              <h6 style="font-size: 18px;margin-top: 15px !important;"><strong>Nama produk</strong></h6>
              <h6 style="font-size: 18px;font-weight: bold;margin-top: 10px !important;margin-bottom: 10px !important;">Rp 0.000.000,-</h6>
              <h6 style="font-size: 14px; font-weight: normal;">Kategori Produk</h6>

              <h6 style="margin-top: 30px !important;font-size: 18px"><strong>Rincian Produk</strong></h6>
              <h6 style="margin-top: 10px !important;font-size: 14px;font-weight: normal;">deskripsi produk</h6>

              <h6 style="margin-top: 30px !important;font-size: 18px"><strong>Penjual</strong></h6>

              <div style="width: 100%;display: flex;margin-top: 15px;">
                <div style="width: 30%;position: relative;background-color: ;display: flex;justify-content: flex-start;">
                  <div style="width: 80px;height: 80px;border-radius: 100%;overflow: hidden;">
                    <ion-img src="/assets/user-ksd-2.png" style="width:100%;height:80px;object-fit: cover;"></ion-img>
                  </div>
                </div>

                <div style="width:60%;height: 80px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                  <h6 style="font-size: 16px;"><strong>Nama user login</strong></h6>
                  <h6 style="font-size: 14px;margin-top: 5px !important;font-weight: normal;">Nama Desa dan Kecamatan</h6>
                </div>
              </div>
              <div style="width: 100%;height: 2px;background-color: #D3D3D3;margin-top: 15px;"></div>
              <ion-button style="margin-top: 15px;" expand="block">Hubungi Penjual via Whatsapp</ion-button>
              <ion-button style="margin-top: 15px;" expand="block" color="danger">Hapus Produk</ion-button>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import axios  from "axios";
import moment from "moment";
moment.locale("id");
export default defineComponent({
  components: {
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
  async created() {
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
</style>
