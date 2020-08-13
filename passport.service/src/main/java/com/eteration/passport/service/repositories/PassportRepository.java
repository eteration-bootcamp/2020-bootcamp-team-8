package com.eteration.passport.service.repositories;

import java.util.List;

import com.eteration.passport.service.model.Passport;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface PassportRepository extends CrudRepository<Passport,String>{
    
    @Query(value = "SELECT * FROM Passport",nativeQuery = true)
    List<Passport> findAllPassports();
    @Query(value = "SELECT * FROM Passport p WHERE p.countryName=?1",nativeQuery = true)
    Passport findByCounrtyName(String countryName);
    @Query(value = "SELECT * FROM Passport p WHERE p.countryCode=?1",nativeQuery = true)
    Passport findByCountryCode(String countryCode);
}