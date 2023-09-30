<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
  ion-content{
    font-family: 'Poppins', sans-serif;
  }

  ion-tabs{
    font-family: 'Poppins', sans-serif;
  }

  .input-label-placement-stacked.sc-ion-input-md-h {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0 !important;
  }

 
</style>