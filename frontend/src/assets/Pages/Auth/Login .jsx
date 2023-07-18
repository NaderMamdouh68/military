import React, { useEffect, useState } from 'react'
import '../../Styles/Login.css'
import { GrMail } from 'react-icons/gr'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import mini from "../../../assets/mini-logo.jpeg";



import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()

    const [error, setError] = useState([])

    const [loginData, setLoginData] = useState({
        password: '',
        email: '',
    })

    const [t, i18n] = useTranslation();
    const [toggle, setToggle] = React.useState(true);

    const handleClick = () => {
        i18n.changeLanguage(toggle ? 'ar' : 'en')
        setToggle(!toggle);
    };
    axios.defaults.withCredentials = true

    const handleLogin = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:5000/admin/login', loginData, { withCredentials: true })
                .then((res) => {
                    navigate('/dashboard')
                }).catch((error) => {
                    setError(error.response.data.errors[0].msg)
                })

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="home">
                <div className="uni-logo">
                </div>


                <section className='subCon'>

                    <img src={mini} alt="" className='mini-logo' />

                    <div className="body">
                        <div className="top">
                            <h2>
                                {t('تسجيل الدخول')}
                            </h2>
                        </div>
                        <div className="content" style={{ marginTop: "6rem", gap: "3rem" }}>
                            <div className="input-container" style={{ gap: "2rem", }}>
                                
                                <input
                                    type="text"
                                    placeholder={t('البريد الالكتروني')}
                                    className='inputIN'
                                    value={loginData.email} onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
                                />
                                <GrMail className='Icon'/>
                            </div>
                            <div className="input-container" style={{ gap: "2rem", }}>
                                <input
                                    type="password"
                                    placeholder={t('ادخل كلمة المرور')}
                                    className='inputIN'
                                    value={loginData.password} onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
                                />
                                 <RiLockPasswordFill className='Icon'  />
                            </div>
                            <div className="actions">
                                <button onClick={handleLogin}> {t('تسجيل الدخول')}</button>
                              
                            </div>
                        </div>
                        <div className='top' style={{ marginTop: "2rem", color: "red", fontWeight: "bolder" }}><h1>{error}</h1></div>

                    </div>


                </section>
            </div>
        </>
    )
}

export default Login