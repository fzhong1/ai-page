window.onload = function(){
	//object demoRequests store user demo request data
	function demo(firstName,lastName,email,company,phone,annualRevenue, notes) {
	  this.firstName = firstName;
	  this.lastName = lastName;
	  this.email = email;
	  this.company = company;
	  this.phone = phone;
	  this.annualRevenue  = annualRevenue;
	  this.notes = notes;
	}

	function demoRequests() {
	  demoRequests = [];
	  this.demoRequests = demoRequests;

	  this.add = function(prj) {
	    demoRequests.splice(demoRequests.length,0,prj);
	  }
	}

	var userRequests = new 	demoRequests();
	userRequests.add(new demo("sdjf","dsjlf","dslfj","dslf","dslfj","sjfkld","dsjklf"));
	userRequests.add(new demo("sd2222jf","dsjlf","dslfj","dslf","dslfj","sjfkld","dsjklf"));
	console.log(userRequests);

	$("#requestDemo").click(function(){
	$("#popBox").css("display","block");
	positionPopup();
	$(".blocker").css("background-color","black");
	console.log("cc");
	});
	 
	$("#close").click(function(){
	$("#popBox").css("display","none");
	});
		 
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
	 
	$(window).bind('resize',positionPopup);

	$("#submit").click(function(){
		var firstName = $("#firstName").val();
		var lastName = $("#lastName").val();
		var email = $("#email").val();
		var company = $("#company").val();
		var phone = $("phone").val();
		var annualRevenue = $("#annualRevenue").val();
		var notes = $("#notes").val();
		userRequests.add(new demo(firstName,lastName,email,company,phone,annualRevenue, notes));
		console.log(userRequests);
		$("#innerForm :input").each(function(){
		$(this).val('');
		});
		$("#close").click();
	});
};