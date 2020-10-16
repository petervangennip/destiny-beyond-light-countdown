<template>
  <div id="app">
    <flip-countdown deadline="2020-10-10 00:00:00"></flip-countdown>
    <video controls autoplay muted loop class="video">
      <source :src="video" type="video/mp4" />
    </video>
    <div class="ghost"></div>
  </div>
</template>

<script>
import FlipCountdown from "vue2-flip-countdown";

export default {
  name: "App",
  components: {
    FlipCountdown
  },
  data() {
    return {
      video: require("@/assets/video/destiny.mp4"),
      image: require("@/assets/images/ghost.png")
    };
  },
  methods: {
    log() {
      console.log(
        "%cHello Guardian, you won't find anything here",
        "color: #ff0000; font-size: x-large"
      );
    }
  },
  mounted() {
    this.log();
  }
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.video {
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}

.ghost {
  position: absolute;
  bottom: -78px;
  right: 0;
  width: 388px;
  height: 177px;
  background-image: url("~@/assets/images/ghost.png");
}
</style>

<style lang="scss" scoped>
::v-deep .flip-clock {
  z-index: 9;
  position: relative;

  @include media-breakpoint-up(sm) {
    padding-top: 550px;
  }

  &__slot {
    text-transform: uppercase;
    font-weight: 900;
    margin-top: 10px;
    color: #fff;
    text-shadow: 0px 2px 5px #000;
  }

  .flip-card {
    font-size: 4rem;

    @include media-breakpoint-up(sm) {
      font-size: 6rem;
    }

    &__top,
    &__bottom,
    &__back-bottom,
    &__bottom-4digits,
    &__top-4digits,
    &__back-bottom-4digits,
    &__back::before,
    &__back::after {
      color: #fff;
    }
  }
}
</style>
