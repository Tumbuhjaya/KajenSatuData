<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #1c47bc;" @click="$router.push('/profil')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #1c47bc;text-align: center;">Ubah Profil</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-image: url('/assets/13263.jpg'); background-repeat: no-repeat;background-size:cover;background-position: left 50px;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-new-two.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 20px!important;">
        <ion-row >
          <ion-col size="12">
            <ion-input label="Nama" v-model="nama" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>
          <ion-col size="12">
              <ion-select label="Desa" v-model="desa"   label-placement="stacked">
                <!-- ambil dari master kategori produk -->
                <ion-select-option v-for="(ds, id) in Desa" :key="id" :value="ds.id">{{ ds.nama }}</ion-select-option>
              </ion-select>
          </ion-col>

          <ion-col size="12">
              <ion-select label="Kategori" v-model="ktg"  label-placement="stacked">
                <!-- ambil dari master kategori produk -->
                <ion-select-option value="UMKM">UMKM</ion-select-option>
                <ion-select-option value="Bukan UMKM">Bukan UMKM</ion-select-option>
              </ion-select>
          </ion-col>
          <ion-col size="12">
            <ion-input label="WA" v-model="wa" type="number" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>
          <ion-col size="12">
            <ion-input label="password" v-model="password" type="password" labelPlacement="stacked" placeholder=""></ion-input>
          </ion-col>
          <ion-col>
            <div
                  class="uploadfoto" style="text-align: center;"
                  >
                    <span class="title" 
                      >Foto Produk</span
                    >
                    <ion-item style="background-color: #fff;">
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
import { IonAvatar,IonItem, IonSelect,IonSelectOption, loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonImg, IonButton, IonInput, IonTextarea, onIonViewDidEnter } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import axios  from "axios";
import { Desa } from "../../data.ts";
import { Preferences } from "@capacitor/preferences";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { ip_server } from "@/ip-config";

export default defineComponent({
  components: {
    IonSelect,IonSelectOption,IonItem,IonAvatar,
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
      Desa:[],
      nama:'',
      desa:0,
      id_desa:'',
      ktg:'',
      src:'',
      foto1: "",
      afoto1: "",
      id_user_android: 0,
      password:'',
      user:{},
      id:0,
      wa:0,
    };
  },
  methods: {
    async takePicture(nama) {
      let vm = this;
      const cameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
        promptLabelHeader: "Pilih Aksi",
        promptLabelPhoto: "Ambil Dari Galeri",
        promptLabelPicture: "Ambil Dari Camera",
        quality: 30,
        saveToGallery: true,
        allowEditing: false,
      });

      vm[nama] = cameraPhoto.dataUrl
      vm["a" + nama] = cameraPhoto.dataUrl
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
    async simpan(){
      let vm = this;

      let form = new FormData()
		form.append('id', this.id_user_android)
		form.append('nama', this.nama)
      form.append('desa', this.desa)
		form.append('ktg', this.ktg)
		form.append('wa', this.wa)
      form.append('password', this.password)
      console.log('id', this.id_user_android,
      'nama', this.nama,
      'desa', this.desa,
      'ktg', this.ktg,
      'wa', this.wa,
      'password', this.password
      );
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    if ( vm.afoto1) {
        let form2 = new FormData()
        form2.append("foto", vm.afoto1);
        form2.append('user', this.id_user_android)
        
        await axios({
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          url: ip_server+'foto.php',
          data: form2,
        }).then(function (hsl) {
          console.log(hsl);
        })
      }
    await axios({
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          url: ip_server+'ubah.php',
          data: form,
        }).then(function (hsl) {
          if (hsl.data) {
            
            alert('sukses')
          }else{
            alert('gagal')
          }
        })
      
        await loading.dismiss();     
    },
    async get_user(){
      const { value } = await Preferences.get({ key: 'login' });
      this.id = value
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/user.php?id=`+this.id,
      })
      this.user = res.data
      this.nama=res.data.nama
      this.ktg=res.data.ktg
      this.id_user_android=res.data.id_user_android
      this.id_desa=res.data.id_desa
      this.wa=res.data.wa
      this.desa=Number(res.data.id_desa)
        this.foto1 = res.data.foto
      console.log(res.data,this.desa);
    },
  },
  async ionViewDidEnter(){
    const { value } = await Preferences.get({ key: 'login' });
    this.id = value 
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    this.Desa = Desa
    await this.get_user()
    await loading.dismiss();
  }
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
      @media (prefers-color-scheme: dark) {
        ion-input{
          color: #222428;
        }

        ion-select{
          color: #222428;
        }

        ion-item{
          --background: transparent;
          --border-color:transparent
        }
      }
</style>
