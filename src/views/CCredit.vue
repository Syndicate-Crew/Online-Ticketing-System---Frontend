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
        <div class="col-5 rounded m-1  shadow-lg">
          <div>
            <img
              class="card-img-top"
              height="300px"
              src="https://wallpaperaccess.com/full/2213424.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h1>Kaveen Madushanka</h1>
              <h3>kaveen@gmail.com</h3>
              <div class="container">
                <div class="row">
                  <div class="col-sm-6">
                    <a href="#" class="btn btn-warning">Edit Profile</a>
                  </div>
                  <div class="col-sm-6">
                    <a href="#" class="btn btn-danger">Delete Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 rounded m-1  shadow-lg">
          <div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <h3>Address:</h3>
                </div>
                <div class="col-sm-6">
                  <h4>
                    24/7, Malabe Road, Aturuiriya
                  </h4>
                </div>
              </div>
              <br />
              <br />
              <div class="row">
                <div class="col-sm-6">
                  <h3>Contact Number:</h3>
                </div>
                <div class="col-sm-6">
                  <h4>071454712</h4>
                </div>
              </div>
              <br />
              <br />
              <div class="row">
                <a href="#" class="btn btn-warning btn-block">Edit Details</a>
              </div>
              <br />
              <div class="row">
                <a href="#" class="btn btn-primary btn-block"
                  >Change Credit Card Details</a
                >
              </div>
            </div>
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
  name: "CCredit",
  components: {
    Header,
    Footer,
  },
};
</script>
