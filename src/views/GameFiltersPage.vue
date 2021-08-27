<template>
  <div class="pageGameFilters">
    <header>Category Name: Test</header>
    <div class="flexContainer">
      <ProviderGameListItem
        class="flexContainer__item"
        v-for="item in gameListProviders"
        :key="item.id"
        :id="item.id"
        :imgSrc="require(`@/assets/${item.img}`)"
        :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import ProviderGameListItem from "@/components/ProviderGameListItem.vue";

export default {
  name: "GameFiltersPage",
  props: {
    categoryId: {
      type: Number,
      require: true,
    },
  },
  components: {
    ProviderGameListItem,
  },
  data() {
    return {
      gameListProviders: [],
    };
  },
  mounted() {
    this.getGamesProvidersByCategory();
  },
  methods: {
    getGamesProvidersByCategory() {
      fetch(
        `http://localhost:3004/game-providers/?categoryGameId=${this.categoryId}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.gameListProviders = data;
        })
        .catch((error) => console.error("There was an error!", error));
    },
  },
};
</script>

<style lang="scss" scoped>
.flexContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &__item {
    max-width: 300px;
    margin: 25px;
  }
}
</style>