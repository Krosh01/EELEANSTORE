import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res);
            navigate("/");
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className="wrapper-signup">
            <div style={{ height: "460px" }} className="box">
                <h1>Регистрация</h1>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="Вашe Имя" />
                    <input required type="email" placeholder="Ваш e-mail" />
                    <input required type="password" placeholder="Придумай новый пароль" />
                    <div className="links">
                        <Link to="/signin">У Тебя Есть Аккаунт?</Link>
                        <Link to="/">Войди!</Link>
                    </div>
                    <button
                        onClick={() => {
                            return (
                                <Navigate to='/' />
                            )
                        }}
                    >Зарегаться</button>
                    {err && <span>Что-то пошло не так...</span>}
                </form>
            </div>
        </div>
    );
};

export default SignUp;