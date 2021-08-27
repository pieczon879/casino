<template>
  <div class="providersGameList">
    <h5 class="providersGameList__title">
      {{ currentCategory.categoryName }}
    </h5>
    <swiper
      class="providersGameList__slider"
      :speed="1000"
      :slides-per-view="6"
      :space-between="15"
      :autoplay="{ delay: 1000 }"
      navigation
      :scrollbar="{ draggable: true }"
      :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 6,
        },
      }"
    >
      <swiper-slide
        class="providersGameList__slide"
        v-for="item in gameListProviders"
        :key="item.id"
      >
        <ProviderGameListItem
          :id="item.id"
          :imgSrc="require(`@/assets/${item.img}`)"
          :title="item.title"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import ProviderGameListItem from "@/components/ProviderGameListItem.vue";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation]);

export default {
  name: "ProvidersGameList",
  components: {
    Swiper,
    SwiperSlide,
    ProviderGameListItem,
  },
  data() {
    return {
      currentCategory: {},
      gameListProviders: [],
    };
  },
  props: {
    categoryId: {
      type: Number,
      require: true,
    },
  },
  mounted() {
    this.getCurrentCategory();
    this.getGamesProvidersByCategory();
  },
  methods: {
    getCurrentCategory() {
      fetch(`http://localhost:3004/game-categories/${this.categoryId}`)
        .then((response) => response.json())
        .then((data) => {
          this.currentCategory = data;
        })
        .catch((error) => console.error("There was an error!", error));
    },
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
.providersGameList {
  padding: 20px 15px;
  &__title {
    text-align: left;
    font-size: 30px;
    color: #fff;
    padding: 5px 0 20px 0;
  }
}
</style>