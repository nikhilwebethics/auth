import { useState } from "react";

import classes from "./auth-form.module.css";

function AuthForm() {
  const [gmail, setGmail] = useState();

  function switchAuthModeHandler() {
    sessionStorage.setItem("id", gmail);

  }

  return (
    <>
      <section className={classes.auth}>
        <h1>Login</h1>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" required />
          </div>
          <div className={classes.actions}>
            <button onClick={switchAuthModeHandler}>Login</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AuthForm;
