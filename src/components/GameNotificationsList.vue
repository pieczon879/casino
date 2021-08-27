<template>
  <section class="gameNotifications">
    <h5 class="gameNotifications__title">Game notifications</h5>
    <div v-if="!isLoading">
      <router-link
        class="gameNotifications__link"
        v-for="item in gameNotificationsList"
        :key="item.id"
        :to="{ name: 'GameNotificationPage', params: { id: item.id } }"
      >
        <GameNotificationItem :title="item.title" :subtitle="item.subtitle" />
      </router-link>
    </div>
    <div v-else>
      <BaseLoader />
    </div>
  </section>
</template>

<script>
import GameNotificationItem from "@/components/GameNotificationItem.vue";
import BaseLoader from "@/components/BaseLoader.vue";

export default {
  name: "GameNotificationsList",
  components: {
    GameNotificationItem,
    BaseLoader,
  },
  data() {
    return {
      gameNotificationsList: [],
      isLoading: true,
    };
  },
  mounted() {
    this.getGameNotifications();
  },
  methods: {
    getGameNotifications() {
      fetch("http://localhost:3004/game-notifications?_start=0&_end=6")
        .then((response) => response.json())
        .then((data) => {
          this.gameNotificationsList = data;
          this.isLoading = false;
        })
        .catch((error) => console.error("There was an error!", error));
    },
  },
};
</script>

<style lang="scss" scoped>
.gameNotifications {
  padding: 20px 0;
  width: 30%;
  background-color: #13364a;
  position: relative;

  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  &__title {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 25px;
    color: #fff;
    padding-bottom: 20px;
    text-align: center;
  }

  &__link {
    text-decoration: none;
    color: #00a0ac;
    &:hover {
      text-decoration: underline;
    }
    & + & {
      margin-top: 10px;
    }
  }
}
</style>