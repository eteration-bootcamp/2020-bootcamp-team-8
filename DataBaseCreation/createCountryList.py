import pycountry 
import pycountry_convert as pc
import csv

count=0
countries = []

with open (".DataSource/passport-index-matrix-iso2.csv") as file:
    reader = csv.reader(file)
    for row in reader:
        if(list(row)[0] != 'XK'):
            countries.append(list(row)[0])
        #print((list(row)[0]))

countries.pop(0)
countriesAll = []



def country_to_continent(country_alpha2):
    country_continent_code = pc.country_alpha2_to_continent_code(country_alpha2)
    country_continent_name = pc.convert_continent_code_to_continent_name(country_continent_code)
    return country_continent_name

country = []



for i in range(len(countries)):
    if(countries[i] != 'TL' and countries[i] != 'VA' ):
        name = pycountry.countries.get(alpha_2=countries[i]).name
        country = [countries[i],name,country_to_continent(countries[i])]
        countriesAll.append(country)

countriesAll.append(['TL','Timor-Leste','Asia'])
countriesAll.append(['VA', 'Vatican City','Europa'])
countriesAll.append(['XW', 'Kosovo','Europa'])

countriesAll.sort()

with open('./CreatedData/countries.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["Alpha_2_Code", "Name", "Continent"])
    for i in range(len(countriesAll)):  
        writer.writerow(countriesAll[i])

print(len(countriesAll))
