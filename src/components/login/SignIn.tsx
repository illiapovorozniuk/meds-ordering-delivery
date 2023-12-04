import React, { useRef, useState } from "react";
import styles from "./SignIn.module.scss"; // Make sure to replace with your actual styles
import { useAuthentication } from "@/hooks/useAuthentication";

const SignIn = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const [tryCount, setTryCount] = useState<number>(0);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    useAuthentication(emailInput.current.value, passwordInput.current.value);
    setTryCount(() => tryCount + 1);
    if (!localStorage.getItem("user")) event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input ref={emailInput} type="email" placeholder="email" />
      <input ref={passwordInput} type="password" placeholder="password" />
      <button>Submit</button>
      <div>{tryCount == 0 ? null : "Неправильно уведені email або пароль"}</div>
    </form>
  );
};

export default SignIn;
