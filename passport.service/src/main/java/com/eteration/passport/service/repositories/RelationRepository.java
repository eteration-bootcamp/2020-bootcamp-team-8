package com.eteration.passport.service.repositories;

import java.util.List;

import com.eteration.passport.service.model.Relation;
import com.eteration.passport.service.model.RelationId;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;



public interface RelationRepository extends CrudRepository<Relation,RelationId>{

    @Query(value = "SELECT * FROM Relations" , nativeQuery = true)
    List<Relation> findAllRelations();
    
    @Query(value = "SELECT * FROM Relations r WHERE r.departureCountryCode=?1",nativeQuery = true)
    List<Relation> findByCountryOfOrigin(String countryCode);

    @Query(value = "SELECT * FROM Relations r WHERE r.departureCountryCode=?1 and r.destinationCountryCode=?2",nativeQuery = true)
    List<Relation> findRelation(String countryOrigin,String countryDest);

}