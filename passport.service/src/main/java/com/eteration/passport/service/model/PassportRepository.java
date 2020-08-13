package com.eteration.passport.service.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PassportRepository extends JpaRepository<Passport,Long>{
    @Query(value = "SELECT * FROM Passport",nativeQuery = true)
    List<Passport> findAllPassports();
    @Query(value = "SELECT * FROM Passport p WHERE p.countryName=?1",nativeQuery = true)
    Passport findByCounrtyName(String countryName);
    @Query(value = "SELECT * FROM Passport p WHERE p.countryCode=?1",nativeQuery = true)
    Passport findByCountryCode(String countryCode);
}