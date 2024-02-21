import { Test, TestingModule } from '@nestjs/testing';
import { RegisterService } from './register.service';

describe('RegisterService', () => {
  let service: RegisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterService],
    }).compile();

    service = module.get<RegisterService>(RegisterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('The user should be able to register', async () => {
    const result = await service.registerUser('Nikolai', '12345678');
    expect(result).toEqual('Successfully registered the user!');
  });

  it('The password should be invalid', async () => {
    await expect(service.registerUser('Nikolai', '1234')).rejects.toThrow('Password is too short!');
  });
});
