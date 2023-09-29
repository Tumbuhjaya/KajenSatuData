<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/seni_budaya')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">MARKETPLACE</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>
      <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 0 15px !important;">
        <ion-row style="margin-top: 5px;">
          <ion-col style="padding-top: 0;">
            <div style="width: 100%;display: flex;">
              <div style="width:77%;">
                <ion-input class="custom" placeholder="Cari Produk ...." style="margin:0;box-shadow:0px 4px 4px 0px #00000040;border-radius: 10px;"></ion-input>
              </div>
              <div style="width:18%;margin-left: 5%;">
                <ion-button color="warning" style="margin: 0 !important;">Cari</ion-button>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row style="margin-top: 30px;">
          <ion-col>
            <div style="width: 100%;display: flex;">
              <div style="width: 50%;display: flex;justify-content: flex-start;height: 36px;align-items: center;">
                <h6 class="font-title">UMKM</h6>
              </div>
              <div style="width: 50%;display: flex;justify-content: flex-end;background-color: ;height: 36px;align-items: center;">
                <ion-button fill="outline" size="small" style="text-transform: capitalize;" @click="$router.push('/marketplace/umkm')">Lihat Semua</ion-button>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row style="margin-top: 15px;">
          <ion-col v-for="(item, id) in data_umkm" size="3">
            <div class="box-menu" @click="$router.push('/marketplace/detail_umkm/'+ item.id_user_android)">
              <div class="box-menu-circle">
                <ion-img v-if="item.foto" :src="item.foto" src="/assets/info-lokasi.png"></ion-img>
                <ion-img v-else src="/assets/info-lokasi.png"></ion-img>
              </div>
              <h6 style="margin-top: 10px !important;text-align: center;font-size: 14px;">{{ item.nama }}</h6>
            </div>
          </ion-col>

          <!-- <ion-col size="3">
            <div class="box-menu" @click="$router.push('/marketplace/detail_umkm')">
              <div class="box-menu-circle">
                <ion-img src="/assets/info-lokasi.png"></ion-img>
              </div>
              <h6 style="margin-top: 10px !important;text-align: center;font-size: 14px;">Toko B</h6>
            </div>
          </ion-col> -->

          <!-- <ion-col size="3">
            <div class="box-menu" @click="$router.push('/marketplace/detail_umkm')">
              <div class="box-menu-circle">
                <ion-img src="/assets/info-lokasi.png"></ion-img>
              </div>
              <h6 style="margin-top: 10px !important;text-align: center;font-size: 14px;">Toko C</h6>
            </div>
          </ion-col> -->

          <!-- <ion-col size="3">
            <div class="box-menu" @click="$router.push('/marketplace/detail_umkm')">
              <div class="box-menu-circle">
                <ion-img src="/assets/info-lokasi.png"></ion-img>
              </div>
              <h6 style="margin-top: 10px !important;text-align: center;font-size: 14px;">Toko D</h6>
            </div>
          </ion-col> -->
        </ion-row> 
        <ion-row style="margin-top: 15px;">
          <ion-col size="12">
            <h6 class="font-title">Rekomendasi</h6>
          </ion-col>

          <ion-col size="12">
            <ion-select label="Filter Berdasarkan Kategori" placeholder="-- Pilih --">
            <ion-select-option v-for="(item, id) in data_kategori" :value="item.nama">{{ item.nama }}</ion-select-option>
            <!-- <ion-select-option value="banana">Banana</ion-select-option>
            <ion-select-option value="orange">Orange</ion-select-option> -->
          </ion-select>
          </ion-col>
        </ion-row>

        <ion-row  style="margin-top: 15px;">
          <ion-col v-for="(item, id) in data_produk" size="6" @click="$router.push('/marketplace/detail_produk/'+ item.id_produk)" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img v-if="item.foto" :src="item.foto" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <ion-img v-else src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>{{item.nama}}</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>{{item.harga}}</strong></h6>
              </div>
            </div>
          </ion-col>
          <!-- <ion-col size="6" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>Produk A</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>Rp 17.000,-</strong></h6>
              </div>
            </div>
          </ion-col> -->
          <!-- <ion-col size="6" @click="$router.push('/seni_budaya/detail')" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>Produk A</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>Rp 17.000,-</strong></h6>
              </div>
            </div>
          </ion-col> -->
          <!-- <ion-col size="6" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>Produk A</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>Rp 17.000,-</strong></h6>
              </div>
            </div>
          </ion-col> -->
        </ion-row>
      </ion-grid>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button @click="$router.push('/login')">
          <ion-icon :icon="arrowBackCircleOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import axios  from "axios";
import moment from "moment";
moment.locale("id");
export default defineComponent({
  components: {
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
      data_umkm: [],
      data_produk: [],
      data_kategori: []
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
    async get_umkm(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/user-umkm.php?limit=4`})
      // console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        this.data_umkm.push(res.data[i])
      }
    },
    async get_produk(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/produk.php?ktg=`,
      })
      console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        this.data_produk.push(res.data[i])
      }
    },
    async get_kategori(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/produk-ktg.php`,
      })
      // console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        this.data_kategori.push(res.data[i])
      }
    },
    async get_seni(){
      let hsl = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/seni-id.php?id=`+this.$route.params.id,
      })
      // console.log(hsl);
      this.foto=hsl.data.foto;
      this.id_seni_budaya=hsl.data.id_seni_budaya;
      this.isi=hsl.data.isi;
      this.jenis=hsl.data.jenis;
      this.nama=hsl.data.nama;
    },
  },
  async created() {
    await this.get_umkm()
    await this.get_produk()
    await this.get_kategori()
    await this.get_seni()
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

ion-input.custom {
  --background: #fff;
  --color: #000;
  --placeholder-color: #4F4F4F;
  --placeholder-opacity: 0.8;
  --padding-bottom: 15px;
  --padding-end: 15px;
  --padding-start: 15px;
  --padding-top: 15px;
  --border-radius:10px;
}

.sc-ion-input-md-h{
  --highlight-color-focused:transparent
}

.box-menu{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ;
  flex-direction: column;
}

.box-menu-circle{
  width:68px;
  height: 68px;
  background-color: #FFECB2;
  border-radius: 100%;
  overflow: hidden;
}

.font-title{
  font-size: 18px;
  font-weight: bolder;
}
</style>
