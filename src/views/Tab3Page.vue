
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Akun</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Akun</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="text-activatable ripple-parent head">
        <div class="mx-auto" style="display: flex; align-items: center; justify-content: center;">
        <ion-avatar>
          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" >
        </ion-avatar>
        </div>

        <div class="text-center mx-auto">
          <ion-label color="light">
            <h2>Hamba Allah</h2>
            <h2>HambaAllah@gmail.com</h2>
          </ion-label>
        </div>

        <ion-ripple-effect></ion-ripple-effect>
      </div>

    <div class="menu">
      <ion-item lines="full" class="ion-activatable ripple-parent">
        <ion-icon :icon="personCircleOutline" slot="end"></ion-icon>
        <ion-lable class="">
          <h2>Lihat Akun</h2>
          <p>buka halaman akun lebih detail</p>
        </ion-lable>
        <ion-ripple-effect></ion-ripple-effect>
      </ion-item>

      <ion-item @click="logout" lines="full" class="ion-activatable ripple-parent">
        <ion-icon :icon="logOut" slot="end"></ion-icon>
        <ion-lable>
          <h2>Keluar Akun</h2>
          <p>Keluar dari halaman akun yang sekarang</p>
        </ion-lable>
        <ion-ripple-effect></ion-ripple-effect>
      </ion-item>
    </div>


    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { personCircleOutline, logOut } from 'ionicons/icons';
import { token, user } from "../services/user";
import { useRouter } from 'vue-router';

const router = useRouter()

const logout = () => {
  user.value = null
  token.value = ''

  router.replace('/login')
}
</script>

<style>
.head {
  background-color: blue;
  padding: 40px 10px;
}
ion-avatar {
  align-items: center;
  width: 110px;
  height: 110px;
}
</style>
