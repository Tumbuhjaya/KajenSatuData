<template>
    <ion-page>
      <ion-header style="box-shadow: none;">
        <div class="box-header">
          <div class="box-title">
            <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/sid')"></ion-icon>
            <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
            <h6 style="font-size: 20px;font-weight: bold;color: #fff;">Keterangan Jual Beli</h6>
        </div>
        </div>
      </ion-header>
      <ion-content :fullscreen="true" id="page-dashboard">
        <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>
        <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
        <ion-grid style="padding: 60px 15px !important;">
          <ion-row style="margin-bottom: 15px;">
            <ion-col size="12">
              <ion-input label="NIK" name="nik" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
  
            <ion-col size="12">
              <ion-input label="Jenis Barang" name="jenis" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Rincian Barang" name="barang" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Nomor Identitas Pembeli" name="no_identitas" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Nama Pembeli" name="pembeli" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Tempat Lahir Pembeli" name="tempat_lahir" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-label style="font-size: 12px;font-weight: 500;">Tanggal Lahir Pembeli</ion-label>
              <ion-datetime-button datetime="datetimes" style="display: flex;justify-content: flex-start;margin-top: 15px;"></ion-datetime-button>
              <ion-modal :keep-contents-mounted="true">
                <ion-datetime id="datetimes" presentation="date" :show-default-buttons="true" name="tgl_lahir"></ion-datetime>
              </ion-modal>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Jenis Kelamin Pembeli" name="jk" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Alamat Pembeli" name="alamat" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Pekerjaan Pembeli" name="pekerjaan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Keterangan" name="ket" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Nama Ketua Adat" name="ketua" labelPlacement="stacked" placeholder=""></ion-input>
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
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonImg, IonButton, IonInput, IonDatetime, IonDatetimeButton, IonModal  } from '@ionic/vue';
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
  
  .sc-ion-input-md-h{
    border-bottom: 1px solid black;
  }
  
  </style>
  