import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { authService } from './../service/authService';
import { setUser } from '../store/action/userActions.js'
import { userService } from './../service/userService';

class _Signup extends Component {
    state = {
        msg: '',
        signupCred: {
            username: '',
            password: '',
            fullname: '',

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
    signupHandleChange = ev => {
        const { name, value } = ev.target
        this.setState(prevState => ({
            signupCred: {
                ...prevState.signupCred,
                [name]: value
            }
        }))

    }
    doSignup = async ev => {
        ev.preventDefault()
        console.log(this.state.signupCred);
        const { username, password, fullname } = this.state.signupCred
        if (!username || !password || !fullname) {
            return this.setState({ msg: 'All inputs are required' })
        }
        const user = await authService.signup({ username, password, fullname })
        await this.props.setUser(user)
        this.props.history.push('/')
    }
    render() {
        return < div className="signup" >
            <h1>Sign Up</h1>
            <Formik>
                <Form onSubmit={this.doSignup}>
                    <label htmlFor="fullname"></label>
                    <Field id="fullname" name="fullname" placeholder="Fullname"
                        onChange={this.signupHandleChange} />

                    <label htmlFor="username"></label>
                    <Field id="username" name="username" placeholder="Username"
                        onChange={this.signupHandleChange} />

                    <label htmlFor="password"></label>
                    <Field
                        id="password"
                        name="password"
                        type="password"
                        onChange={this.signupHandleChange}
                        placeholder="Password"
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div >

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

export const Signup = connect(mapStateToProps, mapDispatchToProps)(_Signup)
