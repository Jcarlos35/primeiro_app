<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lista de tarefas</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">


        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
        
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col size="12" :key="photo" v-for="photo in photos">
            <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
          <ion-fab-button>
            <ion-icon :icon="camera" @click="takePhoto()"></ion-icon>
          </ion-fab-button>
        </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {actionSheetController, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, userPhoto } from '@/composable/usePhotoGallery';


export default defineComponent({
  name: 'Tab1Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const showActionSheet = async (photos: userPhoto) => {
      const actionSheet = await actionSheetController.create({
        header: 'Photos',
        buttons: [{
          text: 'Delete',
          role:'destrutive',
          icon: trash,
          handler: () => {
            deletePhoto(photos)
          }
        },
      ]
      });
      await actionSheet.present();
    }
    const { takePhoto, photos, deletePhoto } = usePhotoGallery();
    return {
      showActionSheet,
      takePhoto,
      deletePhoto,
      photos,
      camera, trash, close
    }
  }
});
</script>
