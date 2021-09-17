import { Controller, Get, Param } from '@nestjs/common';
import { Exercise3Service } from './exercise3.service';

@Controller('exercise3')
export class Exercise3Controller {
    constructor(private readonly e3: Exercise3Service){}


    @Get("/helloWorld/:name")
  getHello(@Param('name') name:string): string {
    return this.e3.helloWorld(name);
  }

  @Get("/loopsTriangle/:height")
  loopsTriangle(@Param('height') height:string) {
      var parsedHeight = parseInt(height);
      
    return this.e3.loopsTriangle(" ", parsedHeight);
  }

  @Get("/primeNumber/:num")
  primeNumber(@Param('num') num:number, prime:boolean) {
    return this.e3.primeNumber(num, prime);
  }

  @Get('/addKhiarCar')
  test(){
    this.e3.addKhiarCar();
    //return;
  }

}