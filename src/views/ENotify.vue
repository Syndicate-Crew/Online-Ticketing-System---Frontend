<template>
  <div class="container">
      <div class="row">
      <div class="col-6">
      <h1>Good Morning Kaveen!</h1>
      </div>
    </div>
      <div class="row">
          <div class="col-4 rounded m-1  shadow-lg">
            <div>
                <img class="card-img-top" height="300px" src="https://wallpaperaccess.com/full/2213424.jpg" alt="Card image cap">
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
          <div class="col-7 rounded m-1  shadow-lg">
          <div class="p-5">
        <b-tabs content-class="mt-3">
          <b-tab title="Notification" active>
            <br/>
            <div class="col-7 rounded m-1  shadow-lg">
                <h6>OT Request send Successfully</h6>
            </div>
            <br/>
            <div class="col-7 rounded m-1  shadow-lg">
                <h6>OT Request Accepted</h6>
                <div class="row">
              <div class="col-sm-6">
                <h6>Date:</h6>
              </div>
              <div class="col-sm-6">
                <h6>09/07/2021</h6>
              </div>
            </div> 
                <div class="row">
              <div class="col-sm-6">
                <h6>Route:</h6>
              </div>
              <div class="col-sm-6">
                <h6>kandy-colombo</h6>
              </div>
            </div> 
                <div class="row">
              <div class="col-sm-6">
                <h6>Bus:</h6>
              </div>
              <div class="col-sm-6">
                <h6>A900</h6>
              </div>
            </div> 
            </div>
            <br/>
         <div class="col-7 rounded m-1  shadow-lg">
                <h6>OT Request Accepted</h6>
                <div class="row">
              <div class="col-sm-6">
                <h6>Date:</h6>
              </div>
              <div class="col-sm-6">
                <h6>17/07/2021</h6>
              </div>
            </div> 
                <div class="row">
              <div class="col-sm-6">
                <h6>Route:</h6>
              </div>
              <div class="col-sm-6">
                <h6>kandy-matara</h6>
              </div>
            </div> 
                <div class="row">
              <div class="col-sm-6">
                <h6>Bus:</h6>
              </div>
              <div class="col-sm-6">
                <h6>A700</h6>
              </div>
            </div> 
            </div>
            <br/>
          </b-tab>
          <b-tab title="Requested" active>
            <br/>
            <div class="col-7 rounded m-1  shadow-lg">
            <h6>OT Request Rejected</h6>
            <h6>Sorry. Route Taken By a another Driver</h6>
            </div>
            <br/>
            <div class="col-7 rounded m-1  shadow-lg">
            <h6>OT Request Rejected</h6>
            <h6>Error in Details</h6>
            <h6>Contact: 0712541248 for more details or add a feedback inquary</h6>
            <br/>
            <div class="row">
                <div class="col-sm-4">
                </div>
                <div class="col-sm-8">
                   <a href="#" class="btn btn-success btn-sm">Add feedback inquiry</a>
                </div>
            </div>
            </div>
            <br/>
          </b-tab>
        </b-tabs>      
          </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    name: "ENotify"
}
</script>

<style>

</style>