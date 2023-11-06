<template>
  <ion-app>
    <ion-router-outlet :animated="false"/>
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
  
  ion-content{
    --background: rgba(255,255,255)
  }

  ion-modal ion-toolbar{
    --background : #1c47bc !important
  }

  .box-header{
    width: 100%;
    height: ;
    background-image: url('/assets/13263.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    background-position: top;
    padding: 15px 20px;
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

  .alert-tappable.sc-ion-alert-md,
.alert-tappable.sc-ion-alert-ios {
    height: initial !important;
    contain: initial !important;
  }
  @media (prefers-color-scheme: dark) {
        ion-input{
          color: #222428 !important;
        }

        ion-select{
          color: #222428 !important;
        }

        /* ion-item{
          --background: transparent;
          --border-color:transparent
        } */
      }
</style>