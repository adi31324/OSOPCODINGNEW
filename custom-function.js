$(document).ready(function(){
	
	$(".fa-ellipsis-v").click(function(){

		$("#wrapper #sidebar").toggleClass("menu-height");
	});
});
function preloader(){

	$(window).on("load", function(){

		$("#preloader").css({
			"visibility":"hidden",
			"opacity":"0",
			"transition":"0.5s"
		});
	});
}
function myFunction(x) {
	x.classList.toggle("fa-thumbs-down");
  }
function myFunction(x){
	x.classList.toggle("fa-thumbs-up");
}