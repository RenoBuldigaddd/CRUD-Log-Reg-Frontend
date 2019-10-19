import React, { Component } from 'react';
import classnames from 'classnames';
import './index.scss';

class RegisterPage extends Component {
    state = {
        login: '',
        password: '',
        re_password: '',
        email: '',
        errors: {
            //invalid: 'Користувач по даних параметрах уже є.',
            login: 'You didn`t enter login',
            password: 'You didn`t enter password',
            re_password: 'Your password isn`t correct!',
            email: 'You didn`t enter email'
        }
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        const { login } = this.state;
        let vasyl = "vasyl";
        let errors = {};
        if (login == vasyl) {
            //errors.invalid ;
        }
        this.setState({ errors: errors });
        /* https://codepen.io/Qanser/pen/dVRGJv */
    }
        CheckTextBox = (e) => {
            {
                const {login} = this.state;
                const {errors} = this.state;
                if (login == null) {
                    this.CheckTextBox = errors.invalid;
                }
            }
        }
        // onChange = (e) => {
        //     this.setState({ [e.target.name]: e.target.value });
        // }

        onChange = (e) => {
            if (!!this.state.errors[e.target.name]) {
              let errors = Object.assign({}, this.state.errors);
              delete errors[e.target.name];
              this.setState({
                [e.target.name]: e.target.value,
                errors
              });
            } else {
              this.setState({ [e.target.name]: e.target.value });
            }
          }
          handleConfirmPassword = e => {
            //const {errors} = this.state;
            const {password} = this.state;
            if (e.target.value !== password) {
                alert("несовпадає");
              //errors.re_password.value;
            }
          };
        render() {
            const { errors, login } = this.state;
            console.log('----login-----', login);
            return (
                <div className="signin">
                    <form onSubmit={this.onSubmitHandler} className="form-signin">
                        <h1> Registration</h1>
                        <h2 className="h3 mb-3 font-weight-normal text-center">Please sign up</h2>
                        {
                            !!errors.invalid &&
                            <div className="alert alert-danger" role="alert">
                                {errors.invalid}
                            </div>
                        }
                        <label htmlFor="inputEmail" className="sr-only">Login</label>

                        <fieldset className="form-group">
                            <label htmlFor="login">Login</label>
                            <input 
                                type="text"
                                className={classnames('form-control', { "is-invalid": !!this.state.errors.login })}
                                id="login"
                                name="login"
                                value={login}
                                placeholder="karaka"
                                onChange={this.onChange} />

                            { !!errors.login &&
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>}
                        </fieldset>

                        <label htmlFor="inputEmail" className="sr-only">Password</label>

                        <fieldset className="form-group">
                            <label htmlFor="password">Enter your password</label>
                            <input 
                                type="password"
                                className={classnames('form-control', { "is-invalid": !!this.state.errors.password })}
                                id="password"
                                value={this.password}
                                onChange={this.onChange}
                                name="password" 
                                placeholder="Nagibator228" />
                                
                                { !!errors.password &&
                            <div className="invalid-feedback">
                                Please enter your password.
                            </div>}
                        </fieldset>

                        <fieldset className="form-group">
                            <label htmlFor="re_password">Re-Enter Password</label>
                            <input type="password"
                                className={classnames('form-control', { "is-invalid": !!this.state.errors.re_password })}
                                id="password"
                                name="password"
                                value={this.re_password}
                                onChange={this.handleConfirmPassword}
                                placeholder="Nagibator228" />  

                              { !!errors.re_password &&
                            <div className="invalid-feedback">
                                Please re-enter your password.
                            </div>}
                        </fieldset>

                        <fieldset className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text"
                                className={classnames('form-control', { "is-invalid": !!this.state.errors.email })}
                                id="email"
                                name="email"
                                value={this.email}
                                onChange={this.onChange}
                                placeholder="ssssss@jmail.com " />
                                
                                {!!errors.email &&
                            <div className="invalid-feedback">
                                Please enter your Email.
                            </div>}
                        </fieldset>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                        <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
                    </form>
                </div>
            );
        };
    }

    export default RegisterPage;