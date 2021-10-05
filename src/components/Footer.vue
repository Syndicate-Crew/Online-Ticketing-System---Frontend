<template>
  <div
    class="container-fluid position-absolute bottom-0 start-50 translate-middle-x"
  >
    <div class="row footer-container">
      <div class="col heading-section">
        <a href="/"><h2 class="text-start ms-5 logo-text">Bus eka</h2></a>
      </div>
      <div class="col about-section">
        <h3>About Bus eka</h3>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>FAQ</p>
      </div>
      <div class="col social-section">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-google"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-twitter"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagefooter",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto&display=swap");
.footer-container {
  background-color: #5f30e2;
  height: 200px;
  margin-top: 60px;
  color: #ffff;
  overflow: hidden;
}
.heading-section h2 {
  font-family: "Pattaya", sans-serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 56px;
  color: #ffff;
  margin-top: 80px;
}
.about-section h3 {
  margin-top: 35px;
}
.social-section {
  font-size: 30px;
  margin-top: 80px;
}
.social-section i {
  padding: 10px;
}
</style>
