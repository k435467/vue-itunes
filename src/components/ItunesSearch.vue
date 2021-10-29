<template>
  <div class="my-container">
    <v-text-field
      label="Keyword"
      v-model="searchKeyword"
      class="search-input"
    ></v-text-field>
    <v-btn outlined class="ml-2" @click="clickSearch">Search</v-btn>
  </div>
</template>

<script>
export default {
  name: "ItunesSearch",

  data: () => ({
    searchKeyword: "",
  }),

  methods: {
    clickSearch: function () {
      if (this.$route.query !== { searchKeyword: this.searchKeyword }) {
        this.$router.push({ name: "Home", query: { searchKeyword: this.searchKeyword } });
      }
    },
  },
};
</script>

<style scoped>
.my-container {
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.search-input {
  max-width: 400px;
}
</style>
