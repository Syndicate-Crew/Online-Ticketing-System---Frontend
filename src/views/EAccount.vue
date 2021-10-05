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
        <div class="col-4 rounded m-1  shadow-lg">
          <div>
            <div col-md-5>
              <img
                class="card-img-top p-2"
                height="300px"
                src="https://wallpaperaccess.com/full/2213424.jpg"
                alt="Card image cap"
              />
            </div>
            <div class="card-body">
              <h1>Kaveen Madushanka</h1>
              <h3>kaveen@gmail.com</h3>
              <div class="container">
                <div class="row">
                  <div class="col-sm-6">
                    <a href="#" class="btn btn-outline-warning">Edit Profile</a>
                  </div>
                  <div class="col-sm-6">
                    <a href="#" class="btn btn-outline-danger"
                      >Delete Profile</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-7 rounded m-1  shadow-lg">
          <div class="p-5">
            <b-tabs content-class="mt-3">
              <b-tab title="Account" active>
                <br />
                <br />
                <div class="row">
                  <div class="col-sm-6">
                    <h4>Employee Number:</h4>
                  </div>
                  <div class="col-sm-6">
                    <h5>001</h5>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-sm-6">
                    <h4>Contact Number:</h4>
                  </div>
                  <div class="col-sm-6">
                    <h5>07145415154</h5>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-sm-6">
                    <h4>Home Address:</h4>
                  </div>
                  <div class="col-sm-6">
                    <h5>"No","Street","Town"</h5>
                  </div>
                </div>
                <br />
                <div class="row w-75 mx-auto">
                  <a href="#" class="btn btn-warning btn-block">Edit Details</a>
                </div>
              </b-tab>
              <b-tab title="Payment" active>
                <div class="row">
                  <div class="col-8">
                    <br />
                    <div class="row">
                      <div class="col-sm-6">
                        <h6>Last Payment Date:</h6>
                      </div>
                      <div class="col-sm-6">
                        <h6>12/12/2012</h6>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-sm-6">
                        <h6>Monthly Salary:</h6>
                      </div>
                      <div class="col-sm-6">
                        <h6>LKR 25,000</h6>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-sm-6">
                        <h6>Account Balance:</h6>
                      </div>
                      <div class="col-sm-6">
                        <h6>LKR 100,000</h6>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-sm-6">
                        <h6>OT Bonus in month:</h6>
                      </div>
                      <div class="col-sm-6">
                        <h6>LKR 0</h6>
                      </div>
                    </div>
                  </div>

                  <div class="col-4">
                    <a href="#" class="btn btn-outline-success ">Add To Bank</a>
                  </div>
                </div>
                <br />
                <div class="row w-75 mx-auto">
                  <a href="#" class="btn btn-warning ">Edit Details</a>
                </div>
                <br />
                <div class="row w-75 mx-auto">
                  <router-link :to="{ name: 'EReqOt' }" class="btn btn-primary">
                    Request OT
                  </router-link>
                </div>
                <br />
                <div class="row w-75 mx-auto">
                  <router-link
                    :to="{ name: 'ENotify' }"
                    class="btn btn-success"
                  >
                    History
                  </router-link>
                </div>
              </b-tab>
            </b-tabs>
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
  name: "EAccount",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
