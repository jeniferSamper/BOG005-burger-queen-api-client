/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import logoFondoPizarra from '../img/logoSinFondo.png'
// import loginUser from '../../petitions/userPetition'
import FormLogin from "../components/formLogin.jsx";
// let data = { email: 'grace@systers.xyz', password: '123456' };

// eslint-disable-next-line react-hooks/rules-of-hooks
// const [user, setuser] = useState('h')

const Login = () => {
    // const [dataEmail, setDataEmail] = useState('vacio')
    
    // const inputEmail = (event)=>{
    //     setDataEmail(event.target.value)
    // }

    
    // const dataUSER = {
    //     "email": "grace.hopper@systers.xyz",
    //     "password": "123456"
    // }
    return (
        <div className="login_container">
            <header>
                <img src={logoFondoPizarra} alt="logo" />
            </header>
            <FormLogin />
        </div>
    )
}

export default Login