<template>
  <v-app>
    <v-main v-if="isLaunchDarklyReady">
      <v-app-bar v-if="isLaunchDarklyReady" :elevation="2">
        <v-app-bar-title>Features Powered by LaunchDarkly</v-app-bar-title>
        <ThemeSwitcher />
        <v-select></v-select>
      </v-app-bar>
      <v-navigation-drawer
        permanent
        width="325"
        style="margin-left: 20px; margin-top: 25px"
      >
        <QRCode />
      </v-navigation-drawer>
      <TimeLine />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useLDReady, useLDClient } from "launchdarkly-vue-client-sdk";
import QRCode from "./components/QRCode.vue";
import TimeLine from "./components/Time-Line.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import Login from "./components/Login.vue";

let isLaunchDarklyReady = ref(false);
try {
  isLaunchDarklyReady = useLDReady();
  console.log("is launch darkly ready", isLaunchDarklyReady);

  const client = useLDClient();

  client.identify({
    key: "anonymous",
    custom: {
      // Role:
    },
  });
} catch (error) {
  console.error("error checking LD Ready", error);
}
</script>
