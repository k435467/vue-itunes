<template>
  <div class="my-container">
    <v-text-field
      label="Keyword"
      v-model="searchKeyword"
      class="search-input"
      color="black"
      hint="For example, 周杰倫, 張惠妹, 伍佰"
      @keyup="pressEnter"
    ></v-text-field>
    <v-btn outlined class="ml-2" @click="clickSearch" :loading="loading">Search</v-btn>
  </div>
</template>

<script>
export default {
  name: "ItunesSearch",

  data: () => ({
    searchKeyword: "",
  }),

  computed: {
    loading: function () {
      return this.$store.state.loading;
    },
  },

  methods: {
    clickSearch: function () {
      if (this.$route.query !== { searchKeyword: this.searchKeyword }) {
        this.$router.push({ name: "Home", query: { searchKeyword: this.searchKeyword } });
      }
    },
    pressEnter: function (e) {
      if (e.which === 13) {
        // "enter" pressed
        this.clickSearch();
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
  flex-wrap: wrap;
}

.search-input {
  max-width: 400px;
  min-width: 200px;
}
</style>
