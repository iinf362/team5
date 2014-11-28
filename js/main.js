//mobile nav
$('#btn-menu').click(function(){
	$('.nav-main').slideToggle();
});
/*//panel1
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
*/

$('.panel-title').click(function(){
	$(this).next().toggle(1000);
})
 $(document).ready(function(){
    $(".nav-internal").sticky({topSpacing:5});
  });
