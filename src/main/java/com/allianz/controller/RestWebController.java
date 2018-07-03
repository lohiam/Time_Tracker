package com.allianz.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.allainz.message.Response;
import com.allianz.model.Employee;
import com.allianz.model.SearchParameter;
import com.allianz.services.EmployeeService;

@RestController
@RequestMapping("/api/employee")
public class RestWebController {
	
	 EmployeeService employeeService;

	    @Autowired
	    public void setEmployeeService(EmployeeService employeeService) {
	        this.employeeService = employeeService;
	    }

	List<Employee> emp = new ArrayList<Employee>();

	@GetMapping(value = "/all")
	public Response getResource() {
		Response response = new Response("Done", emp);
		
		return response;
	}
	
	 @PostMapping(value = "/specificSearch")
	 public Response getSearchResult(
	            @RequestBody SearchParameter searchparameter) {

	        Response result = new Response();
	        
	        List<Employee> employee = employeeService.findByEmail(searchparameter.getEmail());
	        if (employee.isEmpty()) {
	            result.setStatus("no user found!");
	        } else {
	            result.setStatus("success");
	        }
	        result.setData(employee);
	        
	        return(result);


	 }
	

	@PostMapping(value = "/save")
	public Response postEmployee(@RequestBody Employee employee) {
		
		
		emp.add(employee);
		
		  Iterator<Employee> iter = emp.iterator();
	      while (iter.hasNext()) {
	         System.out.println(iter.next());
	      }
		
		Response response = new Response("Done", employee);
		return response;
	}
}