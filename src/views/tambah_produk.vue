<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/profil')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;text-align: center;">Tambah Produk</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>
      <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 15px !important;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col size="12">
            <ion-input label="Nama Produk" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>
          <ion-col size="12">
            <ion-input label="Harga" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>
          <ion-col size="12">
              <ion-select label="Kategori" name="" label-placement="stacked">
                <!-- ambil dari master kategori produk -->
                <ion-select-option value="Laki-Laki">Laki-laki</ion-select-option>
                <ion-select-option value="Perempuan">Perempuan</ion-select-option>
              </ion-select>
          </ion-col>

          <ion-col size="12">
            <ion-textarea label="Deskripsi Produk" labelPlacement="stacked" placeholder="Enter text"></ion-textarea>
          </ion-col>

          <ion-col>
            <div
                  class="uploadfoto" style="text-align: center;"
                  >
                    <span class="title" 
                      >Foto Tampak Depan Rumah</span
                    >
                    <ion-item>
                      <div class="inner" style="margin-top: 15px;">
                        <img
                          src="/assets/alt-photo.svg"
                          alt=""
                          v-if="!foto1"
                          @click="takePicture('foto1')"
                        />
                        <ion-avatar style="--border-radius: 7px" v-else>
                          <img @click="takePicture('foto1')" :src="foto1" alt="" />
                        </ion-avatar>
                      </div>
                      <!-- <ion-button @click="takePicture()"
                        >pilih Gambar Pendukung</ion-button
                      > -->
                    </ion-item>
                  </div>
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
import { loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonImg, IonButton, IonInput, IonTextarea } from '@ionic/vue';
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
    IonTextarea
    
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      nik:'',
      keperluan:'',
      id: this.$route.params.id,
    };
  },
  methods: {
    async simpan(){
    let formData = new FormData()
		formData.append('id', this.id)
		formData.append('surat', 1)
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

  ion-textarea{
    border-bottom: 1px solid black; 
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
  .uploadfoto {
        margin-top: 8%;
        color: #212121 !important;
        font-family: "Montserrat", sans-serif;
        text-transform: capitalize;
        font-size: 15px;
        .title {
          margin-left: 4%;
        }
        .inner {
          margin-top: 2%;
          display: flex;
          width: 100%;
          justify-content: center;
        }
      }

</style>
