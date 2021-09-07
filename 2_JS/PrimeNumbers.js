var a = 5,
    prime = true; //have to change the number huhu

if (a > 1) {
    for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            prime = false;
            break;
        }
    }
}

if (prime) {
    console.log(a + " is a prime number? " + prime);
} else {
    console.log(a + " is a prime number? " + prime);
}