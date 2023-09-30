<template>
    <ion-page>
      <ion-header style="box-shadow: none;">
        <div class="box-header">
          <div class="box-title">
            <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/sid')"></ion-icon>
            <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
            <h6 style="font-size: 20px;font-weight: bold;color: #fff;text-align: center;">Keterangan Jual Beli</h6>
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
              <ion-input label="Jenis Barang" v-model="jenis" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Rincian Barang" v-model="barang" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Nomor Identitas Pembeli" v-model="no_identitas" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Nama Pembeli" v-model="pembeli" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Tempat Lahir Pembeli" v-model="tempat_lahir" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Tanggal Lahir Pembeli" v-model="tanggal" labelPlacement="stacked" placeholder="" type="date"></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-select label="Jenis Kelamin Pembeli" name="jk" label-placement="stacked">
                    <ion-select-option value="Laki-Laki">Laki-laki</ion-select-option>
                    <ion-select-option value="Perempuan">Perempuan</ion-select-option>
                </ion-select>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Alamat Pembeli" v-model="alamat" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Pekerjaan Pembeli" v-model="pekerjaan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Keterangan" v-model="ket" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Nama Ketua Adat" v-model="ketua" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
  
            <ion-col size="12" style="margin-top: 15px;">
              <ion-button color="primary">Simpan</ion-button>
            </ion-col>
          </ion-row>
          
        </ion-grid>
      </ion-content>
      
    </ion-page>
  </template>
  
  <script>
  import { loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonImg, IonButton, IonInput, IonDatetime, IonDatetimeButton, IonModal  } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { IonIcon } from '@ionic/vue';
  import { arrowBackCircleOutline } from 'ionicons/icons';
  import axios  from "axios";
  
  import { ip_server } from "@/ip-config";
  
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
      IonLabel,
      IonImg,
      IonButton,
      IonIcon,
      IonInput,
      IonDatetime,
      IonDatetimeButton,
      IonModal 
      
    },
    setup() {
        return { arrowBackCircleOutline };
      },
    data() {
      return {
  
      };
    },
    methods: {
  
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
  
  ion-input{
    border-bottom: 1px solid black;
  }
  ion-select{
    border-bottom: 1px solid black; 
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
  
  </style>
  