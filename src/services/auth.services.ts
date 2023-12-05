export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
  avatar?: string;
  active: boolean;
}
class AuthService {
  loginInitialValues() {
    return {
      email: "",
      password: "",
    };
  }
  registerInitialValues() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobile: "",
    };
  }
  login() {}
  register() {}
  forgotPassword() {}
}
const authService = new AuthService();
export { authService };
