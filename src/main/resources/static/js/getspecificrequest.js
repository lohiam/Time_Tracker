$( document ).ready(function() {
	
	
	$("#search-form").click(function(event){
		event.preventDefault();
		ajaxGet();
	});
	
	
	function ajaxGet(){
		
		var search = {}
		specificsearch : $("#specificsearchemail").val(),
	    $("#btn-search").prop("disabled", true);

	
		$.ajax({
			type : "GET",
			url : window.location + "api/employee/specificSearch",
			returndata : JSON.stringify(specificsearch),
			success: function(returndata){
				if(returndata.status == "Done"){
					$.each(returndata.data, function(i, employee){
						var employee = '<tr>' +
						'<td>' +  employee.email+ '</td>' +
						'<td>' + employee.entrydate + '</td>' +
						'<td>' + employee.entrytime + '</td>' +
						'<td>' + employee.exitdate + '</td>' +
						'<td>' + employee.exittime + '</td>' +
					  '</tr>';
						
						$('#customerTable tbody').append(employee);
			        });
					console.log("Success: ", returndata);
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