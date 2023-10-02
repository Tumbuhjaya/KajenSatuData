<template>
    <ion-page>
      <ion-header style="box-shadow: none;">
        <div class="box-header">
          <div class="box-title">
            <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/sid')"></ion-icon>
            <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
            <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;text-align: center;">Perintah Perjalanan Dinas</h6>
        </div>
        </div>
      </ion-header>
      <ion-content :fullscreen="true" id="page-dashboard">
        <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

        <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
        <ion-grid style="padding: 60px 20px !important;">
          <ion-row>
              <ion-col size="12">
                  <ion-input label="NIK" v-model="nik" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Pangkat dan Golongan" v-model="pangkat" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Jabatan / Instansi" v-model="jabatan" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Tingkat Biaya Perjalanan" v-model="biaya" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Maksud Perjalanan Dinas" v-model="maksud" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Tempat Tujuan" v-model="tujuan" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Alat Angkut yang Digunakan" v-model="angkut" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Pengikut 1" v-model="pengikut_1" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Pengikut 2" v-model="pengikut_2" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Pengikut 3" v-model="pengikut_3" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Pengikut 4" v-model="pengikut_4" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Pengikut 5" v-model="pengikut_5" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Pengikut 6" v-model="pengikut_6" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Keterangan Lain" v-model="ket" labelPlacement="stacked" placeholder=""></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Tanggal Berangkat" v-model="berangkat" labelPlacement="stacked" placeholder="" type="date"></ion-input>
              </ion-col>

              <ion-col size="12">
                  <ion-input label="Tanggal Kembali" v-model="kembali2" labelPlacement="stacked" placeholder="" type="date"></ion-input>
              </ion-col>



              <ion-col size="12" style="margin-top: 15px;">
                  <ion-button color="primary" @click="simpan" expand="block">Simpan</ion-button>
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
        keperluan: '',
        id: this.$route.params.id,
        nik: '',
        pangkat: '',
        jabatan: '',
        biaya: '',
        maksud: '',
        tujuan: '',
        angkut: '',
        pengikut_1: '',
        pengikut_2: '',
        pengikut_3: '',
        pengikut_4: '',
        pengikut_5: '',
        pengikut_6: '',
        ket: '',
        berangkat: '',
        kembali2: '',
      };
    },
    methods: {
      async simpan(){
    let formData = new FormData()
    formData.append('id', this.id)
    formData.append('surat', 39)
    formData.append('nik', this.nik)
    formData.append('isi', {
      pangkat : this.pangkat,
			jabatan : this.jabatan,
			biaya : this.biaya,
			maksud : this.maksud,
			tujuan : this.tujuan,
			angkut : this.angkut,
			pengikut_1 : this.pengikut_1,
			pengikut_2 : this.pengikut_2,
			pengikut_3 : this.pengikut_3,
			pengikut_4 : this.pengikut_4,
			pengikut_5 : this.pengikut_5,
			pengikut_6 : this.pengikut_6,
			ket : this.ket,
			berangkat : this.berangkat,
			kembali : this.kembali2,})
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
  </style>
  