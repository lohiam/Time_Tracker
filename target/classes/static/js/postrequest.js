$( document ).ready(function() {
	
	// SUBMIT FORM
    $("#PostFormDetails").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    
    
    function ajaxPost(){
    	// PREPARE FORM DATA
    	var formData = {
    			email : $("#email").val(),
    			entrydate : $("#entrydate").val(),
    			entrytime : $("#entrytime").val(),
    			exitdate : $("#exitdate").val(),
    			exittime : $("#exittime").val()
    	}
    	
    	console.log("formData before post: Email: " + formData.email + 
			", entryDate: " + formData.entrydate +
			", entryTime: " + formData.entrytime+
			", exitDate: " + formData.exitdate +
			", exitTime: " + formData.exittime);
    	
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "api/employee/save",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(result) {
				console.log("stringifyData" + JSON.stringify(formData));
				if(result.status == "Done"){
					$("#postResultDiv").html("<p style='background-color:#7FA7B0; color:white; padding:20px 20px 20px 20px'>" + 
												"Post Successfully Done! <br>" +
												"--> {Email: " + result.data.email + 
												", entryDate: " + result.data.entrydate +
												", entryTime: " + result.data.entrytime +
												", exitDate: " + result.data.exitdate +
												", exitTime: " + result.data.exittime+"}</p>");
				}else{
					$("#postResultDiv").html("<strong>Error</strong>");
				}
				console.log(result);
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    	
    	// Reset FormData after Posting
    	resetData();

    }
    
    function resetData(){
    	$("#email").val("");
    	$("#entrydate").val("");
    	$("#entrytime").val("");
    	$("#exitdate").val("");
    	$("#exittime").val("");
    }
})