import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/index";
const Auth = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDfefault();
    dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        {!auth && <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>}
      </section>
    </main>
  );
};

export default Auth;
