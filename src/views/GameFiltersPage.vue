<template>
  <div class="pageGameFilters">
    <GoPrevPageBtn />

    <header class="pageGameFilters__header" v-if="currentCategory.categoryName">
      <h1>Category: {{ currentCategory.categoryName }}</h1>
    </header>

    <p class="errorFetchData" v-if="errorFetchData">{{ errorFetchData }}</p>
    <div class="flexContainer" v-else>
      <ProviderGameListItem
        class="flexContainer__item"
        v-for="item in gameListProviders"
        :key="item.id"
        :id="item.id"
        :imgSrc="require(`@/assets/img/${item.img}`)"
        :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import ProviderGameListItem from "@/components/ProviderGameListItem.vue";
import GoPrevPageBtn from "@/components/GoPrevPageBtn.vue";

export default {
  name: "GameFiltersPage",
  props: {
    categoryId: {
      type: String,
      require: true,
    },
  },
  components: {
    ProviderGameListItem,
    GoPrevPageBtn,
  },
  data() {
    return {
      gameListProviders: [],
      errorFetchData: null,
      currentCategory: {},
    };
  },
  mounted() {
    this.getGamesProvidersByCategory();
    this.getCurrentCategory();
  },
  methods: {
    getGamesProvidersByCategory() {
      fetch(
        `http://localhost:3004/game-providers/?categoryGameId=${this.categoryId}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          this.gameListProviders = data;
        })
        .catch((error) => {
          console.error("There was an error!", error);
          this.errorFetchData = "Something went wrong...";
        });
    },
    getCurrentCategory() {
      fetch(`http://localhost:3004/game-categories/${this.categoryId}`)
        .then((response) => response.json())
        .then((data) => {
          this.currentCategory = data;
        })
        .catch((error) => console.error("There was an error!", error));
    },
  },
};
</script>

<style lang="scss" scoped>
.pageGameFilters {
  &__header {
    font-size: 30px;
    color: #fff;
    padding: 30px 0;
  }

  @media (max-width: 576px) {
    padding-top: 70px;
  }
}

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