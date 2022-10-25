<template>
  <v-select label="Theme Picker"></v-select>
</template>

<script>
import { useTheme } from "vuetify";
import { ref } from "vue";
import { useLDFlag, useLDReady } from "launchdarkly-vue-client-sdk";

export default {
  setup() {
    const theme = useTheme();

    if (useLDReady().value) {
    }

    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
};
</script>
