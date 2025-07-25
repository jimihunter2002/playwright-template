export function createUser(overrides = {}) {
  return {
    id: '12345',
    name: 'John Doe',
    email: 'abc@example.com',
    ...overrides,
  };
}
