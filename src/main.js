import "vuetify/styles"; // Global CSS has to be imported
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { LDPlugin } from "launchdarkly-vue-client-sdk";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App);

app.use(LDPlugin, {
  clientSideID: import.meta.env.VITE_LAUNCHDARKLY_CLIENT_ID,
});

const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
  },
}); // Replaces new Vuetify()

app.use(vuetify);

app.mount("#app");
