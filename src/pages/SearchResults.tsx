import { useState, useEffect, FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { Results } from '../interfaces/results';
import { LuLoader2 } from 'react-icons/lu';
import SearchResult from '../components/SearchResult';
import Divider from '../components/Divider';
import useAxios from '../hooks/useAxios';

const initialValues: Results = {
    author: {
        name: "",
        lastname: ""
    },
    categories: [],
    items: []
}

const SearchResults: FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState<Results>(initialValues);
    const [loading, setLoading] = useState(false);
    const axiosInstance = useAxios()
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!query) {
            setResults(initialValues);
            return
        }
        setLoading(true);
        setResults(initialValues);
        setError(null);
        axiosInstance.get(`/items`, { params: { q: query } })
            .then(response => {
                setResults(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Error al buscar productos');
                setLoading(false);
            });
        return

    }, [query]);

    return (
        <div className='ui-result'>
            <div className='breadcrums-container'>
                <Breadcrumbs items={results.categories} />
            </div>
            <div className='result-container'>
                {loading && (
                    <div className="loader">
                        <LuLoader2 className="loader-icon" />
                    </div>
                )}
                {error && <p>{error}</p>}
                <ul>
                    {results.items.map((product, index) => (
                        <div key={product.id}>
                            <SearchResult product={product} />
                            {index < results.items.length - 1 && <Divider />}
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SearchResults;