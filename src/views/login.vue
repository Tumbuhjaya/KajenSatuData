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
                    <ion-label class="label" style="color: #fff;font-size: 18px;font-weight: 600;">MASUK</ion-label>
                  </ion-segment-button>
                  <ion-segment-button class="button" value="data2">
                    <ion-label class="label" style="color: #fff;font-size: 18px;font-weight: 600;">DAFTAR</ion-label>
                  </ion-segment-button>
                </ion-segment>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col>
              <ion-row class="list" v-if="segment == 'data1'">
                  <ion-col style="margin-top: 15px;">
                    <h6 style="font-size: 24px;font-weight: 700;color:#fff">Log In</h6>
                    <h6 style="font-size: 14px;font-weight: 500;color:#fff;margin-top: 10px !important;">Akses akun Anda dengan masuk di bawah ini.</h6>

                    <ion-input class="custom" placeholder="Email" style="margin: 30px 0 15px 0;"></ion-input>

                    <ion-input  class="custom" placeholder="Password" ></ion-input>

                    <div style="width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 15px;padding: 0 60px;">
                      <ion-button style="text-transform: capitalize;border-radius: 20px;width: 100%;" @click="$router.push('/tabs-dashboard/dashboard')" color="light" size="large">Masuk</ion-button>
                    </div>
                    
                  </ion-col>
                </ion-row>
                <ion-row class="list" v-if="segment == 'data2'">
                  <ion-col style="margin-top: 15px;">
                    <div style="width:100%;height:45vh;overflow-y: scroll;">
                      <h6 style="font-size: 24px;font-weight: 700;color:#fff">Daftar</h6>
                      <h6 style="font-size: 14px;font-weight: 500;color:#fff;margin-top: 10px !important;margin-bottom: 10px !important;">Jika Anda belum memiliki akun, silahkan daftarkan diri anda  di bawah ini.</h6>

                      <ion-input class="custom" placeholder="Nama" style="margin: 15px 0;"></ion-input>
                      <ion-input  class="custom" placeholder="Desa" style="margin: 15px 0;"></ion-input>
                      <ion-input  class="custom" placeholder="Kategori" style="margin: 15px 0;"></ion-input>
                      <ion-input  class="custom" placeholder="No. WhatsApp"  style="margin: 15px 0;"></ion-input>
                      <ion-input  class="custom" placeholder="Email" style="margin: 15px 0;"></ion-input>
                      <ion-input  class="custom" placeholder="Password" style="margin: 15px 0;"></ion-input>

                      <div style="width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 15px;padding: 0 60px;">
                        <ion-button style="text-transform: capitalize;border-radius: 20px;width: 100%;" @click="$router.push('/tabs-dashboard/dashboard')" color="light" size="large">Daftar</ion-button>
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
import { IonPage, IonContent, IonImg, IonRow, IonCol, IonLabel, IonInput, IonButton, IonSegment, IonSegmentButton } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
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
  },
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
  background-color: #4c87f2;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
  padding: 15px 30px;
}
.ion-color-success {
  --ion-color-base:#fff !important;
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
</style>
