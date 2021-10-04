<template>
  <div class="home">
    <Header />
    <img alt="Vue logo" src="../assets/logo.png" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>
