<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs-dashboard/dashboard">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <ion-label>BERANDA</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/marketplace">
          <ion-icon aria-hidden="true" :icon="bagHandleOutline" />
          <ion-label>MARKET</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/profil">
          <ion-icon aria-hidden="true" :icon="personCircleOutline" />
          <ion-label>PROFIL</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, bagHandleOutline, personCircleOutline  } from 'ionicons/icons';
</script>
