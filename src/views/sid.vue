<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/tabs-dashboard/dashboard')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;">Sistem Informasi Desa</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 20px !important;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col>
            <ion-accordion-group>
              <ion-accordion :value="item.kec" style="margin-bottom: 15px;border-radius: 10px;"    v-for="(item,id) in kecamatan" :key="id" >
                <ion-item slot="header" color="light">
                  <ion-label class="custom-dark-mode">{{ item.kec }}</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8;background-color: #fff;">
                  <ion-list lines="full" >
                    <ion-item @click="$router.push('/sid/detail_by_kec/'+desa.id)"   v-for="(desa,id) in item.desa" :key="id"> 
                      <ion-label class="custom-dark-mode">{{ desa.nama }}</ion-label>
                    </ion-item>
                    <!-- <ion-item>
                      <ion-label>Desa A2</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Desa A3</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Desa A4</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Desa A5</ion-label>
                    </ion-item> -->
                  </ion-list>
                </div>
              </ion-accordion>
              <!-- <ion-accordion value="KecB" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="light">
                  <ion-label>Kecamatan B</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <ion-list lines="full">
                    <ion-item>
                      <ion-label>Desa B1</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Desa B2</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Desa B3</ion-label>
                    </ion-item>
                  </ion-list>
                </div>
              </ion-accordion>
              <ion-accordion value="KecC" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="light">
                  <ion-label>Kecamatan C</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <ion-list lines="full">
                    <ion-item>
                      <ion-label>Desa C1</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Desa C2</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Desa C3</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Desa C4</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Desa C5</ion-label>
                    </ion-item>
                  </ion-list>
                </div>
              </ion-accordion> -->
            </ion-accordion-group>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {  IonInput,IonSelect,IonSelectOption,IonItem,loadingController,IonList, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons, IonAccordion, IonAccordionGroup } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { Desa } from "../../data.ts";
import { ip_server } from "@/ip-config";
import axios  from "axios";
import moment from "moment";
moment.locale("id");
export default defineComponent({
  components: {
    IonInput,IonSelect,IonSelectOption,
    IonItem,
    loadingController,
    IonList,
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
    IonIcon,
    IonAccordion,
      IonAccordionGroup,
    
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      kecamatan:[],
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
  },
  async ionViewDidEnter(){
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
        for (let i = 0; i < Desa.length; i++) {
      let count = 0
      let idx =0
      for (let k = 0; k < this.kecamatan.length; k++) {
        if (this.kecamatan[k].kec == Desa[i].kec) {
          count+=1
          idx = k
        }
      }   
      if (count == 0) {
        this.kecamatan.push({kec:Desa[i].kec,desa:[{nama:Desa[i].nama,id:Desa[i].id}]})
      }else{
        this.kecamatan[idx].desa.push({nama:Desa[i].nama,id:Desa[i].id})
      }
    }
    await loading.dismiss();
  }
});
</script>

<style scoped>

.ion-color-light{
  --ion-color-base : #eefafd !important;
}

@media (prefers-color-scheme: dark) {
  .custom-dark-mode{
    color: #222428;
  }
/* 
  .md body{
    --ion-background-color:transparent
  }
  .list-md{
    --ion-background-color:red;
  } */
  /* .md body{
    --ion-background-color:transparent
  } */

  .list-md{
    background:transparent;
  }
  ion-item{
          --background: transparent;
          --border-color:rgba(0, 0, 0, 0.13)
        }

}
</style>
