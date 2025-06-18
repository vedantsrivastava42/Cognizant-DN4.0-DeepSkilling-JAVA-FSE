package WEEK1.DSA.Searching;

import java.util.Arrays;
import java.util.Comparator;

public class ProductSearch {
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(targetName)) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetName) {
        // Sort array according to productName
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            String midName = products[mid].productName.toLowerCase();

            if (midName.equals(targetName.toLowerCase())) {
                return products[mid];
            } else if (midName.compareTo(targetName.toLowerCase()) < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }
}