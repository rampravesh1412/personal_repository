package LivepureB5.Student.RampraveshKumar.AlphaJava.conditional;

import java.util.Scanner;

import javax.sound.sampled.SourceDataLine;

public class conditional {
    public void main(String args[]) {

        // Question 1 : Write a Java program to get a number from the user and print
        // whether it is positive or negative.

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the positive and negative num");
        int numm = sc.nextInt();
        if (0 <= numm) {
            System.out.println("This is Possitive Number");
        } else {
            System.out.println("This is Neg Number ");
        }

        // Finish the following code so that it prints You have a fever if your
        // temperature
        // is above 100 and otherwise prints You don't have a fever
        System.out.println("Enter Your Temprature");
        int temp = sc.nextInt();
        if (temp <= 100) {
            System.out.println("You have No fever");
        } else {
            System.out.println("You have fever");
        }

        // : Write a Java program to input week number(1-7) and print day of week name
        // using switch case.
        System.out.println("Enter the Num of day");
        int day = sc.nextInt();
        switch (day) {
            case 1:
                System.out.println("sunday");
                break;
            case 2:
                System.out.println("Monday");
                break;
            case 3:
                System.out.println("Tuesday");
                break;
            case 4:
                System.out.println("Wednesday");
                break;
            case 5:
                System.out.println("Thursday");
                break;
            case 6:
                System.out.println("Friday");
                break;
            case 7:
                System.out.println("Saturday");
                break;
            default:
                System.out.println("Invalid data");
        }
    }
}
