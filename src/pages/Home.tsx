import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../components/SearchBox';

const Home: FC = () => {
    const navigate = useNavigate()

    const searchProducts = (query: string) => {
        if (!query) return
        navigate(`/search?q=${query}`)
    };
    return (
        <div className='header'>
            <SearchBox onSearch={searchProducts} />
        </div>
    );
}

export default Home;