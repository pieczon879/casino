<template>
  <div class="notFoundPage">
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
}
</style>