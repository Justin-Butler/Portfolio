//Hover Effect for each Card.
$('#card').on({
  mouseenter: function(){
    $(this).css("boxShadow", "2px 2px 10px #ffffff");
  },
  mouseleave: function(){
    $(this).css("boxShadow", "none");
  }
});
