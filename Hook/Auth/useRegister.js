/* NPM IMPORTS */
import { useState, useEffect } from 'react'
import axios from 'axios'

/* CUSTOM IMPORTS */
import AuthEndpoints from '../../config/endpoints/Authentication'

const { registerUser } = AuthEndpoints

const useRegister = (data) => {

    /* LOCAL STATES */
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState(null)
    const [spinner, setSpinner] = useState(false)

    /* HOOKS */

    /* HANDLE LOGIN SUBMIT */
    const onSubmit = async (navigation) => {
        try {
            if (!email) {
                setErrorMessage('Email required*')
                return;
            } else if (!password || password.length < 6) {
                setErrorMessage('Minimum 6 letters of password is required* ')
                return;
            }
            else if (password != confirmPassword) {
                setErrorMessage('password and confirm is not same* ')
                return;
            } else {
                setErrorMessage(null)
                navigation.navigate('login')

            }

            setSpinner(true)

            /* REQUEST */
            let response = await axios({
                method: 'POST',
                url: registerUser,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            setSpinner(false)
            console("response", response)

            /* FALSE */
            !response.data.success && setErrorMessage(response.data.error)

            /* SUCCESS */
            if (response.data.success) {

                console.log(response.data.success)
                // localStorage.setItem('token', response.data.token)


                // dispatch({ type: "SET_LOGIN", login: true, token: response.data.token })

            }

        } catch (e) {
            /* ERROR */
            setSpinner(false)
            console.log(e)
            setErrorMessage("Something Went Wrong")

        }
    }

    return { email, password, errorMessage, spinner, setEmail, setPassword, setSpinner, confirmPassword, setConfirmPassword, onSubmit }


}

export default useRegister