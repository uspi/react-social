import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from "./Login.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="">
                <Field placeholder={"Login"} name={"login"} component={"input"} />
            </div>
            <div className="">
                <Field placeholder={"Password"} name={"password"} component={"input"} />
            </div>
            <div className="">
                <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
                Remember me
            </div>
            <div><button>Login</button></div>
        </form>
    );
};

// container for login form component
// state wrapper
const LoginReduxForm = reduxForm({
    form: "user-login"
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={style.content}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;