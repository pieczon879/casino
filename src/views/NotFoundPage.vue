<template>
  <div class="notFoundPage">
    <router-link class="notFoundPage__backToHome" to="/">
      &larr; Back to homepage
    </router-link>
    <h1 class="notFoundPage__header">OOPS!</h1>
    <p>This page does not exist.</p>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style lang="scss" scoped>
.notFoundPage {
  text-align: center;
  color: #fff;

  &__header {
    padding: 30px 0;
    font-size: 22px;
  }

  &__backToHome {
    color: #fff;
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 2;
    font-size: 25px;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>