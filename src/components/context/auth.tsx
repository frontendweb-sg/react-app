import { ReactNode, createContext, useContext, useReducer } from "react";

export enum AuthEnum {
  AUTH_LOGIN = "auth login",
}
const AuthContext = createContext<typeof initialState>(
  {} as typeof initialState
);

const initialState = {
  loading: false,
  isAdmin: false,
  isUser: false,
  isLoggedIn: false,
  redirectUrl: "/",
  user: {},
};

type AuthAction = { type: AuthEnum.AUTH_LOGIN; payload: boolean };
const authReducer = (state: typeof initialState, action: AuthAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch] as any}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Context can not be empty");
  return context;
};
export default AuthProvider;
