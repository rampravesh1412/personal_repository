package Student.rampravesh;

import java.util.*;

public class ifelse {
    public static void main(String args[]) {
        // problem is 18 greater than person are drive and less then is not drive
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the your age");
        int age = sc.nextInt();
        if (age >= 18) {
            System.out.println("you can drive");
        }

        else if (age >= 10 && 15 >= age) {
            System.out.println("You are eligible 3 to 8 year after");

        }

        else {
            System.out.println("you are child so you cant drive");
            
        }
    }
}