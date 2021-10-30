<template>
  <div>
    <div class="search-section">
      <ItunesSearch />
    </div>
    <div class="albums">
      <ItunesAlbums />
    </div>
  </div>
</template>

<script>
import ItunesSearch from "../components/ItunesSearch";
import ItunesAlbums from "../components/ItunesAlbums";

export default {
  name: "Home",

  components: {
    ItunesSearch,
    ItunesAlbums,
  },
};
</script>

<style scoped>
.search-section {
  padding: 10px;
}

.albums {
  /* width: 100%; */
  display: flex;
  justify-content: center;
}
</style>
