<template>
  <div class="gameProviderItemDetails">
    <div class="gameProviderItemDetails__item">
      <h1 class="gameProviderItemDetails__title">{{ item.title }}</h1>
      <img
        class="gameProviderItemDetails__img"
        :src="require(`@/assets/${item.img}`)"
        alt="Game"
      />
      <div class="gameProviderItemDetails__iframe">
        <h2>{{ item.iframeProvider }}</h2>
        <img
          class="gameProviderItemDetails__playIcon"
          src="@/assets/play_icon.png"
          alt="Play icon"
        />
      </div>
      <p class="gameProviderItemDetails__description">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "GameProviderItemDetails",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  async setup(props) {
    const item = ref(null);
    const response = await fetch(
      `http://localhost:3004/game-providers/${props.id}`
    );
    const parsedResponse = await response.json();
    item.value = parsedResponse;
    return {
      item,
    };
  },
};
</script>

<style lang="scss" scoped>
.gameProviderItemDetails {
  min-height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &__item {
    max-width: 1400px;
    padding: 15px 15px 50px 15px;
  }

  &__title {
    font-weight: bold;
    font-size: 40px;
    padding-bottom: 10px;
  }

  &__description {
    margin-top: 40px;
    line-height: 22px;
  }

  &__img {
    max-width: 300px;
    margin-top: 20px;
  }

  &__iframe {
    font-size: 30px;
    margin-top: 40px;
    width: 70%;
    height: 500px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 30px auto;
    padding: 30px;
  }

  &__playIcon {
    max-width: 60px;
    margin-top: 210px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>