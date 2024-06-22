import { FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchBox from './SearchBox';

const Header: FC = () => {
    const navigate = useNavigate();

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

export default Header;