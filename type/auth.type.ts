/// Backend 
export interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
  emailVerified?: boolean;
  image?: string | null;
}
 
export interface Session {
  user: User | null;
}

export type UserRole = "USER" | "ADMIN" | "GUEST";

export type ClientSessionType = {
  user: {
    id: string;
    name: string;
    email?: string;
    role: UserRole;
  };
};