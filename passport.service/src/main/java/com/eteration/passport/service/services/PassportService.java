package com.eteration.passport.service.services;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.eteration.passport.service.model.Passport;
import com.eteration.passport.service.repositories.PassportRepository;

import org.json.simple.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/passports")
@CrossOrigin
public class PassportService {

    @Autowired
    PassportRepository passportRepository;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<String> getAllPassports(HttpServletRequest request){
        String code = request.getParameter("code");
        if(code !=null){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        else{
            List<Passport> passports = passportRepository.findAllPassports();
            String jsonString = JSONArray.toJSONString(passports);
            return ResponseEntity.status(HttpStatus.OK).body(jsonString);
        }
        
    }

    @RequestMapping(value = "/{countryName}" , produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<String> getPassportById(@PathVariable("countryName") String countryName ,HttpServletRequest request){

        String code = request.getParameter("code");
        if(code !=null){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        else{
            return ResponseEntity.status(HttpStatus.OK).body(passportRepository.findByCounrtyName(countryName).toString());
        }
        
    }

    
    
}