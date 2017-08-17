$(function() {

   $(window).resize(function(){
      var width = $(window).width();
      if (width < 600) {
        // alert("width is less than 400");
          $("#aboutmedescr_hidden").show();
          $("#aboutmedescr").hide();
      } else {
          $("#aboutmedescr_hidden").hide();
          $("#aboutmedescr").show();
        // $("#aboutmedescr").off();
        //  $("#aboutmedescr").show();
        // alert("width is more than 400")
      }
   })




  //  var modal = $("#myModal");
   //
  //  var modTrig = $("#modalTrigger");
   //
  //  var span = $(".close")[0];
   //
  //  modTrig.click(
  //    function() {
  //      modal.css("display", "block");
  //     //  modal.style.dispay = "block";
  //    });
   //
  //  span.click(
  //    function() {
  //      modal.hide();
  //     //  modal.css("display", "none");
  //     //  modal.style.display = "none";
  //    })
   //
  //  $(window).click(
  //    function(event) {
  //       if (event.target == modal) {
  //          modal.hide();
  //         //  modal.css("display", "none");
  //         //  modal.style.dispaly = "none";
  //       }
  //    })


});
