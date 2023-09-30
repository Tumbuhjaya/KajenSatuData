<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/sid')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">Biodata Penduduk</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>
      <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 15px !important;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col size="12">
            <ion-input label="NIK" v-model="nik" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>
          <ion-col size="12">
            <ion-input label="Nama Kepala Keluarga" v-model="kepala" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>
          <ion-col size="12">
            <ion-input label="Alamat Keluarga" v-model="alamat" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>
          <ion-col size="12">
            <ion-input label="Nama Ibu" v-model="ibu" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>

          <ion-col size="12">
            <ion-input label="NIK Ibu" v-model="nik_ibu" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>

          <ion-col size="12">
            <ion-input label="Nama Ayah" v-model="ayah" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>

          <ion-col size="12">
            <ion-input label="NIK Ayah" v-model="nik_ayah" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;">
            <ion-button color="primary"  @click="simpan">Simpan</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonImg, IonButton, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import axios  from "axios";

import { ip_server } from "@/ip-config";

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
    IonLabel,
    IonImg,
    IonButton,
    IonIcon,
    IonInput
    
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      nik: '',
      kepala: '',
      alamat: '',
      ibu: '',
      nik_ibu: '',
      ayah: '',
      nik_ayah: '',
      id: this.$route.params.id,
    };
  },
  methods: {
    async simpan(){
    let formData = new FormData()
		formData.append('id', this.id)
		formData.append('surat', 3)
		formData.append('nik', this.nik)
		formData.append('isi', {'kepala': this.kepala,'alamat': this.alamat,'ibu': this.ibu,'nik_ibu': this.nik_ibu,'ayah': this.ayah,'nik_ayah': this.nik_ayah})
      await axios({
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          url: ip_server+'surat-save.php',
          data: formData,
        }).then(function (hsl) {
          console.log(hsl);
          console.log(hsl);
          if (hsl.data==1) {
            alert('sukses')
          }else{
            alert('gagal')
          }
        })
    }
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

.sc-ion-input-md-h{
  border-bottom: 1px solid black;
}
</style>
