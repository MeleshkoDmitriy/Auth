import { FormEvent, useId, useState } from "react";
import styles from "./FormLogin.module.scss";
import { useAppDispatch } from "../../store/store";
import { loginUser } from "../../store/slices/actionCreators";

export const FormLogin = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const dispatch = useAppDispatch();

  const nameId = useId();
  const passwordId = useId();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(loginUser({ login: loginValue, password: passwordValue }));

    setLoginValue("");
    setPasswordValue("");
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Login form</h2>
        <label htmlFor={nameId} className={styles.label}>
          <span>Login:</span>
          <input
            type="text"
            name={nameId}
            value={loginValue}
            onChange={handleLoginChange}
          />
        </label>
        <label htmlFor={passwordId} className={styles.label}>
          <span>Password:</span>
          <input
            type="password"
            name={passwordId}
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};
