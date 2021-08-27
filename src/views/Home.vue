<template>
  <div class="homePage">
    <header class="headerHomePage">
      <SlideShow />
      <GameNotificationsList />
    </header>
    <nav>
      <GameFiltersNav />
    </nav>
    <main>
      <ProvidersGameListSlider :categoryId="1" />
      <ProvidersGameListSlider :categoryId="2" />
      <ProvidersGameListSlider :categoryId="3" />
      <ProvidersGameListSlider :categoryId="4" />
    </main>
  </div>
</template>

<script>
import SlideShow from "@/components/SlideShow.vue";
import GameNotificationsList from "@/components/GameNotificationsList.vue";
import ProvidersGameListSlider from "@/components/ProvidersGameListSlider.vue";
import GameFiltersNav from "@/components/GameFiltersNav.vue";

export default {
  name: "Home",
  components: {
    SlideShow,
    GameNotificationsList,
    ProvidersGameListSlider,
    GameFiltersNav,
  },
};
</script>


<style lang="scss">
.headerHomePage {
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

main {
  padding: 15px 0;
}
</style>
