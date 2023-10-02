<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/seni_budaya')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">{{ nama }}</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;z-index: 1;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 5px 0;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col style="padding: 0;" size="12">
            <div style="width: 100%;position: relative;">
              <ion-img v-if="foto" :src="foto" style="width:100%;height:300px;object-fit: cover;"></ion-img>

              <ion-img  v-else src="https://placehold.co/300" style="width:100%;height:300px;object-fit: cover;"></ion-img>
              
              
              <div style="width: 100%;padding: 15px 30px;background-color: #fff;position: absolute;left:0;right:0;top:280px;border-top-left-radius: 30px;border-top-right-radius: 30px;">
                <h6 style="margin-top: 15px !important;font-weight: normal;">{{ isi }}</h6>
              </div>
            </div>

            
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonInput,IonSelect,IonSelectOption, loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons } from '@ionic/vue';
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
        url:ip_server+`seni-id.php?id=`+this.$route.params.id,
      })
      console.log(hsl);
      this.foto=hsl.data.foto;
      this.id_seni_budaya=hsl.data.id_seni_budaya;
      this.isi=hsl.data.isi;
      this.jenis=hsl.data.jenis;
      this.nama=hsl.data.nama;
    },
  },
  async created() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_seni()
    await loading.dismiss();

  }});
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
</style>
