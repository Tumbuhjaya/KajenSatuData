<template>
    <ion-page>
      <ion-header style="box-shadow: none;">
        <div class="box-header">
          <div class="box-title">
            <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/sid')"></ion-icon>
            <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
            <h6 style="font-size: 20px;font-weight: bold;color: #fff;text-align: center;">Keterangan Kepemilikan Tanah</h6>
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
                  <ion-select label="Jenis Tanah" v-model="jenis" label-placement="stacked">
                    <ion-select-option value="Tanah Sawah">Tanah Sawah</ion-select-option>
                    <ion-select-option value="Tanah Darat">Tanah Darat</ion-select-option>
                    <ion-select-option value="Tanah Bangunan">Tanah Bangunan</ion-select-option>
                </ion-select>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Luas Tanah (m2)" v-model="luas" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-select label="Bukti Kepemilikan" v-model="bukti" label-placement="stacked">
                    <ion-select-option value="Petok Lama">Petok Lama</ion-select-option>
                    <ion-select-option value="Petok Baru">Petok Baru</ion-select-option>
                    <ion-select-option value="Sit Segel">Sit Segel</ion-select-option>
                    <ion-select-option value="Akta">Akta</ion-select-option>
                    <ion-select-option value="Copy">Copy</ion-select-option>
                    <ion-select-option value="Buku Krawangan Desa">Buku Krawangan Desa</ion-select-option>
                    <ion-select-option value="Lainnya">Lainnya</ion-select-option>
                </ion-select>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Nomor Bukti Kepemilikan" v-model="no_bukti" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Atas Nama" v-model="atas_nama" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-select label="Asal Kepemilikan Tanah" v-model="asal" label-placement="stacked">
                    <ion-select-option value="Yayasan">Yayasan</ion-select-option>
                    <ion-select-option value="Warisan">Warisan</ion-select-option>
                    <ion-select-option value="Hibah">Hibah</ion-select-option>
                    <ion-select-option value="Jual Beli">Jual Beli</ion-select-option>
                    <ion-select-option value="Lainnya">Lainnya</ion-select-option>
                </ion-select>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Bukti Pendukung Kepemilikan" v-model="bukti_pendukung" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Batas Sebelah Utara" v-model="utara" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Batas Sebelah Timur" v-model="timur" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Batas Sebelah Selatan" v-model="selatan" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Batas Sebelah Barat" v-model="barat" labelPlacement="stacked" placeholder=""></ion-input>
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
        jenis: '',
        luas: '',
        bukti: '',
        no_bukti: '',
        atas_nama: '',
        asal: '',
        bukti_pendukung: '',
        utara: '',
        timur: '',
        selatan: '',
        barat: '',
      };
    },
    methods: {
      async simpan(){
    let formData = new FormData()
    formData.append('id', this.id)
    formData.append('surat', 42)
    formData.append('nik', this.nik)
    formData.append('isi', {
      jenis : this.jenis,
			luas : this.luas,
			bukti : this.bukti,
			no_bukti : this.no_bukti,
			atas_nama : this.atas_nama,
			asal : this.asal,
			bukti_pendukung : this.bukti_pendukung,
			utara : this.utara,
			timur : this.timur,
			selatan : this.selatan,
			barat : this.barat,})
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
  
  ion-select{
    border-bottom: 1px solid black; 
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
  </style>
  