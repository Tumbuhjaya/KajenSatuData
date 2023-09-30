<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/info_lokasi')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">{{ tipe.toUpperCase() }}</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 20px !important;">
        <ion-row style="margin-bottom: 15px;"   v-for="(item,id) in data" :key="id"  >
          <ion-col size="6" id="open-modal"   @click="setOpen(item2)"   v-for="(item2,id) in item" :key="id"  >
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img v-if="!item2.foto" src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                <ion-img v-else-if="item2.foto" :src="item2.foto" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;">
                <h6 style="font-size: 16px;text-align: center;"><strong>{{ item2.nama }}</strong></h6>
              </div>
            </div>
          </ion-col>
          <!-- <ion-col size="6" >
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img v-if="!item2.foto" src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                  <ion-img v-else-if="item2.foto" :src="item2.foto" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;">
                <h6 style="font-size: 16px;text-align: center;"><strong>SPBU KARANGANYAR</strong></h6>
              </div>
            </div>
          </ion-col> -->
        </ion-row>
        <!-- <ion-row style="margin-bottom: 15px;">
          <ion-col size="6" id="open-modal">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;">
                <h6 style="font-size: 16px;text-align: center;"><strong>SPBU KARANGANYAR</strong></h6>
              </div>
            </div>
          </ion-col>
          <ion-col size="6" >
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;">
                <h6 style="font-size: 16px;text-align: center;"><strong>SPBU KARANGANYAR</strong></h6>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row style="margin-bottom: 15px;">
          <ion-col size="6" id="open-modal">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;">
                <h6 style="font-size: 16px;text-align: center;"><strong>SPBU KARANGANYAR</strong></h6>
              </div>
            </div>
          </ion-col>
          <ion-col size="6" >
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;">
                <h6 style="font-size: 16px;text-align: center;"><strong>SPBU KARANGANYAR</strong></h6>
              </div>
            </div>
          </ion-col>
        </ion-row> -->
      </ion-grid>
      <ion-modal ref="modal" :is-open="isOpen"  trigger="open-modal" >
        <ion-header>
          <ion-toolbar>
            <ion-title>{{ nama }}</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-row>
            <ion-col>
              <div style="width: 100%;padding: 15px;">
                <div style="width: 100%;position: relative;">
                  <ion-img v-if="foto" :src="foto" style="width:100%;height:300px;object-fit: cover;"></ion-img>
                  <ion-img v-else src="https://placehold.co/300" style="width:100%;height:300px;object-fit: cover;"></ion-img>
                  <div style="width: 100%;position: absolute;left:0;right:0;bottom:0;padding:10px;background-color: rgba(255,255,255,0.5);">
                    <h6 style="font-weight: normal;font-size: 12px;">{{ lokasi }}</h6>
                  </div>
                </div>
                

                <h6 style="margin-top: 15px !important;">{{ deskripsi }}</h6>
                
              </div>
            </ion-col>
          </ion-row>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script>
import { loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons, IonModal } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { ip_server } from "@/ip-config";
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
    IonIcon ,
    IonModal
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      data:[],
      nama:"",
      lokasi:'',
      foto:'',
      deskripsi:'',
      tipe: this.$route.params.tipe,
      segment: "data1",
      isOpen:false,
    };
  },
  methods: {
    setOpen(item){
      this.nama=item.nama
      this.foto=item.foto
      this.lokasi=item.lokasi
      this.deskripsi=item.deskripsi
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
    async get_data(){
      let hsl = await axios({
      method: "get",
        url:ip_server+`${this.tipe}.php`,
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
        this.data.push(x)
      }
    },
  },
  async created() {
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    await this.get_data()
    await loading.dismiss();

  }
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
</style>
