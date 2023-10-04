<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/profil')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;text-align: center;">Tambah Produk</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 20px !important;">
        <ion-row>
          <ion-col size="12">
            <ion-input label="Nama Produk" v-model="nama" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>
          <ion-col size="12">
            <ion-input label="Harga" type="number" v-model="harga" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>
          <ion-col size="12">
              <ion-select label="Kategori" v-model="ktg" label-placement="stacked">
                <!-- ambil dari master kategori produk -->
                <ion-select-option v-for="(item, i) in kategori" :key="i" :value="item.id_produk_ktg" >{{ item.nama }}</ion-select-option>

              </ion-select>
          </ion-col>

          <ion-col size="12">
            <ion-textarea label="Deskripsi Produk" v-model="deskripsi" labelPlacement="stacked" placeholder="Enter text"></ion-textarea>
          </ion-col>

          <ion-col>
            <div
                  class="uploadfoto" style="text-align: center;"
                  >
                    <span class="title" 
                      >Foto Produk</span
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
            <ion-button color="primary" @click="simpan" expand="block">Simpan</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonItem,IonAvatar,IonSelect , IonSelectOption, loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonImg, IonButton, IonInput, IonTextarea } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import axios  from "axios";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Preferences } from "@capacitor/preferences";

import { ip_server } from "@/ip-config";

export default defineComponent({
  components: {
    IonSelect , IonSelectOption,IonAvatar,IonItem,
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
      foto1: "",
      afoto1: "",
      harga:0,
      nama:'',
      ktg:0,
      deskripsi:'',
      kategori:[]
    };
  },
  methods: {
    async simpan(){
      let vm = this
      const { value } = await Preferences.get({ key: 'login' });
    let formData = new FormData()
    formData.append("foto", vm.afoto1);
		formData.append('harga',vm.harga)
		formData.append('nama', vm.nama)
		formData.append('user',value)
    formData.append('kategori',vm.ktg)
    formData.append('deskripsi', vm.deskripsi ) 
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
  
      await axios({
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          url: ip_server+'produk-save.php',
          data: formData,
        }).then(function (hsl) {
          console.log(hsl);
          if (hsl) {
            alert('sukses')
          }else{
            alert('gagal')
          }

        })
        await loading.dismiss();
        this.$router.push('/profil/produk_umkm')

    },
     blobToBase64(blob){
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise(resolve => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    },
    async takePicture(nama) {
      let vm = this;
      const cameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos,
        promptLabelHeader: "Pilih Aksi",
        promptLabelPhoto: "Ambil Dari Galeri",
        promptLabelPicture: "Ambil Dari Camera",
        quality: 30,
        saveToGallery: true,
        allowEditing: false,
      });
      let x = await fetch(`${cameraPhoto.webPath}`).then((e) => {
        return e.blob();
      });

      vm[nama] = cameraPhoto.webPath;
        this.blobToBase64(x).then((hsl)=>{
        console.log(hsl);
        vm["a" + nama] = hsl
      })
    },
    async get_ktg(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/produk-ktg.php`,
      })
      this.kategori = res.data
      console.log(res.data);
    },
  },
  async ionViewDidEnter(){
    await this.get_ktg()
  }
  });
</script>

<style scoped>


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
