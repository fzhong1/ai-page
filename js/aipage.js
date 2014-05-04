window.onload = function(){
	//open popup
	$("#requestDemo").click(function(){
	$("#popBox").fadeIn(1000);
	positionPopup();
	$(".blocker").css("background-color","black");
	});
	 
	//close popup
	$("#close").click(function(){
	$("#innerForm").fadeOut(500);
	});
		 
	//position the popup at the center of the page
	function positionPopup(){
	if(!$("#innerForm").is(':visible')){
	return;
	}
	$("#innerForm").css({
	left: ($(window).width() - $('#innerForm').width()) / 2,
	top: ($(window).width() - $('#innerForm').width()) / 7,
	position:'absolute'
	});
	}
	 
	//maintain the popup at center of the page when browser resized
	$(window).bind('resize',positionPopup);
};