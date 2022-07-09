import { GithubLogo, X } from "phosphor-react";

import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = false;
  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <GithubLogo size={36} color="#04d361" />
      Alan Vital
      <X size={36} color="#737388" className={styles.closeIcon}/>
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <GithubLogo size={36} color="#eba417" />
      Sign In with Github
    </button>
  );
}
