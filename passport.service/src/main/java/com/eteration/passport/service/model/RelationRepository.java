package com.eteration.passport.service.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RelationRepository extends JpaRepository<Relation,Long>{

    @Query(value = "SELECT * FROM Relation" , nativeQuery = true)
    List<Relation> findAllRelations();
    
    @Query(value = "SELECT * FROM Relation r WHERE r.departureCountryCode=?1",nativeQuery = true)
    List<Relation> findByCountryOfOrigin(String countryCode);

    @Query(value = "SELECT * FROM Relation r WHERE r.departureCountryCode=?1 and r.destinationCountryCode=?2",nativeQuery = true)
    List<Relation> findRelation(String countryOrigin,String countryDest);

}