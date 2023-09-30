<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/sid')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;text-align: center;">Pernyataan Penguasaan Fisik Bidang Tanah (SPORADIK)</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>
      <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 15px !important;">
        <ion-row style="margin-bottom: 15px;">
            <ion-col size="12">
                <ion-input label="NIK Pemohon" v-model="nik" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            <ion-col size="12" style="margin-top: 15px;">
                <h5>ATAS BIDANG TANAH YANG TERLETAK DI</h5>
            </ion-col>
            <ion-col size="12">
                <ion-input label="Jalan" v-model="jalan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="RT / RW" v-model="rt_rw" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Desa / Kelurahan" v-model="desa" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Kecamatan" v-model="kec" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Kabupaten / Kota" v-model="kab" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="NIB" v-model="nib" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Luas Tanah (m2)" v-model="luas" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Status Tanah" v-model="status" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Dipergunakan" v-model="dipergunakan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12" style="margin-top: 15px;">
                <h5>BATAS - BATAS</h5>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Sebelah Utara" v-model="utara" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Sebelah Timur" v-model="timur" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Sebelah Selatan" v-model="selatan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Sebelah Barat" v-model="barat" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12" style="margin-top: 15px;">
                <h5 >TANAH DIPEROLEH</h5>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Dari" v-model="dari" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Sejak Tahun" v-model="tahun" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Dengan Jalan" v-model="dengan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12" style="margin-top: 15px;">
                <h5 >DATA SAKSI 1</h5>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Nama" v-model="nama" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Umur" v-model="umur" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Pekerjaan" v-model="pekerjaan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            
            <ion-col size="12">
                <ion-input label="Alamat" v-model="alamat" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12" style="margin-top: 15px;">
                <h5 >DATA SAKSI 2</h5>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Nama" v-model="nama2" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Umur" v-model="umur2" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Pekerjaan" v-model="pekerjaan2" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            
            <ion-col size="12">
                <ion-input label="Alamat" v-model="alamat2" labelPlacement="stacked" placeholder=""></ion-input>
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
      jalan: '',
      rt_rw: '',
      desa: '',
      kec: '',
      kab: '',
      nib: '',
      luas: '',
      status: '',
      dipergunakan: '',
      utara: '',
      timur: '',
      selatan: '',
      barat: '',
      dari: '',
      tahun: '',
      dengan: '',
      nama: '',
      umur: '',
      pekerjaan: '',
      alamat: '',
      nama2: '',
      umur2: '',
      pekerjaan2: '',
      alamat2: '',
    };
  },
  methods: {
    async simpan(){
  let formData = new FormData()
  formData.append('id', this.id)
  formData.append('surat', 32)
  formData.append('nik', this.nik)
  formData.append('isi', {
      jalan : this.jalan,
			rt_rw : this.rt_rw,
			desa : this.desa,
			kec : this.kec,
			kab : this.kab,
			nib : this.nib,
			luas : this.luas,
			status : this.status,
			dipergunakan : this.dipergunakan,
			utara : this.utara,
			timur : this.timur,
			selatan : this.selatan,
			barat : this.barat,
			dari : this.dari,
			tahun : this.tahun,
			dengan : this.dengan,
			nama : this.nama,
			umur : this.umur,
			pekerjaan : this.pekerjaan,
			alamat : this.alamat,
			nama2 : this.nama2,
			umur2 : this.umur2,
			pekerjaan2 : this.pekerjaan2,
			alamat2 : this.alamat2,})
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
