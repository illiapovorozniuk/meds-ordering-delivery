import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./RegistrationForm.module.scss";

interface RegistrationFormProps {
  onSubmit: SubmitHandler<RegistrationFormData>;
}

interface RegistrationFormData {
  username: string;
  email: string;
  password: string;
  gender: string;
}

const schema = yup.object().shape({
  username: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  password: yup.string().required("This field is required"),
  gender: yup.string().required("This field is required"),
});

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.registration_form}
    >
      <div>
        <label>Username:</label>
        <Controller
          name="username"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        <p>{errors.username?.message}</p>
      </div>

      <div>
        <label>Email:</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Password:</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <input type="password" {...field} />}
        />
        <p>{errors.password?.message}</p>
      </div>

      <div>
        <label>Gender:</label>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          )}
        />
        <p>{errors.gender?.message}</p>
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegistrationForm;
