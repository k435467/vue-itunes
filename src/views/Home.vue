<template>
  <div>
    <ItunesSearch />
    <ItunesAlbums />
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
