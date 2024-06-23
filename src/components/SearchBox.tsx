import { useState, FormEvent, useEffect, FC } from 'react';
import { CiSearch } from 'react-icons/ci';
import logo from '../assets/mercadolibre_logo.png'
import { useNavigate, useSearchParams } from 'react-router-dom';

interface SearchBoxProps {
    onSearch: (query: string) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const queryParam = searchParams.get('q') || '';

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
    };

    useEffect(() => {
        setQuery(queryParam)
    }, [queryParam])


    return (
        <form onSubmit={handleSubmit} className='search-field-container'>
            <img src={logo} alt="" onClick={() => navigate("/")} />
            <input
                type="text"
                placeholder="Nunca dejes de buscar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type='submit'><CiSearch size={20} /></button>
        </form>
    );
}

export default SearchBox;