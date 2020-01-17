export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  fakeToken?: string;
}

export interface UserApi {
  id?: number;
  fakeToken?: string;
  name?: {
    first: string;
    last: string;
  };
  login: string;
  password: string;
}

export interface UserToken {
  token?: string;
}
