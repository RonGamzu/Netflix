import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignUpScreen.css";
function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="sign-up-screen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="sign-up-screen-gray">New to Netflix? </span>
          <span className="sign-up-screen-link" onClick={register}>
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
