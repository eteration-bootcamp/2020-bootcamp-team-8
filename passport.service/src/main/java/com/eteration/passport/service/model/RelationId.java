package com.eteration.passport.service.model;

import java.io.Serializable;

public class RelationId implements Serializable{

    static final private long serialVersionUID = 23123213;


    private String countryOfOrigin;
    private String countryOfDestination;

    public RelationId(String countryOfOrigin, String countryOfDestination) {
        this.countryOfOrigin = countryOfOrigin;
        this.countryOfDestination = countryOfDestination;
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
    
    
    
}