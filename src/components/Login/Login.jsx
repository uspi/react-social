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
const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                {createField("Email", "email", [required], Input)}
                {/* <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} /> */}
            </div>
            <div className="">
                {createField("Password", "password", [required], Input, { type: "password" })}
            </div>
            <div className="">
                {createField(null, "rememberMe", null, Input, { type: "checkbox" })}
                <span>Remember me</span>
            </div>
            {error && <div className={formStyle.formSummaryError}>
                {error}
            </div>}
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div className={style.content}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);