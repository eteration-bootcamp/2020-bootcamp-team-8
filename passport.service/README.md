* You can run passport.service with java -jar command. You can find the jar file in passport.service directory. The other requirment is installing mysql.
Install mysql and use the sql files in DatabaseCreation directory to create database. Set user options as user: root password:Ece123456

**Provided Rest Services**
***********************************************************************************
**Getting All Passports**
* URL: http://localhost:9090/passports
* Method: GET
* Path Variable: NA
* Request Body: NA
* Response Body: Passport List

**Getting All Relations for Country Origin**
* URL: http://localhost:9090/relations/countryCode(small case)
* Method: GET
* Path Variable: NA
* Request Body: NA
* Response Body: Passport List

