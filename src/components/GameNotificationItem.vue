<template>
  <div class="gameNotificationItem">
    <div class="gameNotificationItem__iconWrap">
      <img
        src="@/assets/game_notification_icon.jpg"
        alt="Game notification icon"
      />
    </div>
    <div class="gameNotificationItem__textWrap">
      <h4 class="gameNotificationItem__title" v-if="title">
        {{ title }}
      </h4>
      <h5 class="gameNotificationItem__subtitle" v-if="subtitle">
        {{ subtitle }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameNotificationItem",
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.gameNotificationItem {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 5px;

  &__iconWrap {
    padding-right: 10px;
  }
  &__title {
    color: #00a0ac;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 5px;
  }
  &__subtitle {
    color: lightgray;
  }
}
</style>