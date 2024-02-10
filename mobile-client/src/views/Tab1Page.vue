<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-item v-for="barcode in barcodes">
            <ion-label position="stacked">{{ barcode.format }}</ion-label>
            <ion-input type="text" :value="barcode.rawValue"></ion-input>
          </ion-item>
        </ion-list>
        <ion-fab slot="fixed" vertical="bottom" horizontal="end">
          <ion-fab-button @click="scan" :disabled="!isSupported">
            <ion-icon name="scan"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>


    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonFab, IonFabButton, IonIcon, IonInput, IonLabel } from '@ionic/vue';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { ref, onMounted } from 'vue';

const isSupported = ref(false);
const barcodes = ref<Barcode[]>([]);

onMounted(() => {
  BarcodeScanner.isSupported().then((result) => {
    isSupported.value = result.supported;
  })
})


async function scan(): Promise<void> {
  const granted = await requestPermissions();
  if (!granted) {
    presentAlert();
    return;
  }
  const { barcodes } = await BarcodeScanner.scan();
  barcodes.push(...barcodes);
}


async function requestPermissions(): Promise<boolean> {
  const { camera } = await BarcodeScanner.requestPermissions();
  return camera === 'granted' || camera === 'limited';
}

async function presentAlert(): Promise<void> {
  // const alert = await this.alertController.create({
  //   header: 'Permission denied',
  //   message: 'Please grant camera permission to use the barcode scanner.',
  //   buttons: ['OK'],
  // });
  // await alert.present();
  window.alert('Please grant camera permission to use the barcode scanner.')
}
</script>
