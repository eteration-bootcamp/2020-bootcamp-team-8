import csv

passports = []
countrires = []
mobiltyScore = 0
visaFreeCount = 0
visaOnArrivalCount = 0
etaCount = 0
eVisaCount = 0
visaRequriedCount = 0

with open ("./DataSource/passport-index-tidy-iso2.csv") as file:
    reader = csv.reader(file)
    for row in reader:
            passports.append(row)
with open ("./DataSource/Countries.csv") as file:
    reader = csv.reader(file)
    for row in reader:
            countrires.append(row)
passports.pop(0)
countrires.pop(0)
passport = []
passportsLast = []
print(passports[0] , len(passports))
print(countrires[0], len(countrires))
for i in range(len(passports)):
    if((i+1)==len(passports)):
        passports.append([0,0,0])

    if (passports[i+1][0] != passports[i][0]):
        
        if (passports[i][2] == "VOA"):
            visaOnArrivalCount += 1  
        elif (passports[i][2] == "ETA"):
            etaCount += 1
        elif (passports[i][2] == "VR"):
            visaRequriedCount += 1
        elif (passports[i][2] != "-1" and passports[i][2] != "VR" ):
            visaFreeCount += 1
        mobiltyScore = visaFreeCount + visaOnArrivalCount
        passport = [passports[i][0],visaFreeCount,visaOnArrivalCount,etaCount,visaRequriedCount]
        passportsLast.append(passport)
        mobiltyScore = 0
        visaFreeCount = 0
        visaOnArrivalCount = 0
        etaCount = 0
        visaRequriedCount = 0
    else:
        if (passports[i][2] == "VOA"):
            visaOnArrivalCount += 1  
        elif (passports[i][2] == "ETA"):
            etaCount += 1
        elif (passports[i][2] == "VR"):
            visaRequriedCount += 1
        elif (passports[i][2] != "-1" and passports[i][2] != "VR" ):
            visaFreeCount += 1

passportsLast.sort()
print (passportsLast[0], len(passportsLast))
passportList = []
for i in range(199):
    passport = [countrires[i][1],countrires[i][2],countrires[i][0].lower()+".png"] + passportsLast[i]
    passportList.append(passport)
    print (passport)

with open('./CreatedData/PassportList.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["CountryName", "Continent","ImageName","Alpha_2_Code","VisaFree","VisaOnArrival","ETA","VisaRequired"])
    for i in range(len(passportList)):  
        writer.writerow(passportList[i])
