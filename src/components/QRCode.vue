<template v-show="displayQRCode">
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
let dynamicBackground;
let dynamicForeground;

let displayQRCode = ref(false);

export default {
  data() {
    if (useLDReady().value) {
      // displayQRCode = useLDReady("qr-code", false);

      // console.log(displayQRCode.value);

      const QRBackgroundColor = "qr-background-color";
      const QRForegroundColor = "qr-foreground-color";
      dynamicBackground = useLDFlag(
        QRBackgroundColor,
        "#FFFFFF" /* default flag value */
      );
      dynamicForeground = useLDFlag(
        QRForegroundColor,
        "#282828" /* default flag value */
      );
    }

    return {
      displayQRCode: displayQRCode.value,
      value: window.location.href,
      size: 300,
      background: dynamicBackground || background,
      foreground: dynamicForeground || foreground,
    };
  },
};
</script>
