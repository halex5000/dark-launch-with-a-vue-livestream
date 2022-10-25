import "vuetify/styles"; // Global CSS has to be imported
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import { md3 } from "vuetify/blueprints";
import { loadFonts } from "./plugins/webfontloader";
import { LDPlugin } from "launchdarkly-vue-client-sdk";
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
    QrcodeVue,
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          cyan: "#3DD6F5",
        },
      },
      dark: {
        dark: true,
        colors: {},
      },
    },
  },
}); // Replaces new Vuetify()

loadFonts();

app.use(vuetify);

app.mount("#app");
