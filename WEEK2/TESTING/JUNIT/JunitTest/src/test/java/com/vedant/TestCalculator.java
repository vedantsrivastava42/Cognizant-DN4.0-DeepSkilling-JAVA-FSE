package com.vedant;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class TestCalculator {
    @Test
    public void testAdd(){
        Calculator calc = new Calculator();
        int result = calc.add(5,6);
    }
    @Test
    public void testMul(){
        Calculator calc = new Calculator();
        int a = 5,b=6;
        int result = calc.mul(5,6);

        assertEquals(30,result);
    }
}
