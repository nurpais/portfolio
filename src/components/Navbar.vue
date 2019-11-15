<template>
  <nav class="navbar">
    <div class="navbar-menu" ref="menu">
      <router-link :to="{ name: 'home' }" class="navbar-item"
        ><span @click="nav">Home</span></router-link
      >
      <router-link :to="{ name: 'work' }" class="navbar-item"
        ><span @click="nav">Work</span></router-link
      >
    </div>
    <div class="navbar-burger" @click="nav" ref="burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  &-menu {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 997;
    padding: 4vw;
    font-size: 1.3rem;
    transition: transform 0.3s;
    @media (max-width: $mobile) {
      transform: translateY(100vh);
      left: 0;
      background-color: $dark;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
    }
    &.is-active {
      transform: translateY(0);
    }
  }
  &-item {
    font-size: inherit;
    color: darken($light, 50%);
    padding: 0.5rem 0.75rem;
    transition: color 0.2s;
    &.is-active {
      color: $light;
    }
    &:hover {
      color: $light;
    }
  }
  &-burger {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    margin: 4vw;
    width: 32px;
    height: 28px;
    z-index: 999;
    cursor: pointer;
    span {
      width: 100%;
      height: 4px;
      background-color: $dark;
      border-radius: 25%;
      transition: all 0.3s;
    }
    &.is-active {
      span {
        background-color: $light;
      }
      span:nth-child(1) {
        transform: translate(0, 12px) rotate(-45deg);
      }
      span:nth-child(3) {
        transform: translate(0, -12px) rotate(-135deg);
      }
      span:nth-child(2) {
        display: none;
      }
    }
    @media (max-width: $mobile) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>

<script>
export default {
  name: "navbar",
  methods: {
    nav() {
      this.$refs.menu.classList.toggle("is-active");
      this.$refs.burger.classList.toggle("is-active");
    }
  }
};
</script>
