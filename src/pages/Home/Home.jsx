
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth'
import { useDispatch } from 'react-redux';
import HomePage from './HomePage';
import { removeUser } from '../../store/slices/useSlice';

const Home = () => {

    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()

    return isAuth ? (
        <>
            <HomePage />
            <button onClick={dispatch(removeUser())}>
                log out from {email}
            </button>
        </>
    ) : (
        <>
            <Navigate to="/login" />
        </>
    );
};
export default Home;