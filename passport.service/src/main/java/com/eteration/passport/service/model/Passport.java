package com.eteration.passport.service.model;
import javax.persistence.*;




@Entity
@Table(name = "Passport")
public class Passport{
    @Id
    private String countryCode;
    @Column
    private String countryName;
    @Column
    private String imageName;
    @Column
    private String continent;
    @Column
    private int visaFree;
    @Column
    private int visaRequired;
    @Column
    private int visaOnArrival;
    @Column(name = "ETA")
    private int eta;

    public Passport(String countryName, String countryCode, String imageName, String continent, int visaFree,
            int visaRequired, int visaOnArrival, int eta) {
        this.countryName = countryName;
        this.countryCode = countryCode;
        this.imageName = imageName;
        this.continent = continent;
        this.visaFree = visaFree;
        this.visaRequired = visaRequired;
        this.visaOnArrival = visaOnArrival;
        this.eta = eta;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public String getContinent() {
        return continent;
    }

    public void setContinent(String continent) {
        this.continent = continent;
    }

    public int getVisaFree() {
        return visaFree;
    }

    public void setVisaFree(int visaFree) {
        this.visaFree = visaFree;
    }

    public int getVisaRequired() {
        return visaRequired;
    }

    public void setVisaRequired(int visaRequired) {
        this.visaRequired = visaRequired;
    }

    public int getVisaOnArrival() {
        return visaOnArrival;
    }

    public void setVisaOnArrival(int visaOnArrival) {
        this.visaOnArrival = visaOnArrival;
    }

    public int getEta() {
        return eta;
    }

    public void setEta(int eta) {
        this.eta = eta;
    }

    

    
    

}
