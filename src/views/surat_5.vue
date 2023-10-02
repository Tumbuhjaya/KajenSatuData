<template>
    <ion-page>
      <ion-header style="box-shadow: none;">
        <div class="box-header">
          <div class="box-title">
            <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/sid')"></ion-icon>
            <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
            <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;text-align: center;">Keterangan Jual Beli</h6>
        </div>
        </div>
      </ion-header>
      <ion-content :fullscreen="true" id="page-dashboard">
        <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: fixed;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
        <ion-grid style="padding: 60px 20px !important;">
          <ion-row >
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

            <!-- <ion-col size="12">
              <ion-input label="Tanggal Lahir Pembeli" v-model="tanggal" labelPlacement="stacked" placeholder="" type="date"></ion-input>
            </ion-col> -->

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
              <ion-button color="primary" @click="simpan" expand="block">Simpan</ion-button>
            </ion-col>
          </ion-row>
          
        </ion-grid>
      </ion-content>
      
    </ion-page>
  </template>
  
  <script>
  import { IonSelect,IonSelectOption, loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonImg, IonButton, IonInput, IonDatetime, IonDatetimeButton, IonModal  } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { IonIcon } from '@ionic/vue';
  import { arrowBackCircleOutline } from 'ionicons/icons';
  import axios  from "axios";
  
  import { ip_server } from "@/ip-config";
  
  export default defineComponent({
    components: {
      IonSelect,IonSelectOption, 
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
        surat: '',
        id: this.$route.params.id,
        nik: '',
        jenis: '',
        barang: '',
        no_identitas: '',
        pembeli: '',
        tempat_lahir: '',
        tgl_lahir: '',
        jk: '',
        alamat: '',
        pekerjaan: '',
        ket: '',
        ketua: '',
      };
    },
    methods: {
      async simpan(){
    let formData = new FormData()
		formData.append('id', this.id)
		formData.append('surat', 5)
		formData.append('nik', this.nik)
		formData.append('isi', {
        surat:this.surat,
        jenis:this.jenis,
        barang:this.barang,
        no_identitas:this.no_identitas,
        pembeli:this.pembeli,
        tempat_lahir:this.tempat_lahir,
        tgl_lahir:this.tgl_lahir,
        jk:this.jk,
        alamat:this.alamat,
        pekerjaan:this.pekerjaan,
        ket:this.ket,
        ketua:this.ketua,
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
  </style>
  