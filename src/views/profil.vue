<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <!-- <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/marketplace')"></ion-icon> -->
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">Profil</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>

      <ion-grid style="padding: 60px 15px !important;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;background-color: #fff;display: flex;">
              <div style="width: 40%;position: relative;background-color: ;display: flex;justify-content: center;">
                <div style="width: 140px;height: 140px;border-radius: 100%;overflow: hidden;">
                  <ion-img v-if="user.foto" src="/assets/user-ksd-2.png" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                  <ion-img v-else src="/assets/user-ksd-2.png" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                </div>
                
              </div>

              <div style="width:60%;margin-left: 15px;height: 140px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 16px;"><strong>{{ user.nama }}</strong></h6>
                <h6 style="font-size: 14px;margin-top: 10px !important;font-weight: normal;">{{ user.desa }}</h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;font-weight: normal;">{{ user.wa }}</h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;font-weight: normal;">{{ user.email }}</h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;font-weight: normal;"></h6>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
            <ion-col size="12">
                <ion-list lines="full">
                <ion-item @click="$router.push('/profil/ubah_profil')">
                    <div style="display: flex;justify-content: center;align-items: center;">
                        <ion-img src="/assets/cogwheel.png" style="width: 30px;"></ion-img>
                        <ion-label style="margin-left:15px ;">Ubah Profil</ion-label>
                    </div>
                </ion-item>
                <ion-item @click="$router.push('/profil/produk_umkm')">
                    <div style="display: flex;justify-content: center;align-items: center;" >
                        <ion-img src="/assets/produk.png" style="width: 30px;"></ion-img>
                        <ion-label style="margin-left:15px ;">Produk UMKM</ion-label>
                    </div>
                </ion-item>
                <ion-item>
                    <div style="display: flex;justify-content: center;align-items: center;">
                        <ion-img src="/assets/logout.png" style="width: 30px;"></ion-img>
                        <ion-label style="margin-left:15px ;" @click="logout">Logout</ion-label>
                    </div>
                </ion-item>
                </ion-list>
            </ion-col>
          <ion-col v-for="(item, id) in data_produk" size="6" @click="$router.push('/marketplace/detail_produk/'+ item.id_produk)" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img v-if="item.foto" :src="item.foto" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <ion-img v-else src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 100px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 14px;text-align: center;"><strong>{{item.nama}}</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;margin-top: 5px !important;">{{item.harga}}</h6>
              </div>
            </div>
          </ion-col>
          <!-- <ion-col size="6" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>Produk A</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>Rp 17.000,-</strong></h6>
              </div>
            </div>
          </ion-col> -->
          <!-- <ion-col size="6" @click="$router.push('/marketplace/detail_produk')" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>Produk A</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>Rp 17.000,-</strong></h6>
              </div>
            </div>
          </ion-col> -->
          <!-- <ion-col size="6" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>Produk A</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>Rp 17.000,-</strong></h6>
              </div>
            </div>
          </ion-col> -->
          <!-- <ion-col size="6" @click="$router.push('/marketplace/detail_produk')" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>Produk A</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>Rp 17.000,-</strong></h6>
              </div>
            </div>
          </ion-col> -->
          <!-- <ion-col size="6" style="margin-bottom: 15px;">
            <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;border-radius: 10px;background-color: #fff;overflow: hidden;">
              <ion-img src="https://placehold.co/140" style="width:100%;height:140px;object-fit: cover;"></ion-img>
              <div style="width:100%;height: 80px;display: flex;justify-content: center;align-items: center;background-color: ;padding: 0 15px;flex-direction: column;">
                <h6 style="font-size: 16px;text-align: center;"><strong>Produk A</strong></h6>
                <h6 style="font-size: 14px;text-align: center;font-weight: normal;"><strong>Rp 17.000,-</strong></h6>
              </div>
            </div>
          </ion-col> -->
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonItem,IonList,IonInput,IonSelect,IonSelectOption,loadingController,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import axios  from "axios";
import { Storage } from "@capacitor/storage";

export default defineComponent({
  components: {
    IonInput,IonSelect,IonSelectOption,IonList,IonItem,
    loadingController,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow, 
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonImg,
    IonButton,
    IonButtons,
    IonIcon,
    
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      segment: "data1",
      user: '',
      id: 0,
      data_produk:[]
    };
  },
  methods: {

    toLogin() {
      this.$router.push("/login");
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
    async get_user(){
      let res = await axios({
      method: "get",
        url:`https://ksd.pekalongankab.go.id/api/user.php?id=`+this.id,
      })
      this.user = res.data
      console.log(res.data);
    },
    async logout(){
      await Storage.remove({ key: 'login' });
      this.$router.push("/tabs-dashboard/dashboard");
    }
  },
  async ionViewDidEnter() {
    const { value } = await Storage.get({ key: 'login' });
    this.id = value 
    const loading = await loadingController.create({
          message: 'Mohon Tunggu...',
        });
    await loading.present();
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
</style>
