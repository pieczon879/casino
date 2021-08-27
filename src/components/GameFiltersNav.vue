<template>
  <div class="gameFiltersNav">
    <router-link
      class="gameFiltersNav__link"
      :to="{
        name: 'GameFiltersPage',
        params: { categoryId: 1, categoryName: 'New games' },
      }"
      >New games</router-link
    >
    <router-link
      class="gameFiltersNav__link"
      :to="{
        name: 'GameFiltersPage',
        params: { categoryId: 2, categoryName: 'Top games' },
      }"
      >Top games</router-link
    >
    <router-link
      class="gameFiltersNav__link"
      :to="{
        name: 'GameFiltersPage',
        params: { categoryId: 3, categoryName: 'Slots' },
      }"
      >Slots</router-link
    >
    <router-link
      class="gameFiltersNav__link"
      :to="{
        name: 'GameFiltersPage',
        params: { categoryId: 4, categoryName: 'Jackpot' },
      }"
      >Jackpot</router-link
    >
  </div>
</template>

<script>
export default {
  name: "GameFiltersNav",
};
</script>

<style lang="scss" scoped>
.gameFiltersNav {
  padding: 45px 0 0 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &__link {
    color: #fff;
    font-size: 28px;
    text-decoration: none;
    padding: 30px;
    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      padding: 10px;
    }
  }
}
</style>