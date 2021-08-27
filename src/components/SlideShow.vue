<template>
  <swiper
    class="slideShow"
    :speed="1000"
    :slides-per-view="1"
    :space-between="0"
    :autoplay="{ delay: 1000 }"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
  >
    <swiper-slide class="slideShow__item">
      <h5 class="slideShow__title">Bonus 300$</h5>
      <img
        class="slideShow__img"
        src="@/assets/img/casino_slide1.jpg"
        alt="Casino bonus 1"
      />
    </swiper-slide>
    <swiper-slide class="slideShow__item">
      <h5 class="slideShow__title">Bonus 200$</h5>
      <img
        class="slideShow__img"
        src="@/assets/img/casino_slide2.jpg"
        alt="Casino bonus 2"
      />
    </swiper-slide>
    <swiper-slide class="slideShow__item">
      <h5 class="slideShow__title">Bonus 100$</h5>
      <img
        class="slideShow__img"
        src="@/assets/img/casino_slide3.jpg"
        alt="Casino bonus 3"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination]);

export default {
  name: "SlideShow",
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@mixin positionAbsoluteCenter {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.slideShow {
  width: 70%;
  margin: 0;
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  &__item {
    height: 500px;
    position: relative;
    @media (max-width: 768px) {
      height: 350px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__title {
    @include positionAbsoluteCenter;
    z-index: 1;
    color: #fff;
    font-size: 45px;
    margin: 0;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.6);
  }
}
</style>
