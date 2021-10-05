<template>
  <div>
    <Header />
    <div class="container">
      <div class="row p-5">
        <div class="col-6">
          <h1>Good Morning Kaveen!</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-11 rounded m-1  shadow-lg">
          <div class="row">
            <div class="col-5">
              <div>
                <img
                  class="card-img-top"
                  height="300px"
                  src="https://wallpaperaccess.com/full/2213424.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h1>Kaveen Madushanka</h1>
                </div>
              </div>
            </div>
            <div class="col-6">
              <h1>Scan Code Here</h1>
              <h3>Or Scan the device</h3>
              <br />
              <hr />

              <img
                class="card-img-top"
                height="300px"
                width="100px"
                src="https://blog.hubspot.com/hs-fs/hub/53/file-2457427390-jpg/00-Blog_Thinkstock_Images/qr-code.jpg?width=381&name=qr-code.jpg"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// import QrcodeVue from 'qrcode.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "DQRCode",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
