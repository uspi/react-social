import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import style from "./Login.module.css"
import formStyle from "./../common/FormsControls/FormsControls.module.css"

// form
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="">
                {createField("Email", "email", [required], Input, {autoComplete: "on"})}
                {/* <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} /> */}
            </div>
            <div className="">
                {createField("Password", "current-password", [required], Input, { type: "password", autoComplete: "on" })}
            </div>
            <div className="">
                {createField(null, "rememberMe", null, Input, { type: "checkbox" })}
                <span>Remember me</span>
            </div>
            {
                props.error &&
                <div className={formStyle.formSummaryError}>
                    {props.error}
                </div>

            }

            {props.captchaUrl && <img src={props.captchaUrl} alt="captcha img" />}
            {props.captchaUrl &&
                <div >
                    {createField("Symbols from image", "captcha", [required], Input)}
                </div>
            }
            <div><button>Login</button></div>
        </form>
    );
};

// container for login form component
// state wrapper
const LoginReduxForm = reduxForm({
    form: "user-login"
})(LoginForm);

// component
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData["current-password"], formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div className={style.content}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);