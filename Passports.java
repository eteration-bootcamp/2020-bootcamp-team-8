package com.example.demo.model;

/*
 +---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| countryCode   | char(2)     | NO   | PRI | NULL    |       |
| countryName   | varchar(45) | NO   | UNI | NULL    |       |
| imageName     | varchar(10) | YES  |     | NULL    |       |
| continent     | varchar(20) | YES  |     | NULL    |       |
| visaFree      | int         | YES  |     | NULL    |       |
| visaRequired  | int         | YES  |     | NULL    |       |
| visaOnArrival | int         | YES  |     | NULL    |       |
| ETA           | int         | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
 
 */


import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@NoArgsConstructor
@Data
@Table(name="Passport")
public class Passports {
	@Id
	@GeneratedValue
	private long id;
	
	private String country_code;

	private String country_name;

	private String image_name;
	
	private String continent;
	
	private Long visa_free;
	
	private Long visa_required;
	
	private Long visa_on_arrival;
	
	private Long eta;
	

}
	

