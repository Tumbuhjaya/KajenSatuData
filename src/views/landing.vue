<template>
  <ion-page>
    <ion-content :fullscreen="true" id="page-landing">
      <div class="box-content-one">
        <ion-img
        src="/assets/landing.png"
        alt=""
        ></ion-img>
      </div>
      <div class="box-content-two">
        <div class="box-top">
          <h6 style="text-align: center;font-size: 18px;font-weight: 600;margin-bottom: 15px !important;">Akses mudah tanpa ribet</h6>
          <h6 style="text-align: center;font-size: 14px;font-weight: 400;">Nikmati kemudahan mengakses situs pemerintah hanya dengan satu gengaman tangan</h6>
        </div>
        <div class="box-bottom">
          <ion-button style="width: 100%;"  @click="$router.push('/login')">Lanjutkan</ion-button>
        </div>
        
        
      </div>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonImg, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonImg,
    IonButton,
  },
  data() {
    return {
      
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
});
</script>

<style scoped>
#page-landing .box-content-one{
  width: 100%;
  height: 50vh;
  background-color: ;
  display: flex;
  justify-content: center;
  align-items: center;
}

#page-landing .box-content-two{
  width: 100%;
  height: 50vh;
  background-image: url('/assets/landing-2.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

#page-landing .box-content-two .box-top{
  width: 100%;
  height: 30vh;
  background-color: ;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 0 60px;
}

#page-landing .box-content-two .box-bottom{
  width: 100%;
  height: 20vh;
  background-color: ;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
}
</style>
