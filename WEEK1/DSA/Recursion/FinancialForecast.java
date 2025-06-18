package WEEK1.DSA.Recursion;

public class FinancialForecast {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return calculateFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double currentValue = 1000.0;
        double annualGrowthRate = 0.10; // 10%
        int years = 5;

        double futureValue = calculateFutureValue(currentValue, annualGrowthRate, years);
        System.out.printf("Future Value after %d years: ₹%.2f\n", years, futureValue);
    }
}
