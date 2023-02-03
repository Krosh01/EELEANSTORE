import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form } from './Form'
import { setUser } from '../store/slices/useSlice'

const SignUp = () => {

    const dispatch = useDispatch();
    const push = useNavigate()


    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accesToken,
                }))
                push('/')
            })
            .catch(console.error)
    };

    return (
        <Form
            title="register"
            handleClick={handleRegister}
        />
    )
}

export { SignUp }