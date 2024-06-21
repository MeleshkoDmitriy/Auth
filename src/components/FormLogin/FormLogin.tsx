import { FormEvent, useId, useState } from "react";
import styles from "./FormLogin.module.scss";

export const FormLogin = () => {
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const nameId = useId();
  const passwordId = useId();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();


    setNameValue("");
    setPasswordValue("");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Login form</h2>
        <label htmlFor={nameId} className={styles.label}>
          <span>Name:</span>
          <input
            type="text"
            name={nameId}
            value={nameValue}
            onChange={handleNameChange}
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
          Login
        </button>
      </form>
    </div>
  );
};
