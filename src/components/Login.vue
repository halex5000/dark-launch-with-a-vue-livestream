<template>
  <v-text-field label="Username"></v-text-field>
  <v-btn primary style="margin: 25px">Login</v-btn>
</template>

<script>
import { ref } from "vue";
import {
  useLDFlag,
  useLDReady,
  useLDClient,
} from "launchdarkly-vue-client-sdk";

export default {
  data() {
    if (useLDReady().value) {
    }

    return {};
  },
};
</script>
