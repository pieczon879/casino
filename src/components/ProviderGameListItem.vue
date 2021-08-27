<template>
  <div class="providerGameListItem">
    <img :src="imgSrc" alt="Game" />
    <div class="providerGameListItem__inner">
      <h5 class="providerGameListItem__titleGame">{{ title }}</h5>
      <router-link
        :to="{ name: 'GameProviderPage', params: { id: id } }"
        class="providerGameListItem__moreInfo"
      >
        Play
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProviderGameListItem",
  props: {
    id: {
      type: Number,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    imgSrc: {
      type: String,
      require: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.providerGameListItem {
  height: 100%;
  position: relative;
  overflow: hidden;

  &:hover {
    .providerGameListItem__inner {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__inner {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transition: 0.4s;
  }
  &__titleGame {
    color: #fff;
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 25px;
    letter-spacing: 1px;
  }
  &__moreInfo {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    position: relative;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.6em 1.75em;
    border-radius: 50px;
    display: inline-block;
    color: #fff;
    background: linear-gradient(to right, #7f00ff, #e100ff);
    text-decoration: none;
  }
}
</style>