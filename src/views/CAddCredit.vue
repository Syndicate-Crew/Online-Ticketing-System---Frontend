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
              <div class="col-4">
                <h1>Add Credits</h1>
              </div>
            </div>
            <hr />
            <form>
              <div class="form-group row">
                <div class="col-md-4 p-2">
                  <label><b>Add Amount :</b></label>
                </div>
                <div class="col-md-7 p-2">
                  <select class="form-select">
                    <option value="" hidden>Select</option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                    <option value="4000">4000</option>
                    <option value="5000">5000</option>
                  </select>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-sm-6">
                  <h5>Credit Card:</h5>
                </div>
                <div class="col-sm-6">
                  <h6>80541248514</h6>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-sm-6">
                  <h5>cvv:</h5>
                </div>
                <div class="col-sm-6">
                  <h6>348</h6>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-sm-6">
                  <h5>Expire Date:</h5>
                </div>
                <div class="col-sm-6">
                  <h6>01/07/2021</h6>
                </div>
              </div>
              <br />
              <div class="form-group">
                <div class="row">
                  <button class="btn btn-success btn-lg">
                    Edit Credit Card Details
                  </button>
                </div>
                <br />
                <div class="row">
                  <button class="btn btn-primary btn-lg">
                    Add Credit To The Account
                  </button>
                </div>
                <br />
              </div>
            </form>
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
  name: "CAddCre",
  components: {
    Header,
    Footer,
  },
};
</script>
