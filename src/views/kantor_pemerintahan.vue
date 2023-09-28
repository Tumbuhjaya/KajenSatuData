<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/tabs-dashboard/dashboard')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">Kantor  Pemerintahan</h6>
        </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <!-- <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div> -->

      <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 20px !important;">
        <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" v-for="(item, id) in data" style="padding: 0;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #fff;display: flex;">
              <div style="width: 35%;">
                <ion-img v-if="item.foto" :src="item.foto" style="width:100%;"></ion-img>
                <ion-img v-else src="https://placehold.co/90" style="width:100%;height: 120px;object-fit: cover;"></ion-img>
              </div>
              <div style="width:65%;margin-left: 15px;">
                <h6 style="font-size: 16px;"><strong>{{ item.nama }} ({{ item.singkatan }})</strong></h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;">{{item.web}}</h6>
                <!-- <h6 style="font-size: 12px;margin-top: 5px !important;">Jl. Sumbing No.2, Tanjungsari, Kec. Kajen, Kabupaten Pekalongan, Jawa Tengah Kode Pos 51161</h6> -->
              </div>
            </div>
          </ion-col>
        </ion-row>

        <!-- <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #fff;display: flex;">
              <div style="width: 35%;">
                <ion-img src="https://placehold.co/90" style="width:100%;height: 120px;object-fit: cover;"></ion-img>
              </div>
              <div style="width:65%;margin-left: 15px;">
                <h6 style="font-size: 16px;"><strong>Badan Penanggulangan Bencana Daerah</strong></h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;">0285381905</h6>
                <h6 style="font-size: 12px;margin-top: 5px !important;">Jl. Sumbing No.2, Tanjungsari, Kec. Kajen, Kabupaten Pekalongan, Jawa Tengah Kode Pos 51161</h6>
              </div>
            </div>
          </ion-col>
        </ion-row> -->

        <!-- <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #fff;display: flex;">
              <div style="width: 35%;">
                <ion-img src="https://placehold.co/90" style="width:100%;height: 120px;object-fit: cover;"></ion-img>
              </div>
              <div style="width:65%;margin-left: 15px;">
                <h6 style="font-size: 16px;"><strong>Badan Penanggulangan Bencana Daerah</strong></h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;">0285381905</h6>
                <h6 style="font-size: 12px;margin-top: 5px !important;">Jl. Sumbing No.2, Tanjungsari, Kec. Kajen, Kabupaten Pekalongan, Jawa Tengah Kode Pos 51161</h6>
              </div>
            </div>
          </ion-col>
        </ion-row> -->

        <!-- <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #fff;display: flex;">
              <div style="width: 35%;">
                <ion-img src="https://placehold.co/90" style="width:100%;height: 120px;object-fit: cover;"></ion-img>
              </div>
              <div style="width:65%;margin-left: 15px;">
                <h6 style="font-size: 16px;"><strong>Badan Penanggulangan Bencana Daerah</strong></h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;">0285381905</h6>
                <h6 style="font-size: 12px;margin-top: 5px !important;">Jl. Sumbing No.2, Tanjungsari, Kec. Kajen, Kabupaten Pekalongan, Jawa Tengah Kode Pos 51161</h6>
              </div>
            </div>
          </ion-col>
        </ion-row> -->

        <!-- <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #fff;display: flex;">
              <div style="width: 35%;">
                <ion-img src="https://placehold.co/90" style="width:100%;height: 120px;object-fit: cover;"></ion-img>
              </div>
              <div style="width:65%;margin-left: 15px;">
                <h6 style="font-size: 16px;"><strong>Badan Penanggulangan Bencana Daerah</strong></h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;">0285381905</h6>
                <h6 style="font-size: 12px;margin-top: 5px !important;">Jl. Sumbing No.2, Tanjungsari, Kec. Kajen, Kabupaten Pekalongan, Jawa Tengah Kode Pos 51161</h6>
              </div>
            </div>
          </ion-col>
        </ion-row> -->

        <!-- <ion-row style="margin-top: 5px;margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #fff;display: flex;">
              <div style="width: 35%;">
                <ion-img src="https://placehold.co/90" style="width:100%;height: 120px;object-fit: cover;"></ion-img>
              </div>
              <div style="width:65%;margin-left: 15px;">
                <h6 style="font-size: 16px;"><strong>Badan Penanggulangan Bencana Daerah</strong></h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;">0285381905</h6>
                <h6 style="font-size: 12px;margin-top: 5px !important;">Jl. Sumbing No.2, Tanjungsari, Kec. Kajen, Kabupaten Pekalongan, Jawa Tengah Kode Pos 51161</h6>
              </div>
            </div>
          </ion-col>
        </ion-row> -->
      </ion-grid>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline, linkOutline } from 'ionicons/icons';
import axios  from "axios";

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
      return { arrowBackCircleOutline, linkOutline };
    },
  data() {
    return {
      segment: "data1",
      data : []
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

    async get_data(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/opd.php`,
      })
      // console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        this.data.push(res.data[i])
      }
    }
  },
  async created() {
    await this.get_data()
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
ion-icon {
  font-size: 24px;
}

</style>
