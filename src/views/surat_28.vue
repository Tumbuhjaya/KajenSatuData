<template>
    <ion-page>
      <ion-header style="box-shadow: none;">
        <div class="box-header">
          <div class="box-title">
            <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/sid')"></ion-icon>
            <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
            <h6 style="font-size: 20px;font-weight: bold;color: #fff;text-align: center;">Domisili Usaha Non-Warga</h6>
        </div>
        </div>
      </ion-header>
      <ion-content :fullscreen="true" id="page-dashboard">
        <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>
        <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
        <ion-grid style="padding: 60px 15px !important;">
          <ion-row style="margin-bottom: 15px;">
            <ion-col size="12">
              <ion-input label="Nama" v-model="nama" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="NIK" v-model="nik" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="No. KK" v-model="no_kk" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Tempat Lahir" v-model="tempat_lahir" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Tanggal Lahir" v-model="tgl_lahir" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-select label="Jenis Kelamin" v-model="jk" label-placement="stacked">
                    <ion-select-option value="Laki-Laki">Laki-laki</ion-select-option>
                    <ion-select-option value="Perempuan">Perempuan</ion-select-option>
                </ion-select>
            </ion-col>

            <ion-col size="12">
              <ion-select label="Negara" v-model="negara" label-placement="stacked">
                    <ion-select-option value="WNI">WNI</ion-select-option>
                    <ion-select-option value="WNA">WNA</ion-select-option>
                    <ion-select-option value="Dua Kewarganegaraan">Dua Kewarganegaraan</ion-select-option>
                </ion-select>
            </ion-col>

            <ion-col size="12">
              <ion-select label="Agama" v-model="agama" label-placement="stacked">
                    <ion-select-option value="Islam">Islam</ion-select-option>
                    <ion-select-option value="Kristen">Kristen</ion-select-option>
                    <ion-select-option value="Katholik">Katholik</ion-select-option>
                    <ion-select-option value="Hindu">Hindu</ion-select-option>
                    <ion-select-option value="Budha">Budha</ion-select-option>
                    <ion-select-option value="Khonghucu">Khonghucu</ion-select-option>
                    <ion-select-option value="Lainnya">Lainnya</ion-select-option>
                </ion-select>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Pekerjaan" v-model="pekerjaan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Tempat Tinggal" v-model="alamat" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Nama Usaha" v-model="nama_usaha" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Jenis Usaha" v-model="jenis_usaha" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Nomor Akta" v-model="akta" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Tahun Akta" v-model="tahun" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Notaris" v-model="notaris" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Jenis Bangunan" v-model="bangunan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Peruntukan bangunan" v-model="peruntukan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Status Bangunan" v-model="status" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-input label="Alamat Usaha" v-model="alamat_usaha" labelPlacement="stacked" placeholder=""></ion-input>
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
        keperluan: '',
        id: this.$route.params.id,
        nik: '',
      };
    },
    methods: {
      async simpan(){
    let formData = new FormData()
		formData.append('id', this.id)
		formData.append('surat', 10)
		formData.append('nik', this.nik)
		formData.append('isi', {'keperluan': this.keperluan})
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
  