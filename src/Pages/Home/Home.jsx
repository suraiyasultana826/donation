import Banner from '../../components/Header/Banne/Banner';
import Donate from '../../components/Header/Donate/Donate';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const donate = useLoaderData()
    

    return (
        <div>
           <Banner></Banner> 
           <Donate donate = {donate}></Donate>
        </div>
    );
};

export default Home;