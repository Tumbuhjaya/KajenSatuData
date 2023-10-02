<template>
  <ion-page>
    <ion-content :fullscreen="true" id="page-login">
      <div class="box-content-one">
        <ion-img
        src="/assets/login.png"
        alt=""
        ></ion-img>
      </div>
      <div class="box-content-two">
        <ion-row>
            <ion-col>
                <ion-segment
                  color="success"
                  :swipe-gesture="true"
                  v-model="segment"
                  @ionChange="segmentChanged($event)"
                >
                  <ion-segment-button class="button" value="data1">
                    <ion-label class="label" style="color: #1c47bc;font-size: 18px;font-weight: 600;">MASUK</ion-label>
                  </ion-segment-button>
                  <ion-segment-button class="button" value="data2">
                    <ion-label class="label" style="color: #1c47bc;font-size: 18px;font-weight: 600;">DAFTAR</ion-label>
                  </ion-segment-button>
                </ion-segment>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col>
              <ion-row class="list" v-if="segment == 'data1'">
                  <ion-col style="margin-top: 15px;">
                    <h6 style="font-size: 24px;font-weight: 700;color:#1c47bc">Log In</h6>
                    <h6 style="font-size: 14px;font-weight: 500;color:#1c47bc;margin-top: 10px !important;">Akses akun Anda dengan masuk di bawah ini.</h6>

                    <ion-input class="custom" placeholder="Email" v-model="email" style="margin: 30px 0 15px 0;"></ion-input>

                    <ion-input  class="custom" placeholder="Password" type="password" v-model="password" ></ion-input>

                    <div style="width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 15px;padding: 0 60px;">
                      <ion-button style="text-transform: capitalize;border-radius: 20px;width: 100%;" @click="login" color="primary" size="large">Masuk</ion-button>
                    </div>
                    
                  </ion-col>
                </ion-row>
                <ion-row class="list" v-if="segment == 'data2'">
                  <ion-col style="margin-top: 15px;">
                    <div style="width:100%;height:45vh;overflow-y: scroll;">
                      <h6 style="font-size: 24px;font-weight: 700;color:#1c47bc">Daftar</h6>
                      <h6 style="font-size: 14px;font-weight: 500;color:#1c47bc;margin-top: 10px !important;margin-bottom: 10px !important;">Jika Anda belum memiliki akun, silahkan daftarkan diri anda  di bawah ini.</h6>

                      <ion-input class="custom" placeholder="Nama" v-model="nama" style="margin: 15px 0;"></ion-input>
                      <!-- <ion-input  class="custom" placeholder="Desa"  v-model="id_desa" style="margin: 15px 0;"></ion-input> -->
                      <ion-item  class="custom">
                        <ion-select
                        cancel-text="Tutup"
                        placeholder="Desa" 
                        ok-text="Pilih"
                        interface="action-sheet"
                        class="form"
                        v-model="id_desa"
                        >
                        <ion-select-option value="">-- Pilih --</ion-select-option>
                          <ion-select-option v-for="(ds, i) in Desa" :key="i" :value="ds.id">{{ ds.nama }}</ion-select-option>
                        </ion-select>
                      </ion-item>
                      <ion-item  class="custom" style="margin-top: 15px;">
                        <ion-select
                        cancel-text="Tutup"
                        placeholder="Kategori" 
                        ok-text="Pilih"
                        interface="action-sheet"
                        class="form"
                        v-model="ktg"
                        >
                        <ion-select-option value="">-- Pilih --</ion-select-option>
                          <ion-select-option value="UMKM">UMKM</ion-select-option>
                          <ion-select-option value="BUKAN UMKM">BUKAN UMKM</ion-select-option>
                        </ion-select>
                      </ion-item>
                      <!-- <ion-input  class="custom" placeholder="Kategori"  v-model="kategori" style="margin: 15px 0;"></ion-input> -->
                      <ion-input  class="custom" placeholder="No. WhatsApp"  v-model="wa"  style="margin: 15px 0;"></ion-input>
                      <ion-input  class="custom" placeholder="Email" v-model="email"  style="margin: 15px 0;"></ion-input>
                      <ion-input  class="custom" placeholder="Password" type="password" v-model="password"  style="margin: 15px 0;"></ion-input>

                      <div style="width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 15px;padding: 0 60px;">
                        <ion-button style="text-transform: capitalize;border-radius: 20px;width: 100%;" @click="daftar" color="primary" size="large">Daftar</ion-button>
                      </div>
                    </div>
                  </ion-col>
                </ion-row>
            </ion-col>
        </ion-row>
      </div>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { loadingController,IonItem,IonSelect,IonSelectOption, IonPage, IonContent, IonImg, IonRow, IonCol, IonLabel, IonInput, IonButton, IonSegment, IonSegmentButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Desa } from "../../data.ts";
