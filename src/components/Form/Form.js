import React from 'react'
import './Form.css'
import Error from '../Error'

class Form extends React.Component{
    data = {
        firstName: 'James',
        lastName: 'Bond',
        password: '007'
    }

    state = {
        firstName: '',
        lastName: '',
        password: '',
        has_firstName: true,
        validFirstName: false,
        has_lastName: true,
        validLastName: false,
        has_password: true,
        validPassword: false,
        allRight: false
    }

    changeInput = e => {
        console.log(e.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {
            firstName, lastName, password, 
            hasFirstName, hasLastName, hasPassword, 
            validFirstName, validLastName, validPassword, 
            allRight
        } = this.state;

        return(
            <div className="app-container">
                <form className="form">
                    <h1>Введите свои данные, агент</h1>
                    <div className="field">
                        <label htmlFor="name" className="field__label">
                            <span className="field-label">Имя</span>
                        </label>
                        <input onChange={this.changeInput} value={firstName} name="firstName" id="name" className="field-input"/>
                        <div className="field__error">
                            <span className="field-error">
                                <Error hasError={hasFirstName} />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="last-name" className="field__label">
                            <span className="field-label">Фамилмя</span>
                        </label>
                        <input onChange={this.changeInput} value={lastName} name="lastName" id="last-name" className="field-input"/>
                        <div className="field__error">
                            <span className="field-error">
                                <Error validError={validLastName} hasError={hasLastName} />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="password" className="field__label">
                            <span className="field-label">Пароль</span>
                        </label>
                        <input onChange={this.changeInput} value={password} name="password" id="password" className="field-input"/>
                        <div className="field__error">
                            <span className="field-error">
                                <Error validError={validPassword} hasError={hasPassword} />
                            </span>
                        </div>
                    </div>
                    <div className="form__buttons">
                        <button className="button">проверить</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form