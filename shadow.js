//Hover Effect for each Card.
$('#card1, #card2, #card3, #card4, #card5, #card6, #card7, #card8').on({
  mouseenter: function(){
    $(this).css("boxShadow", "2px 2px 10px #ffffff");
  },
  mouseleave: function(){
    $(this).css("boxShadow", "none");
  }
});
