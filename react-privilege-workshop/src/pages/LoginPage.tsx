import axios from "axios";
import { FormikErrors, useFormik } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  username: string;
  password: string;
}
export function LoginPage() {
  const navigate = useNavigate();
  const toast = useRef<Toast | null>(null);

  const loginForm = useFormik<LoginForm>({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (data) => {
      let errors: FormikErrors<LoginForm> = {};
      if (!data.username) {
        errors.username = "Username is required.";
      }
      if (!data.password) {
        errors.password = "Password is required.";
      }
      return errors;
    },
    onSubmit: (data) => {
      console.log(data);
      axios
        .post<{ token: string }>("http://localhost:8000/login", {
          username: data.username,
          password: data.password,
        })
        .then((response) => {
          console.log(response);
          if (response.data) {
            localStorage.setItem('token', response.data.token)
            navigate('/dashboard')
          }
        })
        .catch((error) => {
          console.log(error);
          toast.current?.show({
            severity: "warn",
            summary: "Error Message",
            detail: error.message,
            life: 3000,
          });
        });
    },
  });
  return (
    <div className="h-screen flex align-items-center justify-content-center">
      <Toast ref={toast} />
      <form
        onSubmit={loginForm.handleSubmit}
        className="card shadow-2 border-round w-4 p-4"
      >
        <div className="text-center text-3xl font-medium text-900 mb-3">
          Login
        </div>
        <div className="field">
          <label htmlFor="username" className="block">
            Username
          </label>
          <InputText
            value={loginForm.values.username}
            onChange={loginForm.handleChange}
            id="username"
            name="username"
            aria-describedby="username-help"
            className="block w-full b-3"
          />
          {loginForm.touched.username && loginForm.errors.username && (
            <small id="username-help" className="block text-red-400">
              Enter your username
            </small>
          )}
        </div>
        <div className="field">
          <label htmlFor="password" className="block">
            Password
          </label>
          <InputText
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            id="password"
            name="password"
            type="password"
            aria-describedby="password-help"
            className="block w-full b-3"
          />
          {loginForm.touched.password && loginForm.errors.password && (
            <small id="password-help" className="block text-red-400">
              Enter your password.
            </small>
          )}
        </div>
        <Button type="submit" label="Login" className="w-full" />
      </form>
    </div>
  );
}
