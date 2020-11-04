<template>
  <div id="app">
    <video controls autoplay muted loop class="video">
      <source :src="video" type="video/mp4" />
    </video>
    <div class="ghost"></div>
    <div class="content">
      <flip-countdown deadline="2020-11-07 20:00:00"></flip-countdown>
      <div class="container oneliner">
        <p>For Cayde, we battled together</p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Bb8iUqEOwWc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-12 col-md-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v2dVMmdJfOA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
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
// body {
//   overflow: hidden;
// }

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .oneliner {
    position: relative;
    margin-bottom: 80px;
    padding-left: 8px;
    padding-right: 8px;

    p {
      font-size: 32px;
      line-height: 1.2;
      text-align: center;
      font-family: "Montserrat", sans-serif;
      margin: 0;
      color: #fff;
      text-shadow: 0px 1px 5px #000;

      @include media-breakpoint-up(sm) {
        font-size: 48px;
      }

      @include media-breakpoint-up(md) {
        font-size: 65px;
      }
    }
  }
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

iframe {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;

  @include media-breakpoint-down(sm) {
    height: auto;
  }

  @include media-breakpoint-up(sm) {
    margin-bottom: 0;
  }
}

.ghost {
  position: fixed;
  bottom: -78px;
  right: 0;
  width: 100%;
  height: 177px;
  background-image: url("~@/assets/images/ghost.png");

  @include media-breakpoint-up(sm) {
    width: 388px;
  }
}
</style>

<style lang="scss" scoped>
::v-deep .flip-clock {
  z-index: 9;
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 0;
  padding-right: 0;

  @include media-breakpoint-up(md) {
    padding-top: 80px;
    padding-bottom: 80px;
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
