$( document ).ready(function() {
	
	// GET REQUEST
	$("#getAllEmployeeId").click(function(event){
		event.preventDefault();
		ajaxGet();
	});
	
	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : window.location + "api/employee/all",
			success: function(result){
				if(result.status == "Done"){
					$.each(result.data, function(i, employee){
						var employee = '<tr>' +
						'<td>' +  employee.email+ '</td>' +
						'<td>' + employee.entrydate + '</td>' +
						'<td>' + employee.entrytime + '</td>' +
						'<td>' + employee.exitdate + '</td>' +
						'<td>' + employee.exittime + '</td>' +
					  '</tr>';
						
						$('#customerTable tbody').append(employee);
			        });
					console.log("Success: ", result);
				}else{
					$("#getResultDiv").html("<strong>Error</strong>");
					console.log("Fail: ", result);
				}
			},
			error : function(e) {
				$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		
		
		});	
	}
		
})