package com.example.demo.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Expense;
import com.example.demo.model.Passports;

@Repository
public interface PassportRepository extends JpaRepository<Passports, Long> {

	List<Passports> findAllByOrderByIdAsc();

	List<Passports> findAllByOrderByIdDesc();
	
	List<Passports> findAllByOrderByEtaDesc();
	
	List<Passports> findAllByOrderByEtaAsc();
	//findAllByOrderByEtaAsc
	
	//Passports findByCountry_Name(String country_name);
		
	@Query(value = "SELECT * FROM passport p WHERE p.country_name = ?1", 
		       nativeQuery = true)
	Passports findbyname(String name);

}
