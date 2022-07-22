import React from "react";
import { useAuth } from "./auth-context";

const SignUpStateContext = React.createContext();
const SignupDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "start-request":
      return { ...state, status: "loading", error: null };
    case "request-success":
      return { ...state, status: "success", error: null };
    case "request-fail":
      return { ...state, status: "fail", error: action.error };
    default:
      throw new Error("Undefined action type dispatched");
  }
};

export function SignupProvider({ children }) {
  const { user: payload } = useAuth();
  const [state, dispatch] = React.useReducer(reducer, {
    status: null,
    error: null,
    payload,
  });
  return (
    <SignUpStateContext.Provider value={state}>
      <SignupDispatchContext.Provider value={dispatch}>
        {children}
      </SignupDispatchContext.Provider>
    </SignUpStateContext.Provider>
  );
}

export function useSignupState() {
  const context = React.useContext(SignUpStateContext);
  if (context === undefined) {
    throw new Error(" context not used Properly");
  }
  return context;
}
export function useSignupDispatch() {
  const context = React.useContext(SignupDispatchContext);
  if (context === undefined) {
    throw new Error(" context not used Properly");
  }
  return context;
}
