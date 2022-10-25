<template>
  <qrcode-vue
    :value="value"
    :size="size"
    :foreground="foreground"
    :background="background"
  />
</template>

<script>
import { ref } from "vue";
import QrcodeVue from "qrcode.vue";
import { useLDFlag, useLDReady } from "launchdarkly-vue-client-sdk";

let background = ref();
let foreground = ref();

export default {
  data() {
    if (useLDReady().value) {
      const QRBackgroundColor = "qr-background-color";
      const QRForegroundColor = "qr-foreground-color";
      background = useLDFlag(
        QRBackgroundColor,
        "#FFFFFF" /* default flag value */
      );
      foreground = useLDFlag(
        QRForegroundColor,
        "#282828" /* default flag value */
      );
    }

    return {
      value: window.location.href,
      size: 300,
      background,
      foreground,
    };
  },
};
</script>
