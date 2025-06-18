package WEEK1.DSA.Searching;

public class App {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Notebook", "Stationery"),
            new Product(4, "Phone", "Electronics")
        };

        //Linear Search
        Product result = ProductSearch.linearSearch(products, "Phone");
        if (result != null) {
            System.out.println("Linear Search - Product Found: " + result);
        } else {
            System.out.println("Binary Search - Product not found.");
        }

        //Binary Search
        Product binaryResult = ProductSearch.binarySearch(products, "Phone");
        if (binaryResult != null) {
            System.out.println("Binary Search - Product Found: " + binaryResult);
        } else {
            System.out.println("Binary Search - Product not found.");
        }
    }
}
