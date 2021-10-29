<template>
  <div>
    <p>ItunesAlbums</p>
    <div v-for="album in albums" :key="album.collectionId">
      {{ album.collectionName }}
    </div>
  </div>
</template>

<script>
import { itunesSearch } from "../lib/iTunesAPI";

export default {
  name: "ItunesAlbums",

  data: () => ({
    searchKeyword: "",
    albums: [],
  }),

  created: function () {
    // Get searchKeyword from route and fetch data
    this.searchKeyword = this.$route.query.searchKeyword;
    this.fetchData();
  },

  methods: {
    fetchData: async function () {
      // use keyword to search
      if (this.searchKeyword !== "") {
        const tmp = await itunesSearch(this.searchKeyword);
        this.albums = tmp.results;
      }
    },
  },

  watch: {
    $route: function (to, from) {
      // fetch data again when route changed
      this.searchKeyword = to.query.searchKeyword;
      this.fetchData();
    },
  },
};
</script>
