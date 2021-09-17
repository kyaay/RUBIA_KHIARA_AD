import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Post('/addCar')
  addCar(@Body() body:any){
    return this.e3.addCar(body);
  }

  @Get('/addKhiarCar2')
  test2() {
    return this.e3.addKhiarCar2();
  }

  @Get('/logCars')
  logCars() {
    return this.e3.logAllCars();
  }

}