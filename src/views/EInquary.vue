<template>
<div>
  <Header />
  <div class="container">
    <div class="row">
      <div class="col-11 rounded m-1  shadow-lg">
        <div>
          <div class="card-body">
              <div class="row">
                <div class="col-4">
                    <h1>Add Inquiry</h1>
                </div>
            </div>
            <hr/>
        <form>
            <div class="form-group row">
                <div class="col-md-4 p-2">
                <label><b>Name :</b></label>
                </div>
                <div class="col-md-7 p-2">
                <input
                    type="text"
                    placeholder="Enter Name"
                    class="form-control"
                    v-model="c"
                    required
                />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-4 p-2">
                <label><b>NIC :</b></label>
                </div>
                <div class="col-md-7 p-2">
                <input
                    type="text"
                    placeholder="Enter NIC"
                    class="form-control"
                    v-model="c"
                    required
                />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-4 p-2">
                <label><b>Description :</b></label>
                </div>
                <div class="col-md-7 p-2">
                <textarea
                class="form-control"
                rows="3"
                placeholder="Enter Description"
                v-model="c"
              ></textarea>
                </div>
            </div>
          <div class="form-group">
              <router-link :to="{ name: 'ENotify' }" class="btn btn-primary">
                    Submit
              </router-link>
            <br/>   
          </div>
        </form>
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
    name: "EInquary",
    components: {
    Header,
    Footer,
  },
}
</script>

<style>

</style>