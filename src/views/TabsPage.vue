<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <ion-label>Beranda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="transaction" href="/tabs/transaction">
          <ion-icon aria-hidden="true" :icon="cartOutline" />
          <ion-label>Transaksi</ion-label>
        </ion-tab-button>

         <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="bagOutline" />
          <ion-label>Barang</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="personCircleOutline" />
          <ion-label>Akun</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { homeOutline, bagOutline, personCircleOutline, cartOutline } from 'ionicons/icons';
</script>
