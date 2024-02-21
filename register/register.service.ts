import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserModel } from 'src/user/user.model'; 

@Injectable()
export class RegisterService {
    private userService: UserService;
    private readonly users: UserModel[] = [];

    async registerUser(username: string, password: string){
        if(password.length < 8){
            throw new Error('Password is too short!');
        }

        if(this.users.map((user) => user.username === username)){
            this.users.push({ id: this.users.length + 1, username, password: '12345678' });
            return 'Successfully registered the user!';
        }

        return 'Registration failed!';
    }
}
