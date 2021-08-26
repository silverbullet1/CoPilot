<template>
  <section class="content">
    <div class="row center-block">
      <h2>Simple</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Striped Full Width Table</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Task</th>
                  <th>Progress</th>
                  <th style="width: 40px">Label</th>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Update software</td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-red">55%</span></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Clean database</td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-yellow" style="width: 70%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-yellow">70%</span></td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Cron job running</td>
                  <td>
                    <div class="progress progress-xs progress-striped active">
                      <div class="progress-bar progress-bar-primary" style="width: 30%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-light-blue">30%</span></td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Fix and squish bugs</td>
                  <td>
                    <div class="progress progress-xs progress-striped active">
                      <div class="progress-bar progress-bar-success" style="width: 90%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-green">90%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>

    <div class="row center-block">
      <h2>Data tables</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Data Table With Full Features</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th aria-label="Order Code" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Order code</th>
                        <th aria-label="Subject" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Subject</th>
                        <th aria-label="Word count" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Word Count</th>
                        <th aria-label="Expert deadline" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Expert deadline</th>
                        <th aria-label="Price" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even" role="row">
                        <td class="sorting_1">1</td>
                        <td>Economics</td>
                        <td>500</td>
                        <td>5/11/2021 - 2pm</td>
                        <td>$200</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">2</td>
                        <td>English</td>
                        <td>1000</td>
                        <td>4/12/2021 - 4pm</td>
                        <td>$400</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">3</td>
                        <td>Psychology</td>
                        <td>500</td>
                        <td>5/12/2021 - 1pm</td>
                        <td>$200</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">4</td>
                        <td>Arts</td>
                        <td>2000</td>
                        <td>12/12/2021 - 9pm</td>
                        <td>$400</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">5</td>
                        <td>Humanities</td>
                        <td>1000</td>
                        <td>24/12/2021 - 6pm</td>
                        <td>$100</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">6</td>
                        <td>Physics</td>
                        <td>500</td>
                        <td>28/12/2021 - 4pm</td>
                        <td>$300</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">7</td>
                        <td>Economics</td>
                        <td>500</td>
                        <td>5/11/2021 - 2pm</td>
                        <td>$200</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">8</td>
                        <td>English</td>
                        <td>1000</td>
                        <td>4/12/2021 - 4pm</td>
                        <td>$400</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">9</td>
                        <td>Psychology</td>
                        <td>500</td>
                        <td>5/12/2021 - 1pm</td>
                        <td>$200</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">10</td>
                        <td>Arts</td>
                        <td>2000</td>
                        <td>12/12/2021 - 9pm</td>
                        <td>$400</td>
                      </tr>
                    </tbody>
                    <!-- <tfoot>
                      <tr>
                        <th colspan="1" rowspan="1">Rendering engine</th>
                        <th colspan="1" rowspan="1">Browser</th>
                        <th colspan="1" rowspan="1">Platform(s)</th>
                        <th colspan="1" rowspan="1">Engine version</th>
                        <th colspan="1" rowspan="1">CSS grade</th>
                      </tr>
                    </tfoot> -->
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')

export default {
  name: 'Tables',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  }
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: '\f0dc';
}

table.dataTable thead .sorting_asc:after {
  content: '\f0dd';
}

table.dataTable thead .sorting_desc:after {
  content: '\f0de';
}
</style>
