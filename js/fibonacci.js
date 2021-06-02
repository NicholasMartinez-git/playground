function fibonacci(num) {
    // program to generate fibonacci series up to n terms

    // take input from the user
    const number = parseInt(prompt('Enter the number of terms: '));
    let a = 0, b = 1, c;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= number; i++) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
}
fibonacci();