import { Injectable } from '@nestjs/common';

@Injectable()
export class Exercise3Service {
    helloWorld(name:string){
        return "Hello there "+name;
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
}
