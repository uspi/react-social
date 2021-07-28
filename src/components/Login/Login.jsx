import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import style from "./Login.module.css"
import formStyle from "./../common/FormsControls/FormsControls.module.css"

// form
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="">
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
            </div>
            <div className="">
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}
                    type={"password"} />
            </div>
            <div className="">
                <Field type={"checkbox"} name={"rememberMe"} component={Input} />
                <span>Remember me</span>
            </div>
            {props.error && <div className={formStyle.formSummaryError}>
                {props.error}
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