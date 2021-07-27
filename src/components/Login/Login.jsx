import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import style from "./Login.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="">
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
            </div>
            <div className="">
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
            </div>
            <div className="">
                <Field type={"checkbox"} name={"rememberMe"} component={Input} />
                <span>Remember me</span>
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