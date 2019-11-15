<template>
  <div class="home-page">
    <div class="cols">
      <div class="col is-light flex-center flex-start-mobile is-padding">
        <h2 class="title content">
          HI, I'm Nurpais. <br />
          Front-end Developer <br />
          & Designer
        </h2>
      </div>
      <div class="col is-dark flex-center flex-start is-padding">
        <p class="text content">
          My name is Nurpais. <br />
          I’m a Full Stack Web Developer based in SB, Kyrgyzstan. I design and
          code beautifully simple things, and I love what I do.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import animeClass from "@/anime";
export default {
  name: "home",
  beforeRouteEnter(to, from, next) {
    if (to.meta.border && from.path === "/") {
      next(() => {
        const anime = new animeClass();
        anime.runBorder();
      });
    } else {
      next(() => {
        const anime = new animeClass();
        anime.runBody();
      });
    }
  },
  beforeRouteLeave(to, from, next) {
    const anime = new animeClass();
    anime.leaveBody().then(() => {
      next();
    });
  }
};
</script>
