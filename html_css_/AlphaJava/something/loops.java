package Student.rampraveshjava;

import java.util.*;

public class loops {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // problem no 1
        for (int n = 0; n < 5; n++) {
            System.out.println("Hello word");
            n += 2;

        }

        // problem no 2

        int number;
        int choice;
        int evenSum = 0;
        int oddSum = 0;
        do {
            System.out.print("Enter the number ");
            number = sc.nextInt();
            if (number % 2 == 0) {
                evenSum = evenSum + number; // evenSum += number;
            } else {
                oddSum = oddSum + number; // oddSum += number;
            }
            System.out.print("Do you want to continue? Press 1 for yes or 0 for no");
            choice = sc.nextInt();
        }

        while (choice == 1);
        System.out.println("Sum of even numbers: " + evenSum);
        System.out.println("Sum of odd numbers: " + oddSum);

        // problem num 3 --> factorial

        int i;
        int fact = 1;
        System.out.println("Enter the factorial num");
        int numm = sc.nextInt();
        for (i = 1; i <= numm; i++) {
            fact = fact * i;
        }
        System.out.println(fact);

        // problem num 4 -->
        System.out.println("Enter the num of tables");
        int num1 = sc.nextInt();
        for (int i1 = 1; i1 <= 10; i1++) {

            System.out.println(num1 + " X " + i1 + " = " + num1 * i1);
        }

        // problem no 5
        // for (int i = 0; i <= 5; i++) {
        // System.out.println("i = " + i);
        // }
        // System.out.println("i after the loop = " + i); // -->this code is wrong

    }

}
