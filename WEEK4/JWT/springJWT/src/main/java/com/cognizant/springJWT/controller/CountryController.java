package com.cognizant.springJWT.controller;

import com.cognizant.springJWT.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
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
    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        List<Country> countries = (ArrayList<Country>)context.getBean("countryList");
        return countries;
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
