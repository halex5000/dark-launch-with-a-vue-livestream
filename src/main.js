import "vuetify/styles"; // Global CSS has to be imported
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { LDPlugin } from "launchdarkly-vue-client-sdk";
import { VueDraggableNext } from "vue-draggable-next";
import QrcodeVue from "qrcode.vue";

const app = createApp(App);

console.log(import.meta.env.VITE_LAUNCHDARKLY_CLIENT_ID);

if (import.meta.env.VITE_LAUNCHDARKLY_CLIENT_ID) {
  // we're telling the LaunchDarkly SDK the client ID with which it should retrieve flags
  const clientSideID = import.meta.env.VITE_LAUNCHDARKLY_CLIENT_ID;

  // this didn't have to be a named variable, but I wanted to be extra clear about what I was doing here
  // here are the docs about the plugin options:
  // https://launchdarkly.github.io/vue-client-sdk/index.html#LDPluginOptions
  const launchDarklyPluginOptions = {
    clientSideID,
    //user, // our user is anonymoust (by default) but you can read more about user here
  };

  app.use(LDPlugin, launchDarklyPluginOptions);
}

const vuetify = createVuetify({
  blueprint: md3,
  components: {
    draggable: VueDraggableNext,
    QrcodeVue,
  },
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
