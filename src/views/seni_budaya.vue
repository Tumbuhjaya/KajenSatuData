<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/tabs-dashboard/dashboard')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">Seni Budaya</h6>
        </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 0 20px !important;">
        <ion-row style="margin-top: 5px;">
          <ion-col style="padding-top: 0;">
            <ion-segment
              color="success"
              :swipe-gesture="true"
              v-model="segment"
              @ionChange="segmentChanged($event)"
            >
              <ion-segment-button class="button" value="data1">
                <ion-label class="label" style="font-weight: 600;">SENI TARI</ion-label>
              </ion-segment-button>
              <ion-segment-button class="button" value="data2">
                <ion-label class="label" style="font-weight: 600;">ACARA KEBUDAYAAN</ion-label>
              </ion-segment-button>
              </ion-segment>
          </ion-col>
        </ion-row>

        <ion-row v-if="segment == 'data1'">
          <ion-col>
            <ion-row style="margin-bottom: 15px;"  v-for="(item,id) in seni_tari" :key="id"  >
              <ion-col size="6"   v-for="(item2,id) in item" :key="id"  @click="$router.push('/seni_budaya/detail/'+item2.id_seni_budaya)">
                <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #eefafd;overflow: hidden;">
                  <ion-img v-if="!item2.foto" src="https://placehold.co/140?text=No Image Available" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                  <ion-img v-else-if="item2.foto" :src="item2.foto" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                  <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;">
                    <h6 style="font-size: 16px;text-align: center;color:#1c47bc"><strong>{{ item2.nama }}</strong></h6>
                  </div>
                </div>
              </ion-col>
            </ion-row>

            
          </ion-col>
        </ion-row>
                
        <ion-row v-if="segment == 'data2'">
          <ion-col>
            <ion-row style="margin-bottom: 15px;" v-for="(item,id) in kebudayaan" :key="id" >
              <ion-col size="6"  v-for="(item2,id) in item" :key="id"  @click="$router.push('/seni_budaya/detail/'+item2.id_seni_budaya)">
                <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #eefafd;overflow: hidden;">
                  <ion-img v-if="item2.foto" :src="item2.foto" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                  <ion-img v-else src="https://placehold.co/140?text=No Image Available" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                  <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;">
                    <h6 style="font-size: 16px;text-align: center;color:#1c47bc"><strong>{{ item2.nama }}</strong></h6>
                  </div>
                </div>
              </ion-col>
            </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {  IonInput,IonSelect,IonSelectOption,loadingController,IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton } from '@ionic/vue';
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
      seni_tari:[],
      kebudayaan:[],
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
    async get_seni_tari(){
      this.seni_tari = []

      let hsl = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/seni-tari.php`,
      })
      console.log(hsl);
      for (let i = 0; i < hsl.data.length; i+=2) {
        let x =[]
        if (hsl.data[i]) {
          x.push(hsl.data[i])
        }
        if (hsl.data[i+1]) {
          x.push(hsl.data[i+1])
        }
        this.seni_tari.push(x)
      }
    },
    async get_kebudayaan(){
      let hsl = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/kebudayaan.php`,
      })
      console.log(hsl);
      for (let i = 0; i < hsl.data.length; i+=2) {
        // this.kebudayaan.push(hsl.data[i])
        let x =[]
        if (hsl.data[i]) {
          x.push(hsl.data[i])
        }
        if (hsl.data[i+1]) {
          x.push(hsl.data[i+1])
        }
        this.kebudayaan.push(x)
      }
    },
  },
  async ionViewDidEnter() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_seni_tari()
    await this.get_kebudayaan()
    await loading.dismiss();

  }});
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
  ion-segment-button{
    color: rgba(0,0,0,0.6)
  }

  .ion-color-success{
    --ion-color-base:#1c47bc !important
  }
  
  .custom-dark-mode{
    color: #222428;
  }
}
</style>
