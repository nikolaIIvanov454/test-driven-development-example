import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async getUsernameByID(id: Number): Promise<string>{
        if(id === 1){
            return "Nikolai";
        }else{
            return "John"
        }
    }

    async getAge(id: Number): Promise<Number>{
        if(id === 1){
            return 18;
        }else{
            return 25;
        }
    }
}
