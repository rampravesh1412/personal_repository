package LivepureB5.Student.RampraveshKumar.AlphaJava.variable;

import java.util.*;

public class varanddatatype {
    public static void main(String[] args) {
        // System.out.println("hello baby!");

        // Qno problem

        // ----> In a program input 3 numbers A , B and C You have to output the average
        // of these number

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the first Number");
        int val1 = sc.nextInt();
        System.out.println("Enter the second Number");
        int val2 = sc.nextInt();
        System.out.println("Enter the third number");
        int val3 = sc.nextInt();

        // Adding of three Number
        int totalSum = val1 + val2 + val3;

        // find the average number so,

        int result = (totalSum / 3);

        System.out.println("The avarage three num of " + result);

        // Qno ---> in a program input the side of a square you have to output the area
        // of the square

        System.out.println("Enter the side of square value");
        float side = sc.nextFloat();
        double resultSqSide = side * side;
        System.out.println("Area Of Square " + resultSqSide);

        // Qno 3 Enter cost of 3 item from the user (using flot data type ) a pencil a
        // pen and an eraser. you have to output the total cost of the item back to the
        // user as their bill
        // (Add on : You can also try adding 18% gst tax to the item in the bill as an
        // advanced problem)

        float pencil = 3.54f;
        float pen = 3.40f;
        float eraser = 3.59f;

        double totalPrice = pencil + pen + eraser;
        System.out.println("Total price is : " + totalPrice);

        // Gst formula ---> GST Amount = (Original Cost*GST Rate Percentage) / 100.

        double gstAmount = ((totalPrice * 18) / 100);
        System.out.println("Gst Amount is : " + gstAmount);

        // total price and include the gst

        System.out.println("total price + gst amount : " + (totalPrice + gstAmount));

        // Qno 4 ----> what will be the type of result in the following java code

        byte b = 4;
        char c = 'a';
        short s = 512;
        int i = 1000;
        float f = 3.14f;
        double d = 99.9954;

        double resultt = (f * b) + (i % c) - (d * d);
        System.out.println(resultt);

        // Will the following statement give any error in java

        int $ = 24; // ---> we are take dollar and underscore

        System.out.println($);

        // complete the assignment first

    }

}
