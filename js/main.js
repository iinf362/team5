//mobile nav
$('#btn-menu').click(function(){
	$('.nav-main').slideToggle();
});
//panel1
$("#panel1").click(function(){
  $("#panelC1").toggle(1000);
});
//panel2
$("#panel2").click(function(){
  $("#panelC2").toggle(1000);
});
//panel3
$("#panel3").click(function(){
  $("#panelC3").toggle(1000);
});

//panel4
$("#panel4").click(function(){
  $("#panelC4").toggle(1000);
});
//panel5
$("#panel5").click(function(){
  $("#panelC5").toggle(1000);
});
//panel6
$("#panel6").click(function(){
  $("#panelC6").toggle(1000);
});
//panel7
$("#panel7").click(function(){
  $("#panelC7").toggle(1000);
});

$(document).ready(function(){
    $(".nav-internal").sticky({topSpacing:5});
  });
  
  
