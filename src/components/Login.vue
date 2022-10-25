<template>
  <div v-if="loginEnabled">
    <v-text-field label="Username" v-model="username"></v-text-field>
    <v-btn @click="" primary style="margin: 25px">Login</v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  useLDFlag,
  useLDReady,
  useLDClient,
} from "launchdarkly-vue-client-sdk";

let username = "alex";

const loginEnabled = useLDFlag("login", false);

console.log(username);

if (useLDReady().value) {
  if (username) {
    const client = useLDClient();
    client.identify({
      key: username,
    });
  }
}
</script>
