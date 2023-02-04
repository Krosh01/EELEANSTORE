import { useAuth } from '../../hooks/use-auth';
import HomePage from './HomePage';

const Home = () => {

    const {isAuth,email}=useAuth()

    return (
        <>
        <HomePage/>
        </>
    )

};
export default Home;