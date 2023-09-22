<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/tabs-dashboard/dashboard')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">BERITA</h6>
        </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img src="../../../public/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 0  !important;">
        <ion-row style="margin-top: 5px;">
          <ion-col style="padding-top: 0;padding: 0 15px;">
            <ion-segment
              color="success"
              :swipe-gesture="true"
              v-model="segment"
              @ionChange="segmentChanged($event)"
            >
              <ion-segment-button class="button" value="data1">
                <ion-label class="label" style="font-weight: 600;">UMUM</ion-label>
              </ion-segment-button>
              <ion-segment-button class="button" value="data2">
                <ion-label class="label" style="font-weight: 600;">PENGUMUMAN</ion-label>
              </ion-segment-button>
              <ion-segment-button class="button" value="data3">
                <ion-label class="label" style="font-weight: 600;">INFO LELANG</ion-label>
              </ion-segment-button>
              </ion-segment>
          </ion-col>
        </ion-row>

        <ion-row class="list" v-if="segment == 'data1'">
          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <ion-img src="https://placehold.co/600x400" style="width:100%;"></ion-img>
            <h6 style="font-size: 14px;margin-top: 10px !important;"><strong>BUPATI LAUNCHING PASDAR UMKM DI DESA LOLONG DAN LEGOK KALONG</strong></h6>
            <h6 style="font-size: 12px;margin-top: 5px !important;">00/00/0000 00:00</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <ion-img src="https://placehold.co/600x400" style="width:100%;"></ion-img>
            <h6 style="font-size: 14px;margin-top: 10px !important;"><strong>BUPATI LAUNCHING PASDAR UMKM DI DESA LOLONG DAN LEGOK KALONG</strong></h6>
            <h6 style="font-size: 12px;margin-top: 5px !important;">00/00/0000 00:00</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <ion-img src="https://placehold.co/600x400" style="width:100%;"></ion-img>
            <h6 style="font-size: 14px;margin-top: 10px !important;"><strong>BUPATI LAUNCHING PASDAR UMKM DI DESA LOLONG DAN LEGOK KALONG</strong></h6>
            <h6 style="font-size: 12px;margin-top: 5px !important;">00/00/0000 00:00</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>
        </ion-row>
                
        <ion-row class="list" v-if="segment == 'data2'">
          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <div style="width: 100%;display: flex;">
              <div style="width: 25%;">
                <ion-img src="https://placehold.co/90" style="width:100%;height: 90px;object-fit: cover;"></ion-img>
              </div>

              <div style="width: 75%;padding-left: 15px;">
                <h6 style="font-size: 14px;"><strong>PENGUMUMAN TENDER DGN PASCA KUALIFIKASI PENGADAAN ASPAL ..... </strong></h6>
                <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
              </div>
            </div>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <div style="width: 100%;display: flex;">
              <div style="width: 25%;">
                <ion-img src="https://placehold.co/90" style="width:100%;height: 90px;object-fit: cover;"></ion-img>
              </div>

              <div style="width: 75%;padding-left: 15px;">
                <h6 style="font-size: 14px;"><strong>PENGUMUMAN TENDER DGN PASCA KUALIFIKASI PENGADAAN ASPAL ..... </strong></h6>
                <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
              </div>
            </div>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <div style="width: 100%;display: flex;">
              <div style="width: 25%;">
                <ion-img src="https://placehold.co/90" style="width:100%;height: 90px;object-fit: cover;"></ion-img>
              </div>

              <div style="width: 75%;padding-left: 15px;">
                <h6 style="font-size: 14px;"><strong>PENGUMUMAN TENDER DGN PASCA KUALIFIKASI PENGADAAN ASPAL ..... </strong></h6>
                <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
              </div>
            </div>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <div style="width: 100%;display: flex;">
              <div style="width: 25%;">
                <ion-img src="https://placehold.co/90" style="width:100%;height: 90px;object-fit: cover;"></ion-img>
              </div>

              <div style="width: 75%;padding-left: 15px;">
                <h6 style="font-size: 14px;"><strong>PENGUMUMAN TENDER DGN PASCA KUALIFIKASI PENGADAAN ASPAL ..... </strong></h6>
                <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
              </div>
            </div>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <div style="width: 100%;display: flex;">
              <div style="width: 25%;">
                <ion-img src="https://placehold.co/90" style="width:100%;height: 90px;object-fit: cover;"></ion-img>
              </div>

              <div style="width: 75%;padding-left: 15px;">
                <h6 style="font-size: 14px;"><strong>PENGUMUMAN TENDER DGN PASCA KUALIFIKASI PENGADAAN ASPAL ..... </strong></h6>
                <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
              </div>
            </div>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <div style="width: 100%;display: flex;">
              <div style="width: 25%;">
                <ion-img src="https://placehold.co/90" style="width:100%;height: 90px;object-fit: cover;"></ion-img>
              </div>

              <div style="width: 75%;padding-left: 15px;">
                <h6 style="font-size: 14px;"><strong>PENGUMUMAN TENDER DGN PASCA KUALIFIKASI PENGADAAN ASPAL ..... </strong></h6>
                <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
              </div>
            </div>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>
        </ion-row>

        <ion-row class="list" v-if="segment == 'data3'">
          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <h6 style="font-size: 14px;"><strong>HASIL  SELEKSI  PRA  SANGGAH   PENGADAAN PEGAWAI PEMERINTAH DENGAN PERJANJIAN KERJA UNTUK JABATAN FUNGSIONAL GURU...</strong></h6>
            <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <h6 style="font-size: 14px;"><strong>HASIL  SELEKSI  PRA  SANGGAH   PENGADAAN PEGAWAI PEMERINTAH DENGAN PERJANJIAN KERJA UNTUK JABATAN FUNGSIONAL GURU...</strong></h6>
            <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <h6 style="font-size: 14px;"><strong>HASIL  SELEKSI  PRA  SANGGAH   PENGADAAN PEGAWAI PEMERINTAH DENGAN PERJANJIAN KERJA UNTUK JABATAN FUNGSIONAL GURU...</strong></h6>
            <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <h6 style="font-size: 14px;"><strong>HASIL  SELEKSI  PRA  SANGGAH   PENGADAAN PEGAWAI PEMERINTAH DENGAN PERJANJIAN KERJA UNTUK JABATAN FUNGSIONAL GURU...</strong></h6>
            <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <h6 style="font-size: 14px;"><strong>HASIL  SELEKSI  PRA  SANGGAH   PENGADAAN PEGAWAI PEMERINTAH DENGAN PERJANJIAN KERJA UNTUK JABATAN FUNGSIONAL GURU...</strong></h6>
            <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <h6 style="font-size: 14px;"><strong>HASIL  SELEKSI  PRA  SANGGAH   PENGADAAN PEGAWAI PEMERINTAH DENGAN PERJANJIAN KERJA UNTUK JABATAN FUNGSIONAL GURU...</strong></h6>
            <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>

          <ion-col size="12" style="margin-top: 15px;margin-bottom:15px;padding: 0 20px;">
            <h6 style="font-size: 14px;"><strong>HASIL  SELEKSI  PRA  SANGGAH   PENGADAAN PEGAWAI PEMERINTAH DENGAN PERJANJIAN KERJA UNTUK JABATAN FUNGSIONAL GURU...</strong></h6>
            <h6 style="font-size: 12px;margin-top: 10px !important;">00/00/0000 00:00</h6>
          </ion-col>

          <ion-col size="12">
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>
        </ion-row>
      </ion-grid>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonGrid,
    IonRow, 
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonImg,
    IonButton,
    IonIcon 
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      segment: "data1",
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

ion-segment-button{
  background-color: #fff;
  border-radius: 30px;
  margin: 0 2.5px 2.5px 2.5px;
  box-shadow: 0px 2px 4px 0px #00000040;
}

ion-segment-button label{
  color: #000;
}

ion-segment-button::part(indicator-background) {
  background: transparent;
}


</style>
