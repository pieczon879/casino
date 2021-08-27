<template>
  <main
    class="page pageGameProvider"
    :style="{
      backgroundImage: `url(${require('@/assets/img/casino_background2.jpg')})`,
    }"
  >
    <GoPrevPageBtn />

    <div v-if="error" class="error">{{ error }}</div>
    <Suspense v-else>
      <template #default>
        <GameNotificationItemDetails :id="id" />
      </template>
      <template #fallback>
        <BaseLoader />
      </template>
    </Suspense>
  </main>
</template>

<script>
import GameNotificationItemDetails from "@/components/GameProviderItemDetails.vue";
import GoPrevPageBtn from "@/components/GoPrevPageBtn.vue";
import BaseLoader from "@/components/BaseLoader.vue";
import { ref, onErrorCaptured } from "vue";

export default {
  name: "GameNotificationPage",
  components: {
    GameNotificationItemDetails,
    BaseLoader,
    GoPrevPageBtn,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup() {
    const error = ref(null);
    onErrorCaptured((e) => {
      error.value = e;
    });
    return { error };
  },
};
</script>

<style lang="scss" scoped>
.pageGameProvider {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 15px;

  @media (max-width: 576px) {
    padding-top: 70px;
  }
}

.backToHomeBtn {
  color: #fff;
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 2;
  font-size: 25px;
  text-decoration: none;
}
</style>