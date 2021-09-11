import { Injectable } from '@nestjs/common';

@Injectable()
export class Exercise3Service {
    helloWorld(name:string){
        return "Hello there, "+ name + "!";
    }

    loopsTriangle(triangle:string, h:number){
        for (var i = 0; i < h; i++) {
            for (var c = 0; c < i; c++) {
                triangle += "* ";
            }
            triangle += "\n";
        }
        console.log(triangle);
        return;
    }

    primeNumber(a:number, prime:boolean){
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
        return;
    }
}
