package com.eteration.passport.service.services;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.eteration.passport.service.model.Passport;
import com.eteration.passport.service.model.PassportRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
    public ResponseEntity<List<Passport>> getAllPassports(HttpServletRequest request){
        String code = request.getParameter("code");
        if(code !=null){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(passportRepository.findAll());
    }
    
}