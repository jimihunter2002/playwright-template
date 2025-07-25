export const mockUser = {
  id: '12345',
  name: 'John Doe',
  email: 'abc@example.com',
};
export const mockUserWithToken = {
  ...mockUser,
  token: 'mocked_token_12345',
};
export const mockUserWithPermissions = {
  ...mockUser,
  permissions: ['read', 'write', 'delete'],
};
export const mockUserWithRoles = {
  ...mockUser,
  roles: ['admin', 'user'],
};
export const mockUserWithPreferences = {
  ...mockUser,
  preferences: {
    theme: 'dark',
    notifications: true,
  },
};
export const mockUserWithSettings = {
  ...mockUser,
  settings: {
    language: 'en',
    currency: 'USD',
  },
};
export const mockUserWithAllData = {
  ...mockUser,
  token: 'mocked_token_12345',
  permissions: ['read', 'write', 'delete'],
  roles: ['admin', 'user'],
  preferences: {
    theme: 'dark',
    notifications: true,
  },
  settings: {
    language: 'en',
    currency: 'USD',
  },
};
export const mockUserWithSensitiveData = {
  ...mockUser,
  password: 'secure_password',
  socialSecurityNumber: '123-45-6789',
  creditCardInfo: {
    number: '4111 1111 1111 1111',
    expirationDate: '12/25',
    cvv: '123',
  },
};
export const mockUserWithMinimalData = {
  id: '12345',
  name: 'John Doe',
  email: 'abc@example.com',
};
