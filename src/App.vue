<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>


<style lang="scss">
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/global.scss";
@import "@/assets/scss/mixins.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");

body {
  background-color: #002234;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Roboto", sans-serif;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.swiper-button-next,
.swiper-button-prev {
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 10px;
  color: #fff !important;
}

.swiper-pagination-bullet {
  background: #000 !important;
}

.errorFetchData {
  color: red;
  text-align: center;
  padding: 20px 10px;
}
</style>
