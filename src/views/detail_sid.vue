<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/sid')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">DETAIL DESA</h6>
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
              
              <div style="width:50%;margin-right: 15px;height: 140px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 16px;"><strong>Nama Desa</strong></h6>
                <h6 style="font-size: 14px;margin-top: 10px !important;font-weight: normal;">Nama Kecamatan</h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;font-weight: normal;">024-761225</h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;font-weight: normal;">namaemail@gmail.com</h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;font-weight: normal;">websitedesa.co.id</h6>
              </div>
              <div style="width: 50%;position: relative;">
                <ion-img src="https://placehold.co/100" style="width:100%;height:140px;object-fit: cover;"></ion-img>

                <div style="width: 100%;padding: 10px;background-color: rgba(0, 0, 0, 0.2);position: absolute;left:0;right:0;bottom:0;">
                  <h6 style="font-size: 10px;text-align: center;"><strong>Nama Kepala Desa</strong></h6>
                  <h6 style="font-size: 10px;margin-top: 5px !important;font-weight: normal;text-align: center;">Kepala Desa</h6>
                </div>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>
        </ion-row>

        <!-- <ion-row style="margin-top: 30px;">
          <ion-col size="12">
            <h6 style="font-size: 16px;text-align: center;"><strong>VISI</strong></h6>
            <h6 style="font-size: 12px;font-weight: normal;margin-top: 15px !important;text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur cupiditate quisquam quis ipsam esse sunt est voluptate fugiat aut.</h6>
          </ion-col>

          <ion-col size="12" style="margin-top: 30px;">
            <h6 style="font-size: 16px;text-align: center;"><strong>MISI</strong></h6>
            <h6 style="font-size: 12px;font-weight: normal;;margin-top: 15px !important;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur cupiditate quisquam quis ipsam esse sunt est voluptate fugiat aut.</h6>
          </ion-col>
        </ion-row> -->

        <ion-row style="margin-top: 15px;">
          <ion-col size="12">
            <ion-accordion-group>
              <ion-accordion value="visimisi" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Visi dan Misi</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                 
                </div>
              </ion-accordion>
              <ion-accordion value="pengumuman" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Pengumuman</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>
              <ion-accordion value="dusun" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Dusun</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>
              <ion-accordion value="perangkatdesa" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Perangkat Desa</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="bumdes" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>BUMDes</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="statistik" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Statistik</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="progbantuan" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Program Bantuan</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="pertanahan" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Pertanahan</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="pembangunan" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Pembangunan</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="keuangan" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Keuangan</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="umkm" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>UMKM</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="layanansurat" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Layanan Surat</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="galerifoto" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Galeri Foto</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="petadesa" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Peta Desa</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="potensidesa" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Potensi Desa</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>

              <ion-accordion value="channeldesa" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Channel Desa</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  
                </div>
              </ion-accordion>
            </ion-accordion-group>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
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
</style>
