<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
      <h1>Good Morning Kaveen!</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-11 rounded m-1  shadow-lg">
        <div>
          <div class="card-body">
              <div class="row">
                <div class="col-4">
                    <h1>Add Credits</h1>
                </div>
            </div>
            <hr/>
        <form>
            <div class="form-group row">
                <div class="col-md-4 p-2">
                <label><b>Date :</b></label>
                </div>
                <div class="col-md-7 p-2">
                <input
                    type="date"
                    placeholder="Enter Date"
                    class="form-control"
                    v-model="c"
                    required
                />
                </div>
            </div>

            <div class="form-group row">
                <div class="col-md-4 p-2">
                <label><b>Shift :</b></label>
                </div>
            <div class="col-md-7 p-2">
              <select class="form-select">
                <option value="" hidden>Select</option>
                <option value="day shift">day shift</option>
                <option value="night shift">night shift</option>
              </select>
            </div>
            </div>

            <div class="form-group row">
                <div class="col-md-4 p-2">
                <label><b>Purpose :</b></label>
                </div>
                <div class="col-md-7 p-2">
                <input
                    type="text"
                    placeholder="Enter Purpose"
                    class="form-control"
                    v-model="c"
                    required
                />
                </div>
            </div>



            <div class="form-group row">
                <div class="col-md-4 p-2">
                <label><b>Route :</b></label>
                </div>
            <div class="col-md-7 p-2">
              <select class="form-select">
                <option value="" hidden>Select</option>
                <option value="Malabe_to_aturugiriya">Malabe to aturugiriya</option>
                <option value="kandy_to_colombo">kandy to colombo</option>
                <option value="matara_to_galle">matara to galle</option>

              </select>
            </div>
            </div>
          <div class="form-group">
                  <button class="btn btn-primary">Request</button>
            <br/>   
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>


</div>
</template>

<script>
export default {
    name: "EReqOt"
}
</script>

<style>

</style>