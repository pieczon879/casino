<template>
  <div class="gameNotificationItemDetails">
    <div class="gameNotificationItemDetails__item">
      <h1 class="gameNotificationItemDetails__title">{{ item.title }}</h1>
      <h2 class="gameNotificationItemDetails__subtitle">{{ item.subtitle }}</h2>
      <p class="gameNotificationItemDetails__description">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "GameNotificationItemDetails",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  async setup(props) {
    const item = ref(null);
    const response = await fetch(
      `http://localhost:3004/game-notifications/${props.id}`
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
.gameNotificationItemDetails {
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &__item {
    max-width: 600px;
    padding-bottom: 50px;
  }

  &__title {
    font-weight: bold;
    font-size: 40px;
    padding-bottom: 10px;
  }

  &__subtitle {
    font-weight: 500;
    font-size: 25px;
  }

  &__description {
    margin-top: 30px;
    line-height: 22px;
  }
}
</style>