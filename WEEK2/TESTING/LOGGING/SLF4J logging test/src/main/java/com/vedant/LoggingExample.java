package com.vedant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.info("INFO MESSAGE: App started");

        int age = 15;

        if (age < 18) {
            logger.warn("WARNING MESSAGE: User is a minor.");
        } else {
            logger.info("INFO MESSAGE: User is an adult.");
        }

        try {
            int result = divide(10, 0);
            logger.info("Result: " + result);
        } catch (Exception e) {
            logger.error(" ERROR MESSAGE: Error occurred during division: " + e.getMessage());
        }

        logger.info("INFO MESSAGE: App finished");
    }

    private static int divide(int a, int b) {
        return a / b; // Will cause exception if b is 0
    }
}
