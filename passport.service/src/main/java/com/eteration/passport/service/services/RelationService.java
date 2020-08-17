package com.eteration.passport.service.services;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.eteration.passport.service.model.Relation;
import com.eteration.passport.service.repositories.RelationRepository;

import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/relations")
@CrossOrigin
public class RelationService {

    @Autowired
    RelationRepository relationRepository;

    @RequestMapping(value = "/{countryCode}", method = RequestMethod.GET)
    public ResponseEntity<String> getRelationsById(HttpServletRequest request,@PathVariable("countryCode") String countryCode){
        String code = request.getParameter("code");
        if(code !=null){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        else{
            List<Relation> relations = relationRepository.findByCountryOfOrigin(countryCode);
            String jsonString = JSONArray.toJSONString(relations);
            return ResponseEntity.status(HttpStatus.OK).body(jsonString);
        }
        
    }
    
}