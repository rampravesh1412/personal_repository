package Student.rampraveshjava;

public class pattern {
    public static void main(String[] args) {
        // proble is
        // *
        // **
        // ***
        // ****
        for (int line = 1; line <= 4; line++) {
            for (int star = 1; star <= line; star++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // And reverse the pattern
        System.out.println("Down is just reverse of upper pattern");
        int n = 4;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i + 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // problem is pyramid pattern
        System.out.println("Half pyramid");

        int n1 = 4;
        for (int i1 = 1; i1 <= n1; i1++) {
            for (int j1 = 1; j1 <= i1; j1++) {
                System.out.print(j1);
            }
            System.out.println();
        }

        // problem

        System.out.println("Print character");
        char ch = 'A';
        int n2 = 4;
        for (int i2 = 1; i2 <= n2; i2++) {
            for (int cha = 1; cha <= i2; cha++) {
                System.out.print(ch);
                ch++;

            }
            System.out.println();
        }

    }

}
