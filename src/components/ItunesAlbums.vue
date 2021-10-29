<template>
  <div class="blocks-container">
    <div v-for="album in albums" :key="album.collectionId" class="info-container">
      <v-img :src="album.artworkUrl100" max-height="60" max-width="60"></v-img>
      <div>
        <div>{{ album.collectionType }}</div>
        <div>{{ album.collectionName }}</div>
        <div>{{ album.artistName }}</div>
        <div>{{ album.collectionPrice + album.currency }}</div>
      </div>
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
      if (this.searchKeyword) {
        const tmp = await itunesSearch(this.searchKeyword);
        this.albums = tmp.results;
        console.log(this.albums);
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

<style scoped>
.blocks-container {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-container {
  display: flex;
  width: 400px;
}
</style>
