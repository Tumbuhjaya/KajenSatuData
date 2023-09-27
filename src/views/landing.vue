<template>
  <ion-page>
    <ion-content :fullscreen="true" id="page-landing">
      <div class="box-content-one">
        <ion-img
        src="/assets/logo-ksd.png"
        alt=""
        style="width:75%"
        ></ion-img>
      </div>
      <div class="box-content-two">
        <div class="box-top">
          <h6 style="text-align: center;font-size: 18px;font-weight: 600;margin-bottom: 15px !important;">Kajen Satu Data merupakan sebuah upaya Pemerintah Kabupaten Pekalongan dalam mendorong pengambilan kebijakan berdasarkan data. Untuk mewujudkan hal tersebut, maka diperlukan pemenuhan atas data pemerintah yang akurat, mutakhir, terpadu, terintegrasi, mudah diakses dan dapat dibagipakaikan kembali oleh pengguna data.</h6>
        </div>
        <div class="box-bottom">
          <ion-button style="width: 100%;"  @click="$router.push('/tabs-dashboard/dashboard')">Lanjutkan</ion-button>
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
    // toLogin() {
    //   this.$router.push("/login");
    // },
  },
});
</script>

<style scoped>
#page-landing .box-content-one{
  width: 100%;
  height: 40vh;
  background-color:#fff ;
  display: flex;
  justify-content: center;
  align-items: center;
}

#page-landing .box-content-two{
  width: 100%;
  height: 60vh;
  background-image: url('/assets/landing-2.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

#page-landing .box-content-two .box-top{
  width: 100%;
  height: 52vh;
  background-color: ;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 0 30px 60px 30px;
}

#page-landing .box-content-two .box-bottom{
  width: 100%;
  height: 8vh;
  background-color:;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
}
</style>
