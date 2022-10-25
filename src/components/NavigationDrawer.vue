<template>
  <v-navigation-drawer
    permanent
    width="325"
    style="margin-left: 20px; margin-top: 25px"
  >
    <qrcode-vue
      :value="value"
      :size="size"
      :foreground="foreground"
      :background="background"
      v-if="displayQRCode"
    />
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import QrcodeVue from "qrcode.vue";
import { useLDFlag, useLDReady } from "launchdarkly-vue-client-sdk";

let background = ref();
let foreground = ref();

let displayQRCode = ref(false);
let size = ref(300);

if (useLDReady().value) {
  const QRBackgroundColor = "qr-background-color";
  const QRForegroundColor = "qr-foreground-color";
  background = useLDFlag(QRBackgroundColor, "#FFFFFF" /* default flag value */);
  foreground = useLDFlag(QRForegroundColor, "#282828" /* default flag value */);
  displayQRCode = useLDFlag("qr-code");
  size = useLDFlag("qr-code-size");
}
</script>
