import { Form } from './Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/useSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const push = useNavigate()
    const dispatch = useDispatch();


    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
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
            title="sign in"
            handleClick={handleLogin}
        />
    )
}

export { Login };