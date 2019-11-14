<template>
  <div class="border">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style lang="scss">
.border {
  span {
    display: inline-block;
    background-color: $light;
    position: fixed;
    z-index: 998;
  }
  span:nth-child(odd) {
    width: 100vw;
    height: 2vw;
  }
  span:nth-child(even) {
    width: 2vw;
    height: 100vh;
  }
  span:nth-child(1),
  span:nth-child(2) {
    top: 0;
  }
  span:nth-child(2),
  span:nth-child(3) {
    right: 0;
  }
  span:nth-child(3),
  span:nth-child(4) {
    bottom: 0;
  }
  span:nth-child(4),
  span:nth-child(1) {
    left: 0;
  }
}
</style>
