  $('.navTrigger').on("click", function () {
    $(this).toggleClass('active');    
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
    $("#mainListDiv").on("click", function (){
      $("#mainListDiv").removeClass("show_list");
      $('.navTrigger').removeClass('active');      
    })

});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
      
  } else {
      $('.nav').removeClass('affix');
  }
});

