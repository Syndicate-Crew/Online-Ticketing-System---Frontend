<template>
  <div class="container">
    <Header />
    <div class="row">
      <div class="col-6">
        <h1>Good Morning Kaveen!</h1>
      </div>
    </div>
    <br />
    <br />
    <div class="row">
      <div class="col-11 rounded m-1  shadow-lg">
        <div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6">
                <h3>Last Added Date:</h3>
              </div>
              <div class="col-sm-6">
                <h4>01/07/2021</h4>
              </div>
            </div>
            <br />
            <br />
            <div class="row">
              <div class="col-sm-6">
                <h3>Last Added Amount:</h3>
              </div>
              <div class="col-sm-6">
                <h4>400 Credit</h4>
              </div>
            </div>
            <br />
            <br />
            <div class="row">
              <div class="col-sm-6">
                <h3>Account Balance:</h3>
              </div>
              <div class="col-sm-6">
                <h4>150 Credit</h4>
              </div>
            </div>
            <br />
            <br />
            <div class="row">
              <a href="#" class="btn btn-success btn-lg"
                >Add Credit To Account</a
              >
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "CAccoBal",
  components: {
    Header,
    Footer,
  },
};
</script>
