package com.vedant;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class OrderedTests {

    @Test
    @Order(1)
    void testAddition() {
        Calculator calc = new Calculator();
        assertEquals(9, calc.add(4, 5));
    }

    @Test
    @Order(2)
    void testMultiplication() {
        Calculator calc = new Calculator();
        assertEquals(20, calc.mul(4, 5));
    }
}
