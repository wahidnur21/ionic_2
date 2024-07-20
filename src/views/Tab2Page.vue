
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Barang</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Barang</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>

        <ion-item @click="add(item)" v-for="item in stuff" lines="full" class="ion-activatable ripple-parent">
          <ion-label>
            <h2>{{ item?.name }}</h2>
            <p>{{ item?.price }}</p>
          </ion-label>
          <ion-icon aria-hidden="true" :icon="addCircle" slot="end"></ion-icon>
          <ion-ripple-effect></ion-ripple-effect>
        </ion-item>

      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { axios } from '@/services/axios';
import { onMounted, ref } from "vue";
import { stuff } from "@/services/stuff";
import { addCircle } from "ionicons/icons";
import { cart } from "@/services/cart";


onMounted(() => {
  axios.get('stuffs')
  .then(result => {
    const isError = result.data.isError
    const value = result.data.value

    stuff.value = value
  }).catch(error => {

  }).finally(() => {

  })

})

const add = (item:any) => {
  
  if (item) {
    cart.value.stuffs?.push({
      id: item.id,
      name: item.name,
      price: item.price,
      count: 1,
      unit: item.unit,
    })
  }
}

</script>
