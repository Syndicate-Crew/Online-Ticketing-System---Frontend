<template>
  <div
    class="container-fluid position-absolute top-0 start-50 translate-middle-x"
  >
    <div class="row bg-white header-container fw-bold fs-5 p-3">
      <div class="col-2">
        <a href="/"><h2 class="text-start ms-5 logo-text">Bus eka</h2></a>
      </div>
      <div class="col-2 mt-1 nav-item">
        <a href="/"><p>Passesnger Home</p></a>
      </div>
      <div class="col-2 mt-1 nav-item">
        <a href="/accbal"><p>balance</p></a>
      </div>
      <div class="col-2 mt-1 nav-item">
        <a href="/qrcode"><p>QR Code</p></a>
      </div>
      <div class="col-2 mt-1 nav-item">
        <a href="/account"><p>Employee Home</p></a>
      </div>
      <div class="col-1 mt-1 nav-item">
        <a href="#"><p>SIGN UP</p></a>
      </div>
      <div class="col-1 mt-1 nav-item">
        <a href="#"><p>SIGN IN</p></a>
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
export default {
  name: "pageheader",
};
</script>

<style>
.header-container h2 {
  font-family: Pattaya;
  font-weight: bold;
  font-size: 40px;
  line-height: 56px;
  color: #6504b5;
  overflow: hidden;
}
.header-container {
  border-bottom: 5px solid#6504b5;
  margin-top: -60px;
  margin-bottom: 30px;
}
.nav-item p,
a {
  color: #2c3e50;
  text-decoration: none;
}
</style>
