package com.cognizant.springJWT.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {
    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

    private String code;
    private String name;

    public Country(){
        LOGGER.debug("Inside Country Constructor.");
    }

    public void setCode(String code) {
        LOGGER.debug("Setting code: {}", code);
        this.code = code;
    }

    public void setName(String name) {
        LOGGER.debug("Setting name: {}", name);
        this.name = name;
    }

    public String getCode() { return code; }
    public String getName() { return name; }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}

