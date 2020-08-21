package com.example.demo.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Expense;
import com.example.demo.model.Passports;
import com.example.demo.repository.ExpenseRepository;
import com.example.demo.repository.PassportRepository;

@RestController
@RequestMapping("/api")
public class PassportController {

	@Autowired
	private PassportRepository passportRepository;
	
	@GetMapping("/passport/findAll")
	List<Passports> getAll(){
		return passportRepository.findAll();
	}
	
	@GetMapping("/passport/orderByEtaDesc")
	List<Passports> getAllbyDesc(){
		return passportRepository.findAllByOrderByEtaDesc();
	}
	
	@GetMapping("/passport/orderByEtaAsc")
	List<Passports> getAllbyAsc(){
		return passportRepository.findAllByOrderByEtaAsc();
	}
	
	@GetMapping("/passport/findbyname/{name}")
	Passports findbyname(@PathVariable String name){
		Passports p = passportRepository.findbyname(name);
		System.out.println(p.getCountry_name());
		return passportRepository.findbyname(name);
	}

	
}
