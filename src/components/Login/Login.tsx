import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { InjectedFormProps, reduxForm } from "redux-form";
import { login, LoginPropsType } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import style from "./Login.module.css";
import formStyle from "./../common/FormsControls/FormsControls.module.css";
import { AppStateType } from "../../redux/redux-store";

// form
type LoginFormValueType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};
type LoginFormOwnPropsType = {
  captchaUrl: string | null;
};

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValueType, LoginFormOwnPropsType> & // form data props type
    LoginFormOwnPropsType // props which injected directly to component with jsx
> = ({ handleSubmit, captchaUrl, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        {createField("Email", "email", [required], Input, {
          autoComplete: "on",
        })}
        {/* <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} /> */}
      </div>
      <div className="">
        {createField("Password", "current-password", [required], Input, {
          type: "password",
          autoComplete: "on",
        })}
      </div>
      <div className="">
        {createField(null, "rememberMe", null, Input, { type: "checkbox" })}
        <span>Remember me</span>
      </div>
      {error && <div className={formStyle.formSummaryError}>{error}</div>}

      {captchaUrl && <img src={captchaUrl} alt="captcha img" />}
      {captchaUrl && (
        <div>
          {createField("Symbols from image", "captcha", [required], Input)}
        </div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

// container for login form component
// state wrapper
const LoginReduxForm = reduxForm<LoginFormValueType, LoginFormOwnPropsType>({
  form: "user-login",
})(LoginForm);

// component
type MapStatePropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};
type MapDispatchPropsType = {
  login: LoginPropsType;
};
type PropsType = MapStatePropsType & MapDispatchPropsType;

const Login: React.FC<PropsType> = (props) => {
  const onSubmit = (formData: any) => {
    props.login(
      formData.email,
      formData["current-password"],
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={style.content}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
