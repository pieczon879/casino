<template>
  <p class="backPrevBtn" @click="this.$router.go(-1)">&larr; Back</p>
</template>

<script>
export default {
  name: "GoPrevPageBtn",
};
</script>

<style lang="scss" scoped>
.backPrevBtn {
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
</style>