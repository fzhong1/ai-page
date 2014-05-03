window.onload = function(){
	$(function(){
	  $("#myTable").tablesorter();
	});
	$("#heightNum").click(function(){
	  console.log("hummm");
	});	

	$("#myTable td").click(function() {
	  var column_num = parseInt( $(this).index() ) + 1;
	  console.log("column: " + column_num);

	  if(column_num === 7){
	  	$("#ageBox").css("display","block");
	  }

	  getItems(column_num);
	});

	$("#submit").click(function(){
		console.log("here2");
		var checkboxVal = filterData();
		var all = getItems(7);
		var res=[];

		var newMin = parseInt($("#minVal").val());
		var newMax = parseInt($("#maxVal").val());
		console.log(newMax);
		for(var i = 0; i<all.length; i++){
			if(all[i] < newMin || all[i] > newMax){
				checkboxVal.push(all[i]);
			}
		}

		for(var i = 0; i < all.length; i++){
			if(checkboxVal.indexOf(all[i]) === -1){
				res.push(all[i]);
			}
		}
		res = res.map(Number);
		console.log(res);

		//filter rows
		for(var i = 0; i < checkboxVal.length; i++){
			$("td").filter(function() {
			    return $(this).text().indexOf(checkboxVal[i]) !== -1;
			}).parent().remove();			
		}
		

		var selected = $("#aggregate option:selected").text();
		var aggregateVal = getSum(res);
		if(selected === "sum"){
			aggregateVal = getSum(res);
		}
		if(selected === "average"){
			aggregateVal = getAvg(res);
		}
		if(selected === "max"){
			aggregateVal = getMax(res);
		}
		if(selected === "min"){
			aggregateVal = getMin(res);
		}
		if(selected === "mode"){
			aggregateVal = getMode(res);
		}
		if(selected === "range"){
			aggregateVal = getRange(res);
		}

		$("#results").html(selected+":"+aggregateVal)
		$("#ageBox").css("display","none");
	});

	var getItems = function(column_num){
		var items=[];
		$('#myTable tbody tr td:nth-child('+column_num+')').each( function(){
		   items.push( $(this).text() );       
		});
	 //    var res = items.filter(function(elem, pos) {
		//     return items.indexOf(elem) == pos;
		// });
		console.log(items);
		return items;
	}

	var filterData = function(){
	    var chkArray = [];
	    $('input[type=checkbox]:checked').each(function() {
	        chkArray.push($(this).val());
	    });
	    var res = [];
		$.each(chkArray, function(i, el){
		    if($.inArray(el, res) === -1) res.push(el);
		});
	    return res;
	}

	var getSum = function(arr){
		// var newArr = arr.map(Number);
		var sum = arr.reduce(function(a, b) {
		    return a + b;
		});
		return sum;
	}

	var getAvg = function(newArr){
		// var newArr = arr.map(Number);
		var avg = newArr.reduce(function(a, b) {
		    return a + b;
		});
		avg = avg / newArr.length;
		return avg;
	}
	var getMax = function(arr){
		return Math.max.apply( Math, arr);
	}
	var getMin = function(arr){
		return Math.min.apply( Math, arr);
	}

	var getMode = function(arr){
	    var counter = {};
	    var mode = [];
	    var max = 0;
	    for (var i in arr) {
	        if (!(arr[i] in counter))
	            counter[arr[i]] = 0;
	        counter[arr[i]]++;
	 
	        if (counter[arr[i]] == max) 
	            mode.push(arr[i]);
	        else if (counter[arr[i]] > max) {
	            max = counter[arr[i]];
	            mode = [arr[i]];
	        }
	    }
	    return mode; 
	}
	var getRange = function(arr){
		var min = Math.min.apply( Math, arr);
		var max = Math.max.apply( Math, arr);
		var res = max - min;
		return res;
	}
};