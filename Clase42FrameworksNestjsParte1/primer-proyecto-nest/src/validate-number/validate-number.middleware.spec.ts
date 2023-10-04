import { ValidateNumberMiddleware } from './validate-number.middleware';

describe('ValidateNumberMiddleware', () => {
  it('should be defined', () => {
    expect(new ValidateNumberMiddleware()).toBeDefined();
  });
});
