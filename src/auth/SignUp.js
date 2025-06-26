import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../slice/userApi";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // Handle sign up logic here
    dispatch(registerUser(data));
    reset();
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="title">Sign up</h2>

      {/* First Name Field */}
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: "First name is required" })}
        />
      </div>
      {errors.firstName && (
        <span className="error w-full max-w-[380px] ml-5 text-red-500 font-normal">
          {errors.firstName.message}
        </span>
      )}

      {/* Last Name Field */}
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: "Last name is required" })}
        />
      </div>
      {errors.lastName && (
        <span className="error w-full max-w-[380px] ml-5 text-red-500">
          {errors.lastName.message}
        </span>
      )}

      {/* Username Field */}
      <div className="input-field">
        <i className="fas fa-user-circle"></i>
        <input
          type="text"
          placeholder="email"
          {...register("email", { required: "Email is required" })}
        />
      </div>
      {errors.email && (
        <span className="error w-full max-w-[380px] ml-5 text-red-500">
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
            required: "Password must be at least 6 characters long and Required",
            minLength: { value: 6, message: "Password must be at least 6 characters long" }
          })}
        />
      </div>
      {errors.password && (
        <span className="error w-full max-w-[380px] ml-5 text-red-500">
          {errors.password.message}
        </span>
      )}

      <input type="submit" value="Sign up" className="btn solid" />
    </form>
  );
}

export default SignUp;