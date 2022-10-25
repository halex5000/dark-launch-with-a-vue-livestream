<!-- eslint-disable vue/no-ref-as-operand -->
/* eslint-disable vue/no-ref-as-operand */ /* eslint-disable
vue/no-ref-as-operand */
<template v-if="availableThemes">
  <div v-for="theme in availableThemes">
    <v-btn class="ma-2" color="indigo" icon="mdi-cloud-upload"></v-btn>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
import { ref } from "vue";
import { useLDFlag, useLDReady } from "launchdarkly-vue-client-sdk";

const theme = useTheme();

let themes = ref("".split(","));

if (useLDReady().value) {
  themes = useLDFlag("available-themes", "light");
  console.log(themes.value);
  console.log(themes.value.split(","));
}

let availableThemes = ref(themes.value.split(","));
</script>
