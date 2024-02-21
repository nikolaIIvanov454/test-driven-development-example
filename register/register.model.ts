import { Module } from '@nestjs/common';
import { UserModule } from "../user/user.module";
import { RegisterService } from "../register/register.service";

export interface Register {
    username: string,
    email: string,
    password: string,
}

@Module({
    imports: [UserModule],
    providers: [RegisterService],
})

export class RegisterModule {}
