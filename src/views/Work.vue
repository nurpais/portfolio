<template>
  <div class="work-page">
    <div class="cols">
      <div class="col is-light flex-center flex-start is-padding">
        <div class="work-list">
          <a href="https://megaweb.kg/" target="_blank" class="work-item"
            >MegaWeb</a
          >
          <a
            href="https://nurpais.github.io/cinematica/"
            target="_blank"
            class="work-item"
            >Cinema</a
          >
        </div>
      </div>
      <div class="col is-dark flex-center flex-start is-padding">
        <p class="text">
          Here are a few recent projects. <br />
          I'm available for freelance work.
          <br />
          <a href="mailto:orozulbaev@gmail.com" class="mail"
            >orozulbaev@gmail.com</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.mail {
  font-weight: 500;
  color: $light;
  text-decoration: underline;
}
.work-list {
  display: flex;
  flex-direction: column;
}
.work-item {
  font-size: 3rem;
  text-decoration: underline;
  font-weight: 700;
  color: $dark;
  font-family: "Big Shoulders Text", cursive;
  transition: color 0.2s;
  &:hover {
    color: lighten($dark, 10%);
  }
  @media (min-width: $mobile) {
    font-size: 5rem;
  }
}
</style>

<script>
import animeClass from "@/anime";
export default {
  name: "work",
  beforeRouteEnter(to, from, next) {
    next(() => {
      const anime = new animeClass();
      anime.runBody();
    });
  },
  beforeRouteLeave(to, from, next) {
    const anime = new animeClass();
    anime.leaveBody().then(() => {
      next();
    });
  }
};
</script>
