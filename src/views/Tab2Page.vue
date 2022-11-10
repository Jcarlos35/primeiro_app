<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mapa</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mapa</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
  <ion-item>
    <ion-select placeholder="Selecione uma das opção">
      <ion-select-option value="apples">Maçãs</ion-select-option>
      <ion-select-option value="oranges">Laranjas</ion-select-option>
      <ion-select-option value="bananas">Bananas</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
      
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { meuMapa } from '@/composable/maps';

export default defineComponent({
  name: 'Tab2Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  ionViewDidEnter() {
    console.log('Entrou na páginas');
  },
  ionViewDidLeave() {
    const {pegarCordenadas} = meuMapa();
    pegarCordenadas();
    console.log('Saiu entrar na página');
  },
  ionViewWillEnter() {
    console.log('Vai entrar na página');
  },
  ionViewWillLeave() {
    console.log('Vai sair da página');
  },
});
</script>
