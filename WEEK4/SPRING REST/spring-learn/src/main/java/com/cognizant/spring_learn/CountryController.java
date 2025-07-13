package com.cognizant.spring_learn;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CountryController {

    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

    @RequestMapping("/country")
    public Country getCountryIndia(){
        Country country = context.getBean("in", Country.class);
        return country;

    }
    @RequestMapping("/countries")
    public List<Country> getAllCountries() {

        List<Country> countryList = new ArrayList<>();
        countryList.add(context.getBean("in", Country.class));
        countryList.add(context.getBean("us", Country.class));
        countryList.add(context.getBean("uk", Country.class));
        countryList.add(context.getBean("jp", Country.class));
        countryList.add(context.getBean("de", Country.class));
        countryList.add(context.getBean("fr", Country.class));
        countryList.add(context.getBean("cn", Country.class));
        countryList.add(context.getBean("br", Country.class));
        countryList.add(context.getBean("au", Country.class));
        countryList.add(context.getBean("ca", Country.class));
        countryList.add(context.getBean("za", Country.class));

        return countryList;
    }

    @RequestMapping("/country/{code}")
    public Country getCountryByCode(@PathVariable String code){
        Country country = null;
        try{
         country = context.getBean(code.toLowerCase(), Country.class);
        } catch(Exception e){
         throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Country not found");
        }
        return country;
    }
}
