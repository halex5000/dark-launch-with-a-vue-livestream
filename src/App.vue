<template>
  <v-app>
    <v-main v-if="isLaunchDarklyReady">
      <v-app-bar v-if="isLaunchDarklyReady" :elevation="2">
        <v-app-bar-title>Features Powered by LaunchDarkly</v-app-bar-title>
        <ThemeSwitcher />
      </v-app-bar>
      <TimeLine v-if="milestones" />
      <NavigationDrawer />
      <Login />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import {
  useLDReady,
  useLDClient,
  useLDFlag,
} from "launchdarkly-vue-client-sdk";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import TimeLine from "./components/Time-Line.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import Login from "./components/Login.vue";

let isLaunchDarklyReady = ref(false);
let displayQRCode = ref(false);
let milestones = ref([]);

try {
  isLaunchDarklyReady = useLDReady();
  console.log("is launch darkly ready", isLaunchDarklyReady.value);
} catch (error) {
  console.error("error checking LD Ready", error);
}
</script>
