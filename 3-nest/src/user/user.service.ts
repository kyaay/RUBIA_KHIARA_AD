import { Injectable } from '@nestjs/common';
import { User } from './user.model'

@Injectable()
export class UserService {

    private users: Map<number, User> = new Map<number, User>();

    constructor(){
        this.populate();
    }

    getAll(){
        var populatedData = [];
        for(const user of this.users.values()){
            populatedData.push(user.toJson());
        }
        return populatedData;
    }

    populate(){
        this.users.set(1, new User(1, "James", 20, "james@gmail.com", "1234"))
        this.users.set(2, new User(2, "Christian", 21, "christian@gmail.com", "1234"))
        this.users.set(3, new User(3, "Gadiane", 22, "gadiane@gmail.com", "1234"))
        this.users.set(4, new User(4, "shufo", 23, "shufo@gmail.com", "1234"))
    }

    register(User:any){
        var newUser = User;
        newUser = new User(User?.id, User?.name, User?.age, User?.email, User?.password);
        this.users.set(User.id, User);
        this.logAllUser();

    }

    logAllUser(){
        for(const[key, user] of this.users.entries()){
            console.log(key);
            user.displayInfo();
        }
    }

    deleteUser(id:number){

        if(this.users.has(id))
        this.users.delete(id);
        else console.log("This user has already been deleted. ID Number: " + id);
    }

}

