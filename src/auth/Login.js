import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../slice/userApi";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    reset();
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="title">Sign in</h2>

      {/* Username Field */}
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Username must be a valid email id"
            }
          })}
        />
      </div>
      {errors.email && (
        <span className="error w-full max-w-[380px] ml-5 text-red-500 font-normal">
          {errors.email.message}
        </span>
      )}

      {/* Password Field */}
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password must be at least 6 characters long",
            minLength: { value: 6, message: "Password must be at least 6 characters long" }
          })}
        />
      </div>
      {errors.password && (
        <span className="error w-full max-w-[380px] ml-5 text-red-500 font-normal">
          {errors.password.message}
        </span>
      )}

      {/* Example: Invalid credentials error (show on failed login) */}
      {/* <span className="error w-full max-w-[380px] ml-5 text-red-500 font-normal">
        Invalid Username or password
      </span> */}

      <input type="submit" value="Login" className="btn solid" />
    </form>
  );
}

export default Login;