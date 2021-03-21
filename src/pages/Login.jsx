import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik';
import { render } from '@testing-library/react';
import { authService } from './../service/authService';
import { setUser } from '../store/action/userActions.js'
import { userService } from './../service/userService';

class _Login extends Component {
    state = {
        msg: '',
        loginCred: {
            username: '',
            password: ''
        }
    }
    componentDidMount() {
        userService.query()
    }
    loginHandleChange = ev => {
        const { name, value } = ev.target
        this.setState(prevState => ({
            loginCred: {
                ...prevState.loginCred,
                [name]: value
            }
        }))
        console.log(this.state);
    }

    doLogin = async ev => {
        ev.preventDefault()
        console.log('hello');
        const { username, password } = this.state.loginCred
        if (!username) {
            return this.setState({ msg: 'Please enter user/password' })
        }
        const userCreds = { username, password }
        try {
            const user = await userService.login(userCreds)
            console.log('from login: ', user);
            const { setUser } = this.props
            await setUser(user)
            this.props.history.push('/')
        }
        catch (err) {
            this.setState({ msg: 'Try again' })
        }
    }
    render() {
        const { username, password } = this.state.loginCred
        return <div className="login">
            <h1>Login</h1>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={this.doLogin}>
                        <input
                            type="username"
                            name="username"
                            onChange={this.loginHandleChange}
                            onBlur={handleBlur}
                            value={username}
                        />

                        <input
                            type="password"
                            name="password"
                            onChange={this.loginHandleChange}
                            onBlur={handleBlur}
                            value={password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
           </button>
                    </form>
                )}
            </Formik>
        </div>
    }
}

const mapStateToProps = state => {
    const { loggedinUser } = state.user
    return {
        loggedinUser
    }
}

const mapDispatchToProps = {
    setUser
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login)