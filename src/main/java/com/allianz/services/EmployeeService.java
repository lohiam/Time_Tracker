package com.allianz.services;

import org.springframework.stereotype.Service;

import com.allianz.model.Employee;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    private List<Employee> employee;

    public List<Employee> findByEmail(String email) {

        List<Employee> result = employee.stream ()
            .filter(x -> x.getEmail().equalsIgnoreCase(email))
            .collect(Collectors.toList());

        return result;

    }
}
