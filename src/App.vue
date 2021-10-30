<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title>Search Album</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/k435467/vue-itunes" target="_blank" text>
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import { itunesSearch } from "./lib/iTunesAPI";

export default {
  name: "App",

  data: () => ({
    response: {},
  }),

  // created: async function () {
  //   this.response = await itunesSearch("tylor");
  //   console.log(this.response);
  //   window.tmp = this.response;
  // },

  // mounted: function () {
  //   //
  // },
};
</script>
