<template>
    <ion-page>
      <ion-header style="box-shadow: none;">
        <div class="box-header">
          <div class="box-title">
            <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/sid')"></ion-icon>
            <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
            <h6 style="font-size: 20px;font-weight: bold;color: #fff;text-align: center;">Permohonan Duplikat Kelahiran</h6>
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
                <ion-select label="Hari Lahir" v-model="hari" label-placement="stacked">
                    <ion-select-option value="Senin">Senin</ion-select-option>
                    <ion-select-option value="Selasa">Selasa</ion-select-option>
                    <ion-select-option value="Rabu">Rabu</ion-select-option>
                    <ion-select-option value="Kamis">Kamis</ion-select-option>
                    <ion-select-option value="Jumat">Jumat</ion-select-option>
                    <ion-select-option value="Sabtu">Sabtu</ion-select-option>
                </ion-select>
            </ion-col>
            <ion-col size="12">
              <ion-input label="Jam Lahir" v-model="jam" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            <ion-col size="12">
              <ion-input label="Tempat Lahir" v-model="tempat" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            <ion-col size="12">
              <ion-input label="Nama Pelapor" v-model="nama" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            <ion-col size="12">
              <ion-input label="NIK Pelapor" v-model="nik2" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            <ion-col size="12">
                <ion-select label="Jenis Kelamin" v-model="jk" label-placement="stacked">
                    <ion-select-option value="Laki-Laki">Laki-laki</ion-select-option>
                    <ion-select-option value="Perempuan">Perempuan</ion-select-option>
                </ion-select>
            </ion-col>
            <ion-col size="12">
              <ion-input label="Tempat Lahir Pelapor" v-model="tempat_lahir" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            <ion-col size="12">
              <ion-input label="Tanggal Lahir Pelapor" v-model="tgl_lahir" labelPlacement="stacked" placeholder=""  type="date"></ion-input>
            </ion-col>
            <ion-col size="12">
              <ion-input label="Pekerjaan Pelapor" v-model="pekerjaan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            <ion-col size="12">
              <ion-input label="Alamat Pelapor" v-model="alamat" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            
            <ion-col size="12" style="margin-top: 15px;">
              <ion-button color="primary" @click="simpan">Simpan</ion-button>
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
        id: this.$route.params.id,
        nik: '',
        hari: '',
        jam: '',
        tempat: '',
        nama: '',
        nik2: '',
        jk: '',
        tempat_lahir: '',
        tgl_lahir: '',
        pekerjaan: '',
        alamat: '',
      };
    },
    methods: {
      async simpan(){
    let formData = new FormData()
		formData.append('id', this.id)
		formData.append('surat', 19)
		formData.append('nik', this.nik)
		formData.append('isi', {
        hari:this.hari,
        jam:this.jam,
        tempat:this.tempat,
        nama:this.nama,
        nik2:this.nik2,
        jk:this.jk,
        tempat_lahir:this.tempat_lahir,
        tgl_lahir:this.tgl_lahir,
        pekerjaan:this.pekerjaan,
        alamat:this.alamat,
      })
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();  
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
        await loading.dismiss();

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
  
  ion-input{
    border-bottom: 1px solid black;
  }
  
  
  </style>
  