package com.vedant;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAATest {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Setup: Runs before each test
        calculator = new Calculator();
        System.out.println("Before test");
    }

    @After
    public void tearDown() {
        // Teardown: Runs after each test
        calculator = null;
        System.out.println("After test");
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 5, b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(8, result);
    }

    @Test
    public void testMult() {
        // Arrange
        int a = 10, b = 4;

        // Act
        int result = calculator.mul(a, b);

        // Assert
        assertEquals(40, result);
    }
}
