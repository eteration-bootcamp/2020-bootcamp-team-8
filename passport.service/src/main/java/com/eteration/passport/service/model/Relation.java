package com.eteration.passport.service.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "Relations")
@IdClass(RelationId.class)
public class Relation {
        
    @Id
    @Column(name="departureCountryCode")
    private String countryOfOrigin;

    @Id
    @Column(name = "destinationCountryCode")
    private String countryOfDestination;
    
    @Column
    private String visaCode;

    public Relation(){
        super();
    }

    public Relation(String countryOfOrigin, String countryOfDestination, String visaCode) {
        super();
        this.countryOfOrigin = countryOfOrigin;
        this.countryOfDestination = countryOfDestination;
        this.visaCode = visaCode;
    }

    public String getCountryOfOrigin() {
        return countryOfOrigin;
    }

    public void setCountryOfOrigin(String countryOfOrigin) {
        this.countryOfOrigin = countryOfOrigin;
    }

    public String getCountryOfDestination() {
        return countryOfDestination;
    }

    public void setCountryOfDestination(String countryOfDestination) {
        this.countryOfDestination = countryOfDestination;
    }

    public String getVisaCode() {
        return visaCode;
    }

    public void setVisaCode(String visaCode) {
        this.visaCode = visaCode;
    }

	@Override
	public String toString() {
		return "{\"countryOfDestination\":\"" + countryOfDestination + "\", \"countryOfOrigin\":\"" + countryOfOrigin
				+ "\", \"visaCode\":\"" + visaCode + "\"}";
	}

   
}