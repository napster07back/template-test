<script>
  Swal.fire({
    title: 'Data not found, do you want to copy from new restaurent registration details?',
    text: "You will be promted again!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, copy it!!'
  }).then((result) => {
    if (result.isConfirmed) {
      <?php
      insertData($conn, $tableName, $columnName, $p_id);
      ?>
      Swal.fire(
        'Copied!',
        'Data has been copied.',
        'success'
      )
    }
  })

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })


  function copyData() {
    Swal.fire({
      title: 'Are you sure?',
      text: "If cancelled, will be promted again!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, copy it!!'
    }).then((result) => {
      if (result.isConfirmed) {
        <?php
        // insertData($conn, $tableName, $columnName, $p_id);
        ?>
        Swal.fire(
          'Copied!',
          'Data has been copied.',
          'success'
        )
      }
    });
  };


  swal.fire({
        title: 'Basic details not found, do you want to copy from registration details?',
        text: "If cancelled, will be promt again!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, copy it!',
        cancelButtonText: 'No, cancel!',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        }
      }).then(function(result) {
        // alert(result.value);
        if (result.value) {
          swal.fire(
            'Copied!',
            'Data has been copied.',
            'success'
          );
          $value = result.value;
          if($value){
            <?php
            insertData($conn, $tableName, $columnName, $p_id);
            ?>
          }
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire(
            'Cancelled, opps!',
            'No data to show, refresh again :)',
            'error'
          );
        }
      });
</script>
<!-- <div class="table-responsive">
      <table class="table">
        <tbody>
          <tr>
            <td>Data not found, do you want to copy from new restaurent registration details?</td>
            <td><button type="button" class="btn btn-light" id="copy-data">Copy <i class="icon-play3 ml-2"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div> -->