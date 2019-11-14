<template>
  <div id="app">
    <border />
    <navbar />
    <router-view class="wrapper" />
  </div>
</template>

<script>
import border from "@/components/Border";
import navbar from "@/components/Navbar";

export default {
  name: "app",
  components: {
    border,
    navbar
  },
  mounted() {
    var i =
        "padding: 0; color:#000000; line-height:20px; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif;",
      n = ["🍪", "😘", "🤓", "🍰", "😍", "🔥", "🙌"],
      o = n[Math.floor(Math.random() * n.length)];
    window.console.log(
      "%cMade with " + o + " \nby %cwww.nurpais.pro    \n",
      i,
      "padding: 0; color:#000000; line-height:20px; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif; font-weight: 700;"
    );
  }
};
</script>
