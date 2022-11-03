import { UserDTO } from './users';

describe('User', () => {
  it('should be defined', () => {
    expect(new UserDTO()).toBeDefined();
  });
});
