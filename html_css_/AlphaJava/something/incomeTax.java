package Student.rampravesh;

import java.util.*;

public class incomeTax {
    public static void main(String[] args) {
        // problem is if --> your income less then 5lakh you pay 0% tax
        // --> your income 5 to 10 lakh then you pay 20% tax
        // ---> your income upto 10 lakh then you pay 30 % tax
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the your income");
        double income = sc.nextInt();
        double tax;
        if (income >= 500000) {
            tax = 0;

        }

        else if (income >= 500000 && income <= 100000) {
            tax = (income * 0.2);
        }

        else {
            tax = (income * 0.3);
        }

        System.out.println("this is your income tax:- " + income);

    }

}
