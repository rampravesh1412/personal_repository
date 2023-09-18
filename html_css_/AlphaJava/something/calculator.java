package Student.rampravesh;

import java.util.*;

public class calculator {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the first Input");
    int A = sc.nextInt();
    System.out.println("Enter the second Input");
    int B = sc.nextInt();
    System.out.println("Enter the Operator");
    char operator = sc.next().charAt(0);

    switch (operator) {
      case '+':
        System.out.println(A + B);
        break;

      case '-':
        System.out.println(A - B);
        break;

      case '*':
        System.out.println(A * B);
        break;

      case '/':
        System.out.println(A / B);
        break;

      case '%':
        System.out.println(A % B);
        break;
      default:
        System.out.println("wroung operators");

    }
  }
}
