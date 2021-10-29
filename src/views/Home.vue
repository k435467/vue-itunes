<template>
  <div>
    <ItunesSearch />
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
.albums {
  display: flex;
  justify-content: center;
}
</style>
