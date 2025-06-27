package com.vedant;

public class ExceptionThrower {

    public void riskyMethod(int value) throws IllegalArgumentException {
        if (value < 0) {
            throw new IllegalArgumentException("Negative values not allowed");
        }
        System.out.println("Value is valid: " +value);
    }
}