import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";

const SignIn = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className="wrapper-signup">
            <div style={{ height: "395px" }} className="box">
                <h1>Войти</h1>
                <form onSubmit={handleSubmit}>
                    <input required type="email" placeholder="Ваш e-mail" />
                    <input required type="password" placeholder="Ваш Пароль" />
                    <div className="links">
                        <Link to="/signup">Нет Аккаунта?</Link>
                        <Link to="/signup">Зарегайся!</Link>
                    </div>
                    <button
                        
                    >Войти</button>
                    {err && <span>Что-то Пошло Не Так! ☹</span>}
                </form>
            </div>
        </div>
    );
};

export default SignIn;