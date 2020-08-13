package com.eteration.passport.service.model;

import java.io.Serializable;

public class RelationId implements Serializable{

    static final private long serialVersionUID = 23123213;


    private String countryOfOrigin;
    private String countryOfDestination;

    public RelationId(){
        super();
    }

    public RelationId(String countryOfOrigin, String countryOfDestination) {
        super();
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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((countryOfDestination == null) ? 0 : countryOfDestination.hashCode());
        result = prime * result + ((countryOfOrigin == null) ? 0 : countryOfOrigin.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        RelationId other = (RelationId) obj;
        if (countryOfDestination == null) {
            if (other.countryOfDestination != null)
                return false;
        } else if (!countryOfDestination.equals(other.countryOfDestination))
            return false;
        if (countryOfOrigin == null) {
            if (other.countryOfOrigin != null)
                return false;
        } else if (!countryOfOrigin.equals(other.countryOfOrigin))
            return false;
        return true;
    }
    
    
    
    
}