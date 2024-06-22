import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

interface Product {
    id: string;
    title: string;
}

const SearchResults: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const baseUrl = "http://localhost:3000"

    useEffect(() => {
        if (!query) {
            setProducts([]);
            return
        }
        setLoading(true);
        setError(null);
        axios.get(`${baseUrl}/items`, { params: { q: query } })
            .then(response => {
                console.log(response);

                setProducts(response.data.items);
                setLoading(false);
            })
            .catch(error => {
                setError('Error al buscar productos');
                setLoading(false);
            });
        return

    }, [query]);

    return (
        <div>
            <h1>Resultados de búsqueda</h1>
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;