import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';

const Header: FC = () => {
    const navigate = useNavigate();

    const searchProducts = (query: string) => {
        if (!query) return
        navigate(`/items?q=${query}`)
    };
    return (
        <div className='header'>
            <SearchBox onSearch={searchProducts} />
        </div>
    );
}

export default Header;