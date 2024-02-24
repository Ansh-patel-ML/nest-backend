export type UserRole = 'ADMIN' | 'ENGINEER' | 'INTERN';

export interface User {
  name: string;
  email: string;
  role: UserRole;
}
