import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserController', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('The result should be the username Nikolai', async () => {
    const result = await service.getUsernameByID(1);
    expect(result).toEqual('Nikolai');
  });

  it('The age should be 18', async () => {
    const result = await service.getAge(1);
    expect(result).toEqual(18);
  });
});