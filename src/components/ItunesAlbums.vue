<template>
  <div class="blocks-container">
    <v-pagination
      v-if="showPagination"
      v-model="curPage"
      :length="totalPages"
      color="black"
      class="pb-6"
    ></v-pagination>
    <div v-for="album in curAlbums" :key="album.collectionId">
      <a :href="album.collectionViewUrl" target="_blank">
        <div class="info-container border-block">
          <div class="img-block">
            <v-img :src="album.artworkUrl100" max-height="100" max-width="100"></v-img>
          </div>
          <div>
            <div class="sec-text pb-2 pt-2">{{ album.collectionType }}</div>
            <div class="black-text">{{ album.collectionName }}</div>
            <div class="sec-text">{{ album.artistName }}</div>
            <div class="sec-text pt-4">
              {{
                album.collectionPrice ? album.collectionPrice + " " + album.currency : ""
              }}
            </div>
          </div>
        </div>
      </a>
    </div>
    <v-pagination
      v-if="showPagination"
      v-model="curPage"
      :length="totalPages"
      color="black"
      class="py-6"
    ></v-pagination>
  </div>
</template>

<script>
import { itunesSearch } from "../lib/iTunesAPI";

const pageSize = 10;

export default {
  name: "ItunesAlbums",

  data: () => ({
    searchKeyword: "",
    albums: [],
    curPage: 1,
  }),

  created: function () {
    // Get searchKeyword from route and fetch data
    this.searchKeyword = this.$route.query.searchKeyword;
    this.fetchData();
  },

  computed: {
    showPagination: function () {
      return this.albums.length > pageSize;
    },
    totalPages: function () {
      return Math.ceil(this.albums.length / pageSize);
    },
    curAlbums: function () {
      return this.albums.slice(
        (this.curPage - 1) * pageSize,
        (this.curPage - 1) * pageSize + pageSize
      );
    },
  },

  methods: {
    fetchData: async function () {
      // use keyword to search
      if (this.searchKeyword) {
        this.$store.commit("setLoading", true);
        const tmp = await itunesSearch(this.searchKeyword);
        this.albums = tmp.results;
        this.$store.commit("setLoading", false);
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
  display: flex;
  flex-direction: column;
}

.info-container {
  display: flex;
  padding: 10px;
  max-width: 800px;
  min-width: 200px;
}

.border-block {
  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  border: 1px solid transparent;
}

.border-block:hover {
  border: 1px solid #d9d9d9;
  transform: scale(1.15);
  box-shadow: 3px 3px 3px #b3b3b3;
}

.img-block {
  padding: 10px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  width: 140px;
  height: 120px;
}

.black-text {
  color: black;
}

.sec-text {
  font-size: small;
  color: grey;
}

a,
a:hover,
a:visited,
a:active {
  color: inherit;
  text-decoration: none;
}
</style>