import { ip_server } from "@/ip-config";
import axios  from "axios";
import moment from "moment";
moment.locale("id");
import { Storage } from "@capacitor/storage";

export default defineComponent({
  components: {
    loadingController,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonPage,
    IonContent,
    IonImg,
    IonRow,
    IonCol,
    IonLabel,
    IonInput,
    IonButton,
    IonSegment,
    IonSegmentButton
  },
  data() {
    return {
      Desa:Desa,
      id_user_android: "",
      id_desa: 0,
      nama: "",
      wa: "",
      email: "",
      password: "",
      ktg: null,
      foto: null,
      segment: "data1",

    };
  },
  methods: {
    toLogin() {
      this.$router.push("/tabs-dashboard/dashboard");
    },
    segmentChanged(e) {
      this.segment = e.detail.value;
      this.class();
    },
    class() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    async daftar(){
      const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    let form = new FormData()
		form.append('desa',this.id_desa)
		form.append('nama', this.nama)
		form.append('wa', this.wa)
		form.append('email', this.email)
		form.append('password', this.password)
		form.append('ktg', this.ktg)
    await axios({
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          url: ip_server+'buat.php',
          data: form,
        })
      // await axios
      //   .post(ip_server + "buat.php", {
      //     desa:this.id_desa,
      //     nama:this.nama,
      //     wa:this.wa,
      //     email:this.email,
      //     password:this.password,
      //     ktg: this.ktg,
      //   })
        .then(function (hsl) {
          if (hsl.data!=0) {
            alert('sukses')
          }else{
            alert('gagal')
          }
        })
        await loading.dismiss();

      this.$router.push('/tabs-dashboard/dashboard')
    },
    async login(){
      const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
    let formData = new FormData()
		formData.append('email', this.email)
		formData.append('password', this.password)
      await axios({
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          url: ip_server+'login.php',
          data: formData,
        }).then(async function (hsl) {
          console.log(hsl);
          if (hsl.data) {
            await Storage.set({
              key: 'login',
              value: hsl.data,
            });
            alert('sukses' ,hsl)
          }else{
            alert('gagal')
          }
        })
        await loading.dismiss();

      this.$router.push('/tabs-dashboard/dashboard')
    },
    async cari(){
      
      console.log(this.email);
    }
  },
  ionViewDidEnter(){
    console.log(Desa);
  }
});
</script>

<style scoped>
#page-login .box-content-one{
  width: 100%;
  height: 40vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

#page-login .box-content-two{
  width: 100%;
  height: 60vh;
  background-image: url('/assets/13263.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: top;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
  padding: 15px 30px;
}
.ion-color-success {
  --ion-color-base:#1c47bc !important;
}

:host{
  --indicator-height:4px;
}

ion-input.custom {
  --background: #fff;
  --color: #000;
  --placeholder-color: #4F4F4F;
  --placeholder-opacity: 0.8;
  --padding-bottom: 15px;
  --padding-end: 15px;
  --padding-start: 15px;
  --padding-top: 15px;
  --border-radius:10px;
}

ion-input{
    border-bottom: 1px solid transparent !important;
  }

  ion-select{
    border-bottom: 1px solid transparent !important; 
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
</style>
